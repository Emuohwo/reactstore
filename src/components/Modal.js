import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from './Context';
import {ButtonContainer} from '../components/Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) =>{
              const {modalOpen, closeModal} = value;
              const {img, title, price} = value.modalProduct;

              if(!modalOpen) {
                  return null;
              } else {
                  return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-3">
                                        <h5>Item added to cart</h5>
                                        <img src={img} alt="product" className="img-fluid" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price: $ {price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={()=>closeModal()}>
                                            Continue Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={() =>closeModal()}>
                                            Go to Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
              }
          }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.6);
    display: flex;
    align-item: center;
    justify-content: center;
    #modal{
        background: var(--lightWhite);
        margin-top: 5%;
    }
`
