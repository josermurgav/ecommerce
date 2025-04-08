import { NextRequest } from 'next/server';
import { ConnectToDb } from '../../db';
//import { products } from "@/app/product-data";

type Params ={
    id:string;
}

export async function GET(request: NextRequest,{params}:{params:Params})
{
    const { db } =await ConnectToDb();
    //const products = await db.collection('products').find({}).toArray();
    
    
    const productId=params.id;
    const product= await db.collection('products').findOne({id:productId})//products.find(p=>p.id===productId);

    if(!product)
    {
        return new Response("Not found",{
            status:404
        });
    }


    return new Response(JSON.stringify(product),
    {
        status:200,
        headers:{
            'Content-Type':'application/json'
        }
    }
);
}

