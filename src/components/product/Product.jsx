import React from 'react'

export default function Product(props) {
  return (
    <>
     <div className="col-md-3 col-lg-3 ">
    <div className="product mx-2  ">
      <h2 >{props.title}</h2>
      <p style={{color :'black',fontFamily :'sans-serif', fontSize:'13px',textAlign:'initial'}} className ="alert alert-danger" >
       {props.desc} </p>
       <h2>{props.price}</h2>
    </div>
    </div>
    </>
  )
}
