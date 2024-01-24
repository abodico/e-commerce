'use client'
import { Button, ConfigProvider, InputNumber, Rate } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { getProducts } from '../fetchData';
const Page = ({params}) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  useEffect(() => {
    getProducts(`https://dummyjson.com/products/${params.productId}`, setProduct, 1);
  }, [params])

  const handleImageChange = (ind) => {
    const x = product.images[0];
    let newImages = product.images;
    newImages[0] = product.images[ind];
    newImages[ind] = x;
    setProduct({...product, images: newImages});
  }

  const inStock = product.stock > 0 ? 'text-[#3bf575]': 'text-[#ff2850]';

  if(product)
    return (
      <div className='p-12 pl-28'>
        <div className='flex'>
          <div className='pt-24'>
            <div className='relative w-[400px] h-[400px]'><Image src={product.images && product.images[0]} alt='img' fill sizes='400px, 400px'/></div>
            <div className='flex justify-center items-center'>
              <div className='flex gap-4 items-center mt-4'>
                {product.images && product.images.map((item, ind) => {
                    if(ind) {
                      return (
                        <div onClick={() => handleImageChange(ind)} key={ind} className='relative w-[50px] h-[50px] cursor-pointer'>
                          <Image src={item} alt='images' fill sizes='50px, 50px'/>
                        </div>
                      )
                    }else return null
                })}
              </div>
            </div>
          </div>

          <div className='p-8 w-[30rem]'>
            <div>
              <h1 className='text-3xl font-bold'>{product.title}</h1>
              <div className='h-0.5 w-1/4 bg-maingold'></div>
            </div>
            <div className='flex items-center my-4'>
              <span>{USDollar.format(product.price)}</span>
              <span className={`ml-4 ${inStock}`}>{product.stock > 0? "In stock": "Out of stock"}</span>
              <span className='border-l px-2 mx-2 text-[#999]'>{product.category}</span>
            </div>
            <ConfigProvider theme={{
              token: {
                colorFillSecondary: 'rgba(250,219,20, 0.2)'
              },
            }}>
              <Rate defaultValue={product.rating} allowHalf />
            </ConfigProvider>
            <p className='my-4'>{product.description}Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
            <div className='flex justify-between items-center my-2'>Quantity
              <ConfigProvider theme={{
                token: {
                  colorPrimary: '#f5cd47'
                }
              }}>
                <InputNumber value={quantity} max={product.stock} min={1} onChange={(val) => setQuantity(val)}/>
              </ConfigProvider>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: 'transparent',
                  colorBorder: 'none',
                },
                components: {
                  Button: {
                    fontWeight: 600,
                    fontSize: 16,
                  }
                }
              }}
              >
              <Button className='text-center h-12 w-full bg-maingold text-black shadow shadow-maingold'>ADD TO CART</Button>
            </ConfigProvider>
          </div>
        </div>
        RELATED ITEMS
      </div>
    )
}

export default Page