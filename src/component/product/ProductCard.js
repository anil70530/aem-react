import React from "react";
import {
 
  Link
} from 'react-router-dom';
import currencyFormat from "../../utils/currency";

export const ProductCard = (props) => {

 
  
  return (
    <>
     <Link to={`/detail/${props.detail.id}`}>
     <div className="item">
        <div className="item-image">
          <img
            src={props.detail.image}
            alt={props.detail.title}
          />
          <div className="item-name">{props.detail.title}</div>
          <div className="item-price">{currencyFormat(props.detail.price)}</div>
          <div className="item-action">
              <span className="icon-fev"></span>
          </div>
        </div>
      </div>
     </Link>
    
    </>
  );
};
