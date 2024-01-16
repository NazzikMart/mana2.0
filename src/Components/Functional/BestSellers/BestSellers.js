import React, { useState } from "react";
import "./BestSellers.css";
import "../../media.css";
import Card from "../../UI/Card/Card";

const BestSellers = (props) => {
  const [toggle, setToggle] = useState(false);

  const addClass = (e) => {
    setToggle(!toggle);
    e.target.style.color = toggle ? "black" : "red";
  };

  return (
    <div className="BestSellersWrapper">
      <div className="BestSellers">
        <Card
          searchTerm={props.searchTerm}
          searchResults={props.searchResults}
          addClass={props.addClass}
          addToOrder={props.addToOrder}
          infoProduct={props.infoProduct}
          currentItems={props.currentItems}
          choseProducer={props.choseProducer}
          renderCart={props.renderCart}
          product={props.product}
          orders={props.orders}
          removeProduct={props.removeProduct}
          counter={props.counter}
          totalCost={props.totalCost}
          updateOrders={props.updateOrders}
          infoProducts={props.infoProducts}
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
      </div>
    </div>
  );
};

export default BestSellers;
