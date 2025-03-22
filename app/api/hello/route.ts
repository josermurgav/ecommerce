export async function GET(){
    return new Response("Hello from Next Js Route Handler",
        {status:200}
    );
}

export async function POST(){
    return new Response("Thank you for posting",{
        status:200
    });
}