import React from 'react';
import './Card.component.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { MdAdhoppingCart } from 'react-icons/md';
import { MdAdhoppgCart } from 'react-icons/md';

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

export class Card extends React.Component<cardProps> {
  constructor(props: cardProps) {
    super(props);
  }
  render() {
    return (
      <div className="product_card">
        <img src={this.props.content.img} alt="product-image" />
        <p className="product_name">{this.props.content.name}</p>
        <p>{this.props.content.description}</p>
        <p className="product_price price">{this.props.content.price}.00 €</p>
        <div className="add_to_cart_button">
          <MdAddShoppingCart />
        </div>
      </div>
    );
  }
}
