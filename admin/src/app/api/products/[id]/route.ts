import { NextRequest, NextResponse } from "next/server";
import {connectToDB} from '../../../lib/MongoDB'
import Product from "../../../models/Products"; // Ensure correct path
import mongoose from "mongoose";
export async function DELETE(req: NextRequest, {params}) {
    // ✅ Ye sahi tarika hai
    // console.log( 'id:',id);
    try{
        const {id} = await params
        const isDeleted = await Product.deleteOne({_id:id})
        if(isDeleted.acknowledged){
            return NextResponse.json({ message: "Product Delete Succesfully" , 'id':id});
        }else{
            return NextResponse.json({ message: "Something doesn't seems right" , 'id':id } , {status:500});
        }
        
    }catch(err){
        console.log(err)
        return NextResponse.json({ message: "Product Delete operation failed" , 'error':err});
    }
}