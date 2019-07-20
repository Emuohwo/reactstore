import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './Context';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductContainer className="col-9 mx-auto col-md-6 col-lg-3 my-3"> 
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log('hey, you click the image container')}>
              
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button className="card-btn" disabled={inCart ? true : false} onClick={() => console.log('added to cart')}>
                {inCart?(<p className="text-capitalize mb-0" disabled>
                  in Cart
                </p>): <i className="fa fa-cart-plus"></i>}
              </button>
          </div>
          {/* {card footer} */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductContainer>
    );
  }
}

const ProductContainer = styled.div`
  .card {
    border:transparent;
    transistion: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border: transparent;
    transistion:all 1s linear;
  }
  &:hover{
    .card{
      border: 0.02rem solid rgba(0,0,0,0.2);
      box-shadow:2px 2px 5px 0 rgba(0,0,0,0.02);
    }
    .card-footer {
      background: rgb(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow:hidden;
  }
  .card-img-top {
    transistion: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-btn {
    position:absolute;
    bottom:0;
    right:0;
    background: var(--lightBlue);
    padding: 0.2rem 1.3rem;
    border:none;
    border-radius:0.5rem 0 0 0;
    color: var(--mainBlue);
    font-size:1.4rem;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .card-btn{
    transform: translate(0, 0);
  }
  .card-btn:hover{
    background: var(--mainBlue);
    color: var(--lightBlue);
    cursor:pointer;
  }
`
