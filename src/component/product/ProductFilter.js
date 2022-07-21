import React, { useEffect, useState } from "react";
import { BsCheck2Square } from "react-icons/bs";
export const ProductFilter = (props) => {
  const [categoryList, setCategory] = useState([]);

  const checkHandler = (e) => {
    let data = { ...e, isActive: !e.isActive };
    let selectdIsActiveItem = categoryList.map((content) => content.name === e.name ? { ...content, ...data } : content)
    setCategory(selectdIsActiveItem)
    props.handlerCategory(selectdIsActiveItem.filter(res => res.isActive === true));
  }
  useEffect(() => {
    let data = props.category.map(res => { return { name: res, isActive: false } })
    setCategory(data);
  }, [])
  const clearAll = () => {
    setCategory(categoryList.map((content) => { return { ...content, isActive: false } }));

  }
  const onCategorySelected = (item) => {
    checkHandler(item);
  }

  return (
    <>
      <aside className="filter-sidebar">
        <div className="filter-sidebar-body">
          <div className="filter-sidebar-header">
            <h2>Filters</h2>
            <ul className="current-filter">
              {categoryList.filter((res) => res.isActive === true).map((res, index) => (<li key={index}>
                <span onClick={() => onCategorySelected(res)} className="close">
                  X
                </span>
                <span>
                  {res.name}
                </span>
              </li>))}
            </ul>
            {categoryList.filter((res) => res.isActive === true).length ? (<span onClick={clearAll} className="clearall"><u>Clear All</u></span>) : ""}
          </div>

          <div className="category-title">Category</div>
          <ul className="filter-sidebar-blocks">
            {

              (categoryList || []).map((item, idx) => (<li key={idx}>
                <div className="filter-sidebar-item">
                {item.isActive?<label className="checkbox-checked" htmlFor={idx}><BsCheck2Square /></label>:<label htmlFor={idx} className="checkbox"></label>}
                  <input type="checkbox" value={item.name} name="myCheckbox" id={idx} checked={item.isActive} onChange={() => checkHandler(item)} /> {item.name}
                </div>
              </li>))
            }
          </ul>
          <div className="category-title">Color</div>
          <ul className="attr-color">
            <li className="btn btn-black "></li>
            <li className="btn btn-white "></li>
            <li className="btn btn-darkGreen "></li>
            <li className="btn btn-yellow"></li>
            <li className="btn btn-blue"></li>
            <li className="btn btn-red"></li>
            <li className="btn btn-darkBlue"></li>
            <li className="btn btn-pink"></li>
            <li className="btn btn-orange"></li>
            <li className="btn btn-rainbow"></li>
          </ul>
        </div>
      </aside>
    </>
  );
};
