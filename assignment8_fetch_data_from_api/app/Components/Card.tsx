'use client'
import React from 'react'
import { FetchData } from "@/utils/index";


const Card = async () => {
    const products = await FetchData();
  return (
      <div className="border border-black">
          {products.map((product:any) => {
              return (
                  <div>
                      {product.id}
                      {product.price}
             </div>
          )
      })}
      
      </div>
  )
}

export default Card