import React from 'react'

export default function Footer() {
  
    return (
      <>
      <div className="flex gap-1 my-6 lg:mx-28">
      <button className="ml-12 hover:text-white hover:border-transparent hover:bg-red-600 bg-wite text-red-600 border border-red-600 w-12 h-12">1</button>
      <button className=" hover:text-white hover:border-transparent hover:bg-red-600 bg-wite text-red-600 border border-red-600 w-12 h-12">2</button>
      <button className=" hover:text-white hover:border-transparent hover:bg-red-600 bg-wite text-red-600 border border-red-600 w-12 h-12"><img srcSet='https://tse1.mm.bing.net/th/id/OIP.onnPhpb9QFqIildOyPBzNAHaEc?rs=1&pid=ImgDetMain&o=7&rm=3'></img></button>
      </div>
      <div className=" flex sticky bottom-0 justify-between bg-gray-600 py-6 px-24 text-white">
        <p>
            Copyright @ 2022|CodeYogi
        </p>
        <p>
          Powered by CodeYogi
        </p>

      </div>
      </>
    )
  
}
