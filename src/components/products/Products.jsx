import React from 'react';
import './Products.css';
import Product from '../product/Product.jsx';
export default function Products() {

  const products = [
    {id:1,title:'Kit Kat', desc:'this is product one it is among the  most famous brands in the world. It was first introduced in 1935 in the form of a finger-like cake to which milk and wheat were added this chocolate.', price:'100$'},
    {id:2,title:'Mars', desc:' this is product two  This brand is now more than 100 years old, and its name is widely known around the world. Britain owned the recipe for this chocolate, and it is full of many.', price:'200$'},
    {id:3,title:'Galaxy', desc:'this is product three It was established in 1986 and is ranked third as the most popular type of chocolate around the world and is part of the Marsproducing entity. this chocolate.', price:'300$'},
    {id:4,title:'Ferrero', desc:' this is product It was established in 1986 and is four Ranked as the world type of chocolate around the world and is part of the Marsproducing entity widely known around this.', price:'400$'},

  ];
  
  return (
   <>
    <div className='products mt-3 mb-2' >
    <div className="row"> 


    {products.map( (product)=>{
    return <Product  {...product} key={product.id}/>

    })}

    </div>
    </div>

     </>
  )
}
