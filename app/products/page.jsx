'use client'
import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import { getProducts } from './fetchData';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  const changePage = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    getProducts(`https://dummyjson.com/products?limit=9&skip=${(currentPage-1) * 9}`, setProducts);
  }, [currentPage])
  return (
    <div>
      <div>

      </div>

      <div className="p-4">
        <Cards products={products} />
      </div>
      <Pagination current={currentPage} pageSize={9} total={90} onChange={changePage} />
    </div>
  )
}

export default Page