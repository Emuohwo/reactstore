import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from './Context';
import Title from './Title';
// import {storeProducts} from '../data';

export default class ProductList extends Component {
  // state={
  //   products: storeProducts
  // };
  render() {
    return (
      <React.Fragment>
        <div className="container">
            <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map( product =>{
                  return <Product key={product.id} product={product} />;
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
