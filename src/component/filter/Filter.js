import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import close from "../../assets/images/close.svg";
import { ProductFilter } from '../product/ProductFilter';
import "./filter.scss";
import { getProductCategory } from '../../store/action';

 const Filter = (props) => {
    const { isFilter } = props;
    useEffect(()=>{
       // props.getProductCategory();
    },[])

    const {productCategory } = props["product"] ||[];

  return (
    <>
    {
        isFilter && (<aside className="filter-mobile-view">
            <header className="title-header">
                <span className='title'>Filter</span>
                 <img src={close} alt="close"  className='close' onClick={()=>props.filterClose()}/>
            </header>
            <nav className="navigation-body" >
                 <ProductFilter  category={productCategory}/>

            </nav>
           
        </aside>)

    }
</>
  )
}
const mapStateToProps = ({ product }) => (
    {
      product
    });
  export default connect(mapStateToProps,{})(Filter)