
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div id='ItemList-container' className='itemContainer'>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer