
import './ItemListContainer.css'
import GetFetch from '../data/Data'
import { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList'

const ItemListContainer = ({greeting}) => {
  const[data, setData] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    GetFetch
    .then((resp)=>setData(resp))
    .catch((error=>console.log(error)))
    .finally(()=>setLoading(false))
  },[])



  return (<>
      <div className='greeting'>
        <h3>{greeting}</h3>
      </div>
      <div className='greeting'>
        <h4>Por favor elige solo 4 gustos</h4>
      </div>
    <div id='ItemList-container' className='itemContainer gap-3'>
    {
      loading?<span>Cargando...</span>:
      <ItemList products={data}/>
    }
    </div>
    </>
)}

export default ItemListContainer