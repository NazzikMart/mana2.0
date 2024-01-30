import React, { useState } from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import BestSellers from "../BestSellers/BestSellers";
import Header from "../../UI/Header/Header.js";
import ServiceCenter from "../../UI/ServiceCenter/ServiceCenter.js";
import ip1 from "../../../img/ip1.jpg";
import ip2 from "../../../img/ip2.jpg";
import ip3 from "../../../img/ip13.jpg";
import ip4 from "../../../img/ip4.jpg";
import "./HomePage.css";
import "../../media.css";

const HomePage = (props) => {
  return (
    <div className="homepage-wrapper">
      <Header />
      <span className="BestSellersName">Лідери продажів</span>
      <FilterProduct
        product={props.product}
        addToOrder={props.addToOrder}
        infoProduct={props.infoProduct}
        infoProducts={props.infoProducts}
        searchTerm={props.searchTerm}
        searchResults={props.searchResults}
        addClass={props.addClass}
        currentItems={props.currentItems}
        choseProducer={props.choseProducer}
        renderCart={props.renderCart}
        orders={props.orders}
        removeProduct={props.removeProduct}
        counter={props.counter}
        totalCost={props.totalCost}
        updateOrders={props.updateOrders}
        services={props.services}
        categories={props.categories}
        minPrice={props.minPrice}
        maxPrice={props.maxPrice}
        producers={props.producers}
        selectedProducers={props.selectedProducers}
        showFunction={props.showFunction}
        choseCategory={props.choseCategory}
        handleSearch={props.handleSearch}
      />
      <BestSellers
        product={props.product}
        addToOrder={props.addToOrder}
        infoProduct={props.infoProduct}
        infoProducts={props.infoProducts}
        searchTerm={props.searchTerm}
        searchResults={props.searchResults}
        addClass={props.addClass}
        currentItems={props.currentItems}
        choseProducer={props.choseProducer}
        renderCart={props.renderCart}
        orders={props.orders}
        removeProduct={props.removeProduct}
        counter={props.counter}
        totalCost={props.totalCost}
        updateOrders={props.updateOrders}
        services={props.services}
        categories={props.categories}
        minPrice={props.minPrice}
        maxPrice={props.maxPrice}
        producers={props.producers}
        selectedProducers={props.selectedProducers}
        showFunction={props.showFunction}
        choseCategory={props.choseCategory}
        handleSearch={props.handleSearch}
      />

      <div className="product">
        <div className="product-title">ОБИРИ НОВИЙ ГАДЖЕТ</div>

        <div className="product-items">
          <div className="product-item">
            <div className="product-item__img">
              <img className="product-item__images" src={ip1} alt="" />
            </div>
            <div className="product-item__name">Gold</div>
            <div className="product-item__desc">Золотий</div>
          </div>
          <div className="product-item">
            <div className="product-item__img">
              <img className="product-item__images" src={ip2} alt="" />
            </div>
            <div className="product-item__name">Gray</div>
            <div className="product-item__desc">Сірий</div>
          </div>
          <div className="product-item">
            <div className="product-item__img">
              <img className="product-item__images" src={ip3} alt="" />
            </div>
            <div className="product-item__name">Purple</div>
            <div className="product-item__desc">Фіолетовий</div>
          </div>
          <div className="product-item">
            <div className="product-item__img">
              <img className="product-item__images" src={ip4} alt="" />
            </div>
            <div className="product-item__name">White</div>
            <div className="product-item__desc">Білий</div>
          </div>
        </div>
      </div>
      <button className="btn-shop-ip">Замовити</button>
    </div>
  );
};

export default HomePage;
