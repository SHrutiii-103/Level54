import React from 'react'

export default function Product(data){

    return (
      <>
      <div className="inline-block  bg-white justify-center mx-2 pl-10 lg:mx-24 lg:pl-20" >
        <div className=" text-bold text-black flex flex-col">
        <div className="object-cover"><img className="object-cover w-50 h-40" src={data.image}/></div>
         <div className="max-w-2/3">

          <p className="text-xl font-mono text-gray-500 ">{data.category}</p> 
        <p className="text-xl">{data.title} </p> 
        <div className="flex max-w-4">
          <img src="https://static.vecteezy.com/system/resources/previews/017/398/798/original/red-star-free-png.png"/>
          <img src="https://static.vecteezy.com/system/resources/previews/017/398/798/original/red-star-free-png.png"/>
          <img src="https://static.vecteezy.com/system/resources/previews/017/398/798/original/red-star-free-png.png"/>
          <img src="https://static.vecteezy.com/system/resources/previews/017/398/798/original/red-star-free-png.png"/>
          <img src="https://static.vecteezy.com/system/resources/previews/017/398/798/original/red-star-free-png.png"/>
        </div>
        <p  className="leading-normal">{data.price}</p>
        
         </div>
         
        </div>
      </div>
      
      
      </>
    )
  
}
