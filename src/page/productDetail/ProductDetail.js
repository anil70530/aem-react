import React, { useEffect, useState } from 'react'
import "./productDetail.scss";
import { Link, useParams,useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductById, addCart, decreaseItem } from '../../store/action';
import ProductQty from '../../component/quantity/ProductQty';
import currencyFormat from '../../utils/currency';
import Rate from '../../component/rating/Rating';
import fev from '../../assets/images/fev.svg'
import { BiShareAlt } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import leaf from "../../assets/images/leaf.png";
import barthable from "../../assets/images/barthable.png";
import paper from "../../assets/images/paper.png";
import sweetwick from "../../assets/images/sweet-wick.png";

const ProductDetail = (props) => {
const navigate=useNavigate();
  const [qty, setQty] = useState(0);
  const [slected, setSelected] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const { id } = useParams();
  const [param, setParam] = useState();

  const [isReadMore, setIsReadMore] = useState(true);
  const { addedItems } = props.cart;
  useEffect(() => {
    if (param !== id) {
      props.getProductById(id);
      setParam(id);

    } else {
      if (addedItems.length) {
        let data = addedItems.find((res) => res.id === id);
        setQty(data?.quantity || 0);

      }

    }


  }, [props, id, param, addedItems])


  const handleColor = (color) => {
    setColor(color);
  }
  const handleSize = (size) => {
    setSize(size);
  }
  const { productItemId } = props["product"];
  const { title, image, description, price, rating }  = productItemId || [];

  const addToCart = async () => {
      const data = {
        id: id,
        image: image,
        price: price,
        title: title,
        quantity: qty + 1,
        color: color,
        size: size
      }
      await props.addCart(data);
      setQty(qty + 1);
      navigate("/aem-react/cart");
  }
  const handleQuntity = async(qty) => {
    debugger;
    const data = {
      id: id,
      image: image,
      price: price,
      title: title,
      quantity: qty['quantity']-1,
      color: color,
      size: size
    }
    await props.addCart(data);
    setQty(qty['quantity']-1);
  }
  const decreaseQantity = async (event) => {
    debugger;
    const data = {
      id: id,
      image: image,
      price: price,
      title: title,
      color: color,
      size: size,
      quantity: event['quantity']
    }
    await props.decreaseItem(data)
  }
  const onCurosel = (item) => {
    setSelected(item);
  }
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  }
  return (
    <>
      {productItemId && (<div className='productfulldetail'>
        <section className='breadcram-mobile'>
          <div className='bradcram-wrapper'>
            Clothing / Women’s / Outerwear
          </div>

        </section>
        <section className='productFullDetail-imageCurousel'>
          <div className='curousel'>
            <div className='curousel-contenter'>
              <div className='curousel-imgContainer'>
                <img src={image} alt={title} />
              </div>
            </div>
            <div className='curousel-thumbnailList'>
              <span className='thumbnail'>
                <div className={slected === 1 ? 'image-container active' : 'image-container'} onClick={() => onCurosel(1)}>
                  <img src={image} alt={title} />

                </div>
              </span>
              <span className='thumbnail'>
                <div className={slected === 2 ? 'image-container active' : 'image-container'} onClick={() => onCurosel(2)}><img src={image} alt={title} /></div>
              </span>
              <span className='thumbnail'>
                <div className={slected === 3 ? 'image-container active' : 'image-container'} onClick={() => onCurosel(3)}><img src={image} alt={title} /></div>
              </span>
              <span className='thumbnail'>
                <div className={slected === 4 ? 'image-container active' : 'image-container'} onClick={() => onCurosel(4)}><img src={image} alt={title} /></div>
              </span>
              <span className='thumbnail'>
                <div className={slected === 5 ? 'image-container active' : 'image-container'} onClick={() => onCurosel(5)}><img src={image} alt={title} /></div>
              </span>
            </div>
            <div className='curousel-slider'>
              <span className={slected === 1 ? 'slider active' : 'slider'} onClick={() => onCurosel(1)}></span>
              <span className={slected === 2 ? 'slider active' : 'slider'} onClick={() => onCurosel(2)}></span>
              <span className={slected === 3 ? 'slider active' : 'slider'} onClick={() => onCurosel(3)}></span>
              <span className={slected === 4 ? 'slider active' : 'slider'} onClick={() => onCurosel(4)}></span>
              <span className={slected === 5 ? 'slider active' : 'slider'} onClick={() => onCurosel(5)}></span>
            </div>

          </div>
        </section>
        <section className='breadcram'>
          <div className='bradcram-wrapper'>
            Clothing / Women’s / Outerwear
          </div>

        </section>
        <section className='product-title'>
          <h1 className='product-name'>{title}</h1>
          <p className='prodcut-price'>{currencyFormat(price)}</p>
          <div className='product-rating'>
            {rating != null && (
              <>
                <Rate rating={rating["rate"] || 0}></Rate>
                <span>(<u>{rating["count"] || 0}</u>)

                </span>
              </>
            )}
          </div>
          <p className='product-discription'>
            {isReadMore ? description.slice(0, 120) : description}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...Read more" : " Show less"}
            </span>
          </p>

        </section>
        <section className='product-option'>
          <div className='option'>
            <span className='option-title'>Color</span>
            <div className='tile-list'>

              <button type='button' className={`switch-color switch01`} onClick={() => handleColor('Blue')}>
                {(color === 'Blue') && (<span className='checked-icon'>
                  <BsCheck2 />
                </span>)}

              </button>
              <button type='button' className={`switch-color switch02`} onClick={() => handleColor('Maroon')}>
                {(color === 'Maroon') && (<span className='checked-icon'>
                  <BsCheck2 />
                </span>)}

              </button>
              <button type='button' className={`switch-color switch03`} onClick={() => handleColor('Drak Gray')}>
                {(color === 'Drak Gray') && (<span className='checked-icon'>
                  <BsCheck2 />
                </span>)}
              </button>
              <button type='button' className={`switch-color switch04`} onClick={() => handleColor('Light Gray')}>
                {(color === 'Light Gray') && (<span className='checked-icon'>
                  <BsCheck2 />
                </span>)}
              </button>
            </div>
          </div>
          <div className='option'>
            <span className='option-title'>Size</span>
            <div className='tile-list'>
              <button type='button' className={`switch-size ${size === 'XS' ? 'active' : ''}`} onClick={() => handleSize('XS')}>
                XS
              </button>
              <button type='button' className={`switch-size ${size === 'S' ? 'active' : ''}`} onClick={() => handleSize('S')}>
                S
              </button>
              <button type='button' className={`switch-size ${size === 'M' ? 'active' : ''}`} onClick={() => handleSize('M')}>
                M
              </button>
              <button type='button' className={`switch-size ${size === 'L' ? 'active' : ''}`} onClick={() => handleSize('L')}>
                L
              </button>
              <button type='button' className={`switch-size ${size === 'XL' ? 'active' : ''}`} onClick={() => handleSize('XL')}>
                XL
              </button>
            </div>
          </div>
        </section>
        <section className='quantity'>
          <div className='quantity-title'>Quantity</div>
          <ProductQty quantity={qty} decrQuantity={decreaseQantity} onQuantity={(event) => handleQuntity(event)} />
        </section>
       
          <section className='action'>
            <button className='btn-add-cart' onClick={()=>addToCart()}>
              Add To cart
            </button>
          </section>
        

        <section className='product-action-share'>
          <div className='product-fev'>
            <Link to="/aem-react/"> <img src={fev} alt="save" /> Save</Link>
          </div>
          <div className='product-share'>
            <Link to="/aem-react/"><BiShareAlt />Share</Link>
          </div>
        </section>
        <section className='product-full-detail'>
          <h3>{title}</h3>
          <div className='product-container'>
            <div className="product-description">
              <span className='product-heading'>
                Description
              </span>
              <p>{description}</p>
            </div>
          </div>

        </section>
        <section className='product-detail'>

          <span className='product-heading'>
            Detail
          </span>
          <div className='product-feature'>
            <span className='feature'>
              <img src={sweetwick} alt="sweet wicking" />
              Sweat-wicking
            </span>
            <span className='feature'>
              <img src={barthable} alt="Breathable" />
              Breathable</span>
            <span className='feature'>
              <img src={leaf} alt="Light weight fabric" />
              Lightweight fabric</span>
            <span className='feature'>
              <img src={paper} alt=" 69% nylon, 31% lycra" />
              69% nylon, 31% lycra</span>
          </div>

        </section>
        <div className='branding'></div>
      </div>)}

    </>

  )
}
const mapStateToProps = ({ product, cart }) => ({
  product,
  cart
});
export default connect(mapStateToProps, {
  getProductById,
  addCart,
  decreaseItem
})(ProductDetail);