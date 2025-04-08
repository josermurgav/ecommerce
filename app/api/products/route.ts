//import { products } from "@/app/product-data";
import { ConnectToDb } from "../db";

export async function GET(){
    
    const { db } =await ConnectToDb();
    const products = await db.collection('products').find({}).toArray();

    console.log(products)
    
    return new Response(JSON.stringify(products),
        {
            status:200,
            headers:{
                'Content-Type':'application/json'
            }
        }
    );
}

// export async function POST(){
//     return new Response("Thank you for posting",{
//         status:200
//     });
// }