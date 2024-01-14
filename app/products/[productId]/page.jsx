import React, { useEffect } from 'react'
import { getProducts } from '../fetchData';
const Page = ({params}) => {
  console.log(params);
  useEffect(() => {
    // getProducts(`https://dummyjson.com/products/${}`)
  }, [])
  return (
    
  )
}

export default Page