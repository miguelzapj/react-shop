import React, { useContext } from "react";
import "@styles/OrderItem.scss";
import AppContext from "../context/AppContext";
import closeItem from "@icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={closeItem} alt="close" onClick={() => handleRemove(product)} className='close-item' />
    </div>
  );
};

export default OrderItem;