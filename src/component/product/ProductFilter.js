import React from "react";

export const ProductFilter = (props) => {
  const [checked, setChecked] = React.useState("");
  const checkHandler=(e)=>{
    let myCheckbox=document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,(el)=>{
      el.checked = false;
    
    });
    setChecked(e.target.value);
     props.handlerCategory(e.target.value)
  }


  return (
    <>
      <aside className="filter-sidebar">
        <div className="filter-sidebar-body">
          <div className="filter-sidebar-header">
            <h2>Filters</h2>
            <ul className="current-filter">
              <li></li>
            </ul>
          </div>

          <div className="category-title">Category</div>
          <ul className="filter-sidebar-blocks">
            {
              (props.category||[]).map((category,idx)=>(<li key={idx}>
                <div className="filter-sidebar-item">
                 
                  <input type="checkbox" value={category} name="myCheckbox" className="checkbox" onChange={(e)=>checkHandler(e)} checked={category === checked}/> {category}

                 
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
