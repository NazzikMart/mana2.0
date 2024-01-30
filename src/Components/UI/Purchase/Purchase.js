import React from "react";
import "./Purchase.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Purchase = (props) => {
  const [totalSum, setTotalSum] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    setValue , 
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // Логіка відправлення даних
    console.log(data);
  };

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
  const deliveryMethod = watch("deliveryMethod");
  console.log(props.orders);
  return (
    <div className="purchase-wrapper">
      <div className="contacts-datails-items">
        <div className="contacts-date-items">
          <span className="contacts-date-item-name ">Контактні дані</span>
          <form className="contacts-date-item-form"  onSubmit={handleSubmit(onSubmit)}>
          <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: "Будь ласка, введіть ім'я" }}
          render={({ field }) => (
            <>
              <input
                className="contacts-date-item-form-name"
                placeholder="Введіть ім'я"
                {...field}
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </>
          )}
        />
            <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          rules={{
            required: "Будь ласка, введіть номер телефону",
            pattern: {
              value: /^[0-9\b]+$/,
              message: "Недійсний номер телефону",
            },
          }}
          render={({ field }) => (
            <>
              <input
                className="contacts-date-item-form-number"
                placeholder="Введіть номер телефону"
                {...field}
              />
              {errors.phoneNumber && (
                <p className="error-message">
                  {errors.phoneNumber.message}
                </p>
              )}
            </>
          )}
        />
          </form>
        </div>

        <div className="delivery-date-items">
          <span className="delivery-date-item-name">Спосіб доставки</span>
          <form className="delivery-date-item-form">
          <Controller
              name="deliveryMethod"
              control={control}
              defaultValue=""
              rules={{ required: "Будь ласка, оберіть спосіб доставки" }}
              render={({ field }) => (
                <>
                  <select
                    className="delivery-date-item-form-select"
                    {...field}
                  >
                    <option
                      className="delivery-date-item-form-option"
                      value=""
                    >
                      Оберіть спосіб доставки
                    </option>
                    <option
                      className="delivery-date-item-form-option"
                      value="np"
                    >
                      Нова Пошта
                    </option>
                    {/* Додайте інші способи доставки за необхідності */}
                  </select>
                  {errors.deliveryMethod && (
                    <p className="error-message">
                      {errors.deliveryMethod.message}
                    </p>
                  )}
                </>
              )}
            />

            {deliveryMethod === "np" && (
              <>
                <Controller
                  name="npOffice"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Будь ласка, оберіть відділення Нової Пошти" }}
                  render={({ field }) => (
                    <>
                      <select
                        className="delivery-date-item-form-select"
                        {...field}
                      >
                        <option
                          className="delivery-date-item-form-option"
                          value=""
                        >
                          Оберіть відділення
                        </option>
                        <option
                          className="delivery-date-item-form-option"
                          value="np1"
                        >
                          Відділення НП номер 1
                        </option>
                        <option
                          className="delivery-date-item-form-option"
                          value="np2"
                        >
                          Відділення НП номер 2
                        </option>
                        {/* Додайте інші варіанти відділень Нової Пошти */}
                      </select>
                      {errors.npOffice && (
                        <p className="error-message">
                          {errors.npOffice.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </>
            )}
          </form>
        </div>
        <div className="payment-date-items">
      <span className="payment-date-item-name">Оплата</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="payment-date-item payment-date-item-post">
          <input
            type="radio"
            {...register("paymentMethod", { required: "Будь ласка, оберіть спосіб оплати" })}
            onChange={() => setValue("paymentMethod", "payment-post")}
            checked={watch("paymentMethod") === "payment-post"}
          />
          <span>Оплата під час отримання</span>
        </div>

        <div className="payment-date-item payment-date-item-privatpay">
          <input
            type="radio"
            {...register("paymentMethod", { required: "Будь ласка, оберіть спосіб оплати" })}
            onChange={() => setValue("paymentMethod", "payment-privatpay")}
            checked={watch("paymentMethod") === "payment-privatpay"}
          />
          <span>PrivatPay</span>
        </div>

        <div className="payment-date-item payment-date-item-googlepay">
          <input
            type="radio"
            {...register("paymentMethod", { required: "Будь ласка, оберіть спосіб оплати" })}
            onChange={() => setValue("paymentMethod", "payment-googlepay")}
            checked={watch("paymentMethod") === "payment-googlepay"}
          />
          <span>GooglePay</span>
        </div>

        <div className="payment-date-item payment-date-item-mastercard">
          <input
            type="radio"
            {...register("paymentMethod", { required: "Будь ласка, оберіть спосіб оплати" })}
            onChange={() => setValue("paymentMethod", "payment-mastercard")}
            checked={watch("paymentMethod") === "payment-mastercard"}
          />
          <span>Visa / MasterCard</span>
        </div>

        <div className="payment-date-item payment-date-item-portmone">
          <input
            type="radio"
            {...register("paymentMethod", { required: "Будь ласка, оберіть спосіб оплати" })}
            onChange={() => setValue("paymentMethod", "payment-portmone")}
            checked={watch("paymentMethod") === "payment-portmone"}
          />
          <span>Portmone.com</span>
        </div>

        {errors.paymentMethod && (
          <p className="error-message">{errors.paymentMethod.message}</p>
        )}
      </form>
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
