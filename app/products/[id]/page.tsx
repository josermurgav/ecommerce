import NotFoundPage from "@/app/not-found";
//import {products} from "@/app/product-data";
export default async function ProductDetailPage({params}:{params:{id: string}})
{
    const response= await fetch(process.env.NEXT_PUBLIC_SITE_URL +'/api/products/'+params.id);
    
    const product= await response.json();
    
    if(!product)
    {
        return <NotFoundPage></NotFoundPage>;

    }

    return (

        <div className="container mx-auto p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
                <img 
                    src={"/"+product!.imageUrl} 
                    alt="Product Image"
                    className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">{product!.name}</h1>
                <p className="text-2xl text-gray-600 mb-6">{product!.price}</p>
                <p className="text-2xl fond-semibold mb-2">Description</p>
                <p className="text-gray-700">{product!.description}</p>
            </div>
        </div>
    );
}