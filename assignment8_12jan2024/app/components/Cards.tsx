import React from 'react'
import FetchData from '@/utils/Fetch'
import Image from 'next/image'

const Cards = async () => {
    const products = await FetchData()
  return (
      <div className=" relative grid grid-cols-4  ">
          

          {products.map((product: any) => {
              return (
                  <div className=" border h-56 border-y-sky-700 flex flex-col justify-center items-center">
                      <div  className="relative h-full w-full border border-pink-600 ">
                          <Image src={product.image} fill alt="images"  />
                      </div>
                      <div>
                          {product.price}
                      </div>
                     
                 </div> 
              )
          })}
    </div>
  )
}

export default Cards