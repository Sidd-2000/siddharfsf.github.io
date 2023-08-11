import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(request) {
  const uri ="mongodb+srv://Siddharth:EPLkh1DG37OU4agy@cluster0.6kifhhz.mongodb.net/";
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB server before accessing the database
    
    const database = client.db("sample_airbnb");
    console.log("siddh");
    const movies = database.collection("listingsAndReviews");
    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.findOne(query);
    console.log(movie);
    return NextResponse.json({ a: 123, movie });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}
