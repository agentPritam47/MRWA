import axios from '../../utils/axios'
import React, { useEffect } from 'react'

const ItemDetail = () => {

    const data = async ()=>{
        const d = await axios.get(`/movie/573435`)
    }

    useEffect(()=>{
        data()
    })
  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail