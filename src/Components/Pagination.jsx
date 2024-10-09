import './santi.css'
import {useEffect, useState} from 'react'
function Pagination({products,page,setPpage}) {
  // const [page, setpage] = useState(1);
  
  const selectPageHandler=(selectedPage)=>{
    if(selectedPage>=1 && selectedPage<=Math.ceil(products.length/10) && selectedPage!==page)
              //  setpage(selectedPage)
              setPpage(selectedPage)
             
  }
  
  return (
    <div className="app">
     
      {
        products.length>0 && <div className='pagination'>
        <span className={page > 1 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page - 1)}> -</span>
        {
          [...Array(Math.ceil(products.length/10))].map((r,i)=>{
            return <span className={page===i+1 ?"pagination__selected":""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
          })
        }
       
        <span className={page <products.length/10 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page + 1)}>+</span>
        </div>
      }
    </div>
  );
}

export default Pagination;
