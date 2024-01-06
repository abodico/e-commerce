import React from 'react'
import axios from "axios"

export const getProducts = (url, setProducts) => {
  axios.get(url)
  .then(response => {
    setProducts(response.data.products);
  })
  .catch(error => {
    console.log(error);
  })
}