import React, { useState } from "react";
import "./FilterProduct.css";

const FilterProduct = (props) => {
  console.log(props.categories)
  return (
    <div className="FilterProduct">
      {props.categories.map((item) => (
        <span
          className="category-item"
          key={item.key}
          onClick={() => props.choseCategory(item.key)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default FilterProduct;
