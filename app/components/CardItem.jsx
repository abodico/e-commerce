import Image from 'next/image'

const CardItem = (props) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div className='p-4 w-max h-max'>
      <div className='flex justify-center items-center h-[250px] w-[250px] bg-gradient-to-r from-[#2e3038] to-[rgb(10,10,10)] rounded-lg'>
        <div className='h-[200px] w-[200px] relative'>
          <Image src={props.thumbnail} alt='product' fill sizes='250px, 250px' priority/>
        </div>
      </div>
      <h5 className='text-base my-2'>{props.title}</h5>
      <p className='whitespace-nowrap overflow-hidden w-[250px] text-ellipsis text-lightgray text-sm font-light'>
        {props.description}
      </p>
      <span className='text-maingold'>{USDollar.format(props.price)}</span>
    </div>
  )
}

export default CardItem