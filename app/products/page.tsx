import ProductsList from "../ProductsList";
//import {products} from "../product-data";

export const dynamic ='force-dynamic';
export default async function ProductsPage()
{
    const response =await fetch(process.env.NEXT_PUBLIC_SITE_URL +'/api/products');
    const products =await  response.json();

    const response2 =await fetch(process.env.NEXT_PUBLIC_SITE_URL +'/api/users/1/cart');
    const initialCartProducts = await response2.json();

    console.log("prod :" + products);
    return(
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} initialCartProducts = {initialCartProducts} />
        </div>
    ) 
}