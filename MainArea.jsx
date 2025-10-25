import React from 'react'

export default function MainArea() {
   
    return (
        <>
    
        
        <div className="flex justify-end py-6 mx-4">
        <div className="border rounded-sm bg-white inline-block ">
        <label htmlFor="sorting"> </label>
        <select id="sorting" name="sorting">
            <option value="default">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="latest">Sort by latest</option>
            <option value="price_low">Sort by price:low to high</option>
            <option value="price_high">Sort by price:high to low</option>
        </select>
        </div>
        </div>
       <div>

       
    
        </div>
    
        </>
      
    )

}
