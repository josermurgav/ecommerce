export default async function FectchTest(){
    
    const response=await fetch('http://localhost:3000/api/hello');
    const data= await response.json();
    return (
        <h1>
            {data.message}
        </h1>
    );
}