import { useState } from 'react'
import Header from './Myproduct/Header'
import Main from './Myproduct/MainArea'
import MainArea from './Myproduct/MainArea'
import Product from './Myproduct/Product'
import Footer from './Myproduct/Footer'

function App() {

  return (
    <>
      <Header/>
      <MainArea/>
    
      

     
      
      <Product title="green printed coffee mug" image="https://images.unsplash.com/photo-1533776992670-a72f4c28235e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700" category="mugs" price="$15.00"/>
      <Product title="Father's Day coffee mug" image="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/mug-white.jpg" category="mugs" price="$19.00"/>
      <Product title="black Tshirt" image="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700"  category="T-shirt" price="$34.00" />
      <Product title="green personalised Mug"  image="https://5.imimg.com/data5/SELLER/Default/2022/10/GX/JE/NU/32731295/250ml-porcelain-promotional-coffee-mug-1000x1000.jpg" price="$15.00" category="mugs"/>
      <Product title="Printed orange T-shirt " image="https://mockuptree.com/wp-content/uploads/edd/2025/09/outdoor-hanging-white-t-shirt-mockup-960x640.jpg" category="T-shirt" price="$25.00"/>
      <Product title="Printed Green T-shirt" image="https://mockuptree.com/wp-content/uploads/edd/2025/08/Free-Laying-T-Shirt-Mockup-960x640.jpg" category="T-shirt" price="$34.00"/>
      <Product title="Printed dark blue T-shirt" image="https://mockuptree.com/wp-content/uploads/edd/2025/10/personal-growth-apparel-mockup-960x640.jpg" category="T-shirt" price="$28.00"/>
      <Product title="Printed pink T-shirt" image="https://png.pngtree.com/png-vector/20240130/ourlarge/pngtree-pink-t-shirt-mockup-ai-generated-png-image_11569125.png" category="T--shirt" price="$25.00"/>
      <Product title="Typography printed teal T-shirt" image="https://tse1.explicit.bing.net/th/id/OIP.ccoWg_boXqNLi4UbtT-TqAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" category="T-shirt" price="$32.00"/>
    
      <Footer/>
    </>
  )
}

export default App
