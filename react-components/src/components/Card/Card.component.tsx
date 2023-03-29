import React from 'react';
import './Card.component.css';
import { MdAddShoppingCart } from 'react-icons/md';

type ProductProps = {
  img: string;
  name: string;
  description: string;
  price: number;
};

type cardProps = {
  key: number;
  content: ProductProps;
};

export function Card(props: cardProps) {
  return (
    <div className="product_card">
      <img src={props.content.img} alt="product-image" />
      <p className="product_name">{props.content.name}</p>
      <p>{props.content.description}</p>
      <p className="product_price price">{props.content.price}.00 €</p>
      <div className="add_to_cart_button">
        <MdAddShoppingCart />
      </div>
    </div>
  );
}
