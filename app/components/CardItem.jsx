import Image from 'next/image'
import React from 'react'

const CardItem = (props) => {
  return (
    <div className='p-4 bg-gradient-to-r from-[#2e3038] to-[rgb(10,10,10)]'>
      <div className='h-[250px] w-[250px] relative'>
        <Image src={props.thumbnail} alt='product' objectFit='fill' layout='fill' />
      </div>
      <h5 className='text-base'>{props.title}</h5>
      <p className='whitespace-nowrap overflow-hidden w-[250px] text-ellipsis text-lightgray text-sm font-light'>
        {props.description}
      </p>
    </div>
  )
}

export default CardItem