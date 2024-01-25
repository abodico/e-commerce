import Image from 'next/image'
import Link from 'next/link';

const CardItem = (props) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const width = `w-[${props.width}px]`
  const height = `h-[${props.height}px]`
  return (
    <Link href={`/products/${props.id}`}>
      <div className='w-max h-max'>
        <div className={`flex justify-center items-center ${height} ${width} bg-gradient-to-r from-[#2e3038] to-[rgb(10,10,10)] rounded-lg`}>
          <div className='h-[200px] w-[200px] relative'>
            <Image src={props.thumbnail} alt='product' fill sizes='250px, 250px' priority/>
          </div>
        </div>
        <h5 className={`text-base my-2 whitespace-normal ${width}`}>{props.title}</h5>
        <p className={`whitespace-nowrap overflow-hidden ${width} text-ellipsis text-lightgray text-sm font-light`}>
          {props.description}
        </p>
        <span className='text-maingold'>{USDollar.format(props.price)}</span>
      </div>
    </Link>
  )
}

export default CardItem