import CardItem from './CardItem'

const Cards = (props) => {
  if(props.products)
    return (
      <div className='p-4 grid grid-cols-3 gap-2'>
      {
        props.products.map((item, ind) => (
          <CardItem key={ind} {...item} />
        ))
      }
      </div>
    )
}

export default Cards