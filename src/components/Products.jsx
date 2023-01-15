import React from 'react'
import { useProductContext } from '../context/ProductProvider'
import ProductCard from './ProductCard'
import "../styles/products.css"
import { useFilterContext } from '../context/FilterProvider'
const Products = () => {
  const {isLoading,isError}= useProductContext()
  const {filteredData}= useFilterContext()
  return (
    <div style={{width:"75vw"}}>
      {isLoading && (<div>loading...</div>) }
      <div className='All-products'>
      {filteredData.map((item,index)=>(
        <ProductCard key={index} {...item}/>
      ))}
      </div>
      {isError && (<div>Oops! Something went Wrong! try Again Later...</div>)}
    </div>
  )
}

export default Products

