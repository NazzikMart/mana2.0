import React from "react";
import  { useState , useContext } from "react";
import "./Card.css";
import { AppContext } from "../../Functional/App/App";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="product-catalog-items">
        <div className="product-items-catalog">
          {props.searchTerm !== ""
            ? props.searchResults.map((item) => (
                <div className="product-card" key={item.id}>
                  <img
                    src={item.img}
                    alt="Product Image"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h2 className="product-title">{item.name}</h2>
                    <p className="product-description">{item.model}</p>
                    <p className="product-price">
                      Ціна: <span>{item.price}</span> грн
                    </p>
                    <div className="product-rating">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9734;</span>
                      <span className="star">&#9734;</span>
                      <span className="rating-text">3.0</span>
                    </div>
                    <div className="button-container">
                      <button
                        className="add-to-cart-btn"
                        onClick={() => props.addToOrder(item)}
                      >
                        Додати до кошика
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : props.currentItems.map((item) => (
                <div className="product-card" key={item.id}>
                  <img
                    src={item.img}
                    alt="Product Image"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h2 className="product-title">{item.name}</h2>
                    <p className="product-model">{item.model}</p>
                    <p className="product-price">Ціна: <span>{item.price}</span> грн</p>
                    <p className="product-description">{item.description}</p>
                    {/* <div className="product-rating">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9734;</span>
                      <span className="star">&#9734;</span>
                      <span className="rating-text">3.0</span>
                    </div> */}
                    <div className="button-container">
                      <button
                        className="add-to-cart-btn"
                        onClick={() => props.addToOrder(item)}
                      >
                        Додати до кошика
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
