'use client'

export const FetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    
    const result = await response.json();
    console.log(result)
    return result
    
}