import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Banner } from "../../component/banner/Banner";
import Pagination from "../../component/pagination/Pagination";
import { Breadcrumbs } from "../../component/product/Breadcrumbs";
import "../../component/product/product.scss";
import { ProductFilter } from "../../component/product/ProductFilter";
import { ProductSorting } from "../../component/product/ProductSorting";
import { getProduct, getProductCategory,getProductBySortASC,getProductBySortDESC } from "../../store/action";
const ProductList = (props) => {
  const [searchData, setSearch] = useState("");
  const [sort,setSort]=useState('asc');
 



  useEffect(() => {
   
    props.getProduct();
    props.getProductCategory();
    
  },[]);

  const handlerCategory = (event) => {
    setSearch(event);
  };
  
  const getSortProduct = (item) => {
     if(item==="asc"){
      props.getProductBySortASC(item);
     }else if(item==="desc"){
      props.getProductBySortDESC(item);
     }
       
  };


  const { productItem, productCategory } = props["product"];

  const sortingEvent=(e)=>{
    setSort(e);
    getSortProduct(e);
  }
 
  return (
    <>
      <Banner />
      <div className="category-top">
        <Breadcrumbs />
        <ProductSorting data={(productItem || []).length} handleSort={(e)=>sortingEvent(e)} />
      </div>
      <article className="category">
        <div className="category-wrapper">
          <div className="category-sidebar">
            <ProductFilter
              category={productCategory || []}
              handlerCategory={(event) => handlerCategory(event)}

            />
          </div>
          <div className="category-content">
            <section>
                    <Pagination data={productItem} search={searchData} sort={sort} />
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

const mapStateToProps = ({ product }) => (
  {
  product
});
export default connect(mapStateToProps, {
  getProduct,
  getProductCategory,
  getProductBySortDESC,
  getProductBySortASC
})(ProductList);




