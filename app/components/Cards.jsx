import CardItem from './CardItem'

const Cards = (props) => {
  const gap = `gap-${props.gap}`
  const pageWidth = `w-[${props.pageWidth}px]`
  if(props.products)
    return (
      <div className={`${pageWidth} p-4 grid grid-cols-3 ${gap}`}>
      {
        props.products.map((item, ind) => (
          <CardItem key={ind} {...item} width={props.width} height={props.height} />
        ))
      }
      </div>
    )
}

export default Cards