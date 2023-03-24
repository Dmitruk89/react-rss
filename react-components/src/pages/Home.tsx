import { SearchBar } from '../components/Searchbar/Searchbar.component';
import React from 'react';
import { Card } from '../components/Card/Card.component';
import { products } from '../mock/products';
import './Home.css';

function Home() {
  const productList = products.map((product, i) => {
    return <Card key={i} content={product} />;
  });
  return (
    <div>
      <SearchBar />
      <ul className="product_card_container">{productList}</ul>
    </div>
  );
}

export default Home;
