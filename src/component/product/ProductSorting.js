import React, { useState } from "react";
import arrowup from "../../assets/images/arrow-up.svg";
import arrowdown from "../../assets/images/arrow-down.svg";
import slider from "../../assets/images/sliders.svg";
export const ProductSorting = (props) => {
  const [sort,setSort]=useState(false);
  const handlerShort = (e1) => {
    props.handleSort(e1.target.value);
  }
   const handleMobileSort=()=>{
    if(sort){
      props.handleSort('asc');
    }
    else{
      props.handleSort('desc');
    }
    setSort(!sort);
   }

  return (
    <>
      <div className="product-sort-filter">
        <div className="filter-result">
          <img src={slider} alt="filter" />
          Filter Result
        </div>
        <div className="short-product" onClick={()=>handleMobileSort()}>
          <div className="arrow-img">
            <img src={arrowdown} alt="sort data" />
            <img src={arrowup} alt="sort data" />
          </div>

          Sort Products
        </div>
      </div>
      <div className="product-count">{props.data} Result</div>
      <div className="product-filter">
        <div className="product-sorting">
          <select onChange={e => handlerShort(e)}>
            <option value="">Sort by Latest</option>
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>
      </div>
    </>
  );
};
