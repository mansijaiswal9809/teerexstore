import React from 'react'
import { useProductContext } from '../context/ProductProvider'
import ProductCard from './ProductCard'
import "../styles/products.css"
const Products = () => {
  const {isLoading,data,isError}= useProductContext()
  return (
    <div style={{width:"75vw"}}>
      {isLoading && (<div>loading...</div>) }
      <div className='All-products'>
      {data.map((item,index)=>(
        <ProductCard key={index} {...item}/>
      ))}
      </div>
    </div>
  )
}

export default Products

