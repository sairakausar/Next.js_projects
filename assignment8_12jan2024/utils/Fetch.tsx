


const FetchData = async () => {
    const resonse = await fetch("https://fakestoreapi.com/products");
    console.log(resonse);
    const result = resonse.json();
    return result;
    
}
 export default FetchData