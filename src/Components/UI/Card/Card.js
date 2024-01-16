import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import ProductCatalog from "../ProductCatalog/ProductCatalog";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="product-catalog-items">
        <div className="product-items-catalog">
          {props.searchTerm !== ""
            ? props.searchResults.map((item) => (
                <div class="product-card">
                  <img
                    src={item.img}
                    alt="Product Image"
                    class="product-image"
                  />
                  <div class="product-info">
                    <h2 class="product-title">{item.name}</h2>
                    <p class="product-description">
                      {item.description}
                    </p>
                    <p class="product-price">Ціна: {item.price} грн</p>
                    <div class="product-rating">
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9734;</span>
                      <span class="star">&#9734;</span>
                      <span class="rating-text">3.0</span>
                    </div>
                    <div class="button-container">
                      <button
                        class="add-to-cart-btn"
                        onClick={() => props.addToOrder(item)}
                      >
                        Додати до кошика
                      </button>
                      <Link to="/product" class="learn-more-btn">
                        Більше про товар
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : props.currentItems.map((item) => (
                <div class="product-card">
                  <img
                     src={item.img}
                    alt="Product Image"
                    class="product-image"
                  />
                  <div class="product-info">
                    <h2 class="product-title">{item.name}</h2>
                    <p class="product-description">
                      {item.description}
                    </p>
                    <p class="product-price">Ціна: {item.price} грн</p>
                    <div class="product-rating">
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9734;</span>
                      <span class="star">&#9734;</span>
                      <span class="rating-text">3.0</span>
                    </div>
                    <div class="button-container">
                      <button
                        class="add-to-cart-btn"
                        onClick={() => props.addToOrder(item)}
                      >
                        Додати до кошика
                      </button>
                      <Link to="/product" class="learn-more-btn">
                        Більше про товар
                      </Link>
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
