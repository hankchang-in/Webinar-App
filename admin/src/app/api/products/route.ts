import { NextRequest, NextResponse } from "next/server";
import {connectToDB} from '../../lib/MongoDB'
import Product from "../../models/Products"; // Ensure correct path
import User from "../../models/Users";


export async function GET(req: NextRequest) {
    try {
        await connectToDB(); // Make sure DB connection works
        // Extract query parameters
        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search") || "";
        const limit = parseInt(searchParams.get("limit") || "10");
        const skip = parseInt(searchParams.get("skip") || "0");
        // Fetch products from DB
        let products;
        if (search) {
            products = await Product.find()
        } else {
            products = await Product.find()
        }
        return NextResponse.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
