import { NextResponse } from "next/server";
import { connectToDB } from "../../lib/MongoDB";
import User from "../../models/Users";
import jwt from "jsonwebtoken"; // Import jsonwebtoken for token generation
import { sensitiveHeaders } from "http2";
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing
const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

interface userData {
  email: string;
  password: string;
}
interface userResponse extends Document {
  email: string;
  name: string;
  password: string;
  role: string;

}
export async function POST(req: Request) {
  try {
    const data: userData = await req.json();
    const { email, password }: userData = data;
    await connectToDB();
    const users:userResponse = await User.findOne({ email: email } , {_id:0 , createdAt:0 , updatedAt:0 , __v:0});
    if (!users) {
      return NextResponse.json({ message: "User doesn't exsist" });
    }
    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid Credentials" } , {status:401});
    } else if (users.role !== "admin") {
      return NextResponse.json({ message: "Not authorize. Need admin access" }, {status:401});
    } else {
      const jwtToken:string = await jwt.sign({name:users.name , email: users.email , role: users.role }, JWT_SECRET, {expiresIn:'1h'});
      return NextResponse.json({
        message: "Login successfully connected to the Application",
        name: users.name,
        username: users.email,
        token:jwtToken
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Unable to fetch!!!" });
  }
}
