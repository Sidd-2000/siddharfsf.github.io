import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../lib/db";
import { Product } from "../lib/model/product";


export async function GET(){
    
    await mongoose.connect(connectionStr)

    const data = await Product.find();
    console.log(data);
    return NextResponse.json({result:data})
}

