import React from "react";
import "./Purchase.css";
import { useState } from "react";

const Purchase = (props) => {
  const [totalSum, setTotalSum] = useState(0);

  const calculateTotalSum = () => {
    let sum = 0;
    props.orders.forEach((el) => {
      sum += el.price;
    });
    setTotalSum(sum);
  };

  React.useEffect(() => {
    calculateTotalSum();
  }, [props.orders]);

  console.log(props.orders);
  return (
    <div className="purchase-wrapper">
      <div className="contacts-datails-items">
        <div className="contacts-date-items">
          <span className="contacts-date-item-name ">Контактні дані</span>
          <form className="contacts-date-item-form">
            <input
              className="contacts-date-item-form-name"
              placeholder="Введіть ім'я"
            />
            <input
              className="contacts-date-item-form-number"
              placeholder="Введіть номер телефону"
            />
          </form>
        </div>

        <div className="delivery-date-items">
          <span className="delivery-date-item-name">Спосіб доставки</span>
          <form className="delivery-date-item-form">
            <input
              className="delivery-date-item-form-name"
              placeholder="Введіть ім'я"
            />
            <input
              className="delivery-date-item-form-surname-one"
              placeholder="Введіть прізвище"
            />
            <input
              className="delivery-date-item-form-surname-two"
              placeholder="Введіть по батькові"
            />
            <select className="delivery-date-item-form-select">
              <option className="delivery-date-item-form-option">
                Оберіть відділення
              </option>
              <option className="delivery-date-item-form-option">
                Відділення НП номер 7
              </option>
            </select>
          </form>
        </div>
        <div className="payment-date-items">
          <span className="payment-date-item-name">Оплата</span>
          <div className="payment-date-item payment-date-item-post">
            <input type="radio" />
            <span>
              Оплата під час отримання <br />
            </span>
          </div>
          <div className="payment-date-item payment-date-item-privatpay">
            <input type="radio" />
            <span>PrivatPay</span>
          </div>
          <div className="payment-date-item payment-date-item-googlepay">
            <input type="radio" />
            <span>GooglePay</span>
          </div>
          <div className="payment-date-item payment-date-item-mastercard">
            <input type="radio" />
            <span>Visa / MasterCard</span>
          </div>
          <div className="payment-date-item payment-date-item-portmone">
            <input type="radio" />
            <span>Portmone.com</span>
          </div>
        </div>
        <div className="totalSum">Загальна сумма : {totalSum}</div>
        <div className="purchase-product-details-item-btn">
          <button className="purchase-product-details-item-button">
            Замовити
          </button>
        </div>
      </div>

      <div className="purchase-product-details-items">
        {props.orders.map((el) => {
          return (
            <div className="besket-products" key={el.id}>
          <div className="besket-product">
            <div className="besket-product-names">
              <img src={el.img} className="besket-product-img" alt="" />
              <span className="besket-product-name">{el.name}</span>
            </div>

            <div className="besket-count">
              <span className="besket-count-item">{el.counter}</span>
              <div className="besket-counter">
                <span
                  className="besket-counter-plus"
                  onClick={() => props.incrementCounter(el.id)}
                >
                  +
                </span>
                <span
                  className="besket-counter-minus"
                  onClick={() => props.decrementCounter(el.id)}
                >
                  -
                </span>
              </div>
            </div>
            <div className="besket-price">{el.price} грн</div>
            <div
              className="delete-product"
              onClick={() => props.handleRemoveProduct(el.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
          );
        })}
       
       
      </div>
      
    </div>
  );
};

export default Purchase;
