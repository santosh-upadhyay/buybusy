import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import Pagination from './Pagination.jsx'

const SearchItem = ({cart, setCart}) => {
  // console.log(useParams())
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  const filteredData = () =>{
    const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
    // console.log(data)
    setFilterData(data)
  }

  useEffect(() => {
    filteredData();
  }, [term])
  


  return (
    <>
    <Product cart={cart} setCart={setCart} items={filterData} />
    </>
   
  )
}

export default SearchItem