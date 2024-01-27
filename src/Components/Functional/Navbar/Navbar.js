import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "../../UI/About/About.js";
import ProductCatalog from "../../UI/ProductCatalog/ProductCatalog.js";
import Contact from "../../UI/Contact/Contact.js";
import Besket from "../../UI/Besket/Besket.js";
import HomePage from "../../Functional/HomePage/HomePage.js";
import Profile from "../Profile/Profile.js";
import Product from "../Product//Product.js";
import Remont from "../../UI/Remont/Remont.js";
import User from "../User/User.js";
import Purchase from "../../UI/Purchase/Purchase.js";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-wrapper">
      <header className="clearfix">
        <div className="container">
          <div className="header-left">
            <h1>
              {" "}
              <span className="header-logo">МаНа</span> - магазин цифрової
              техніки
            </h1>
          </div>
          <div className="header-right">
            <label for="open">
              <span className="hidden-desktop"></span>
            </label>
            <input type="checkbox" name="" id="open" />
            <nav>
              <Link to="/">Головна</Link>
              <Link to="/contact">Контакти</Link>
              <Link to="/catalog"> Каталог товарів</Link>
              <Link to="/about"> Про нас</Link>
              <Link to="/profile">Акунт</Link>
              <Link to="/besket">Кошик</Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="clearfix new-crearfix">
        <div className="container">
          <div className="section-left">
            <h1 className="section-title">
              В подарунок до Iphon 15 Pro Max отримую AirPods
            </h1>
          </div>
          <div className="section-right">
            <button className="learn-more">Отримати</button>
          </div>
        </div>
      </section>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              product={props.product}
              addToOrder={props.addToOrder}
              infoProduct={props.infoProduct}
              infoProducts={props.infoProducts}
              searchTerm={props.searchTerm}
              searchResults={props.searchResults}
              addclassName={props.addclassName}
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
              choseCategoryNew={props.choseCategoryNew}
              handleRemoveProduct={props.handleRemoveProduct}
              decrementCounter={props.decrementCounter}
              incrementCounter={props.incrementCounter}
              
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/remont" element={<Remont />} />
        <Route path="/user" element={<User />} />

        <Route
          path="/purchase"
          element={
            <Purchase
              orders={props.orders}
              handleRemoveProduct={props.handleRemoveProduct}
              decrementCounter={props.decrementCounter}
              incrementCounter={props.incrementCounter}
            />
          }
        />
        <Route
          path="/catalog"
          element={
            <ProductCatalog
              addToOrder={props.addToOrder}
              product={props.product}
              orders={props.orders}
              removeProduct={props.removeProduct}
              counter={props.counter}
              totalCost={props.totalCost}
              updateOrders={props.updateOrders}
              infoProduct={props.infoProduct}
              infoProducts={props.infoProducts}
              services={props.services}
              renderCart={props.renderCart}
              searchTerm={props.searchTerm}
              searchResults={props.searchResults}
              currentItems={props.currentItems}
              choseProducer={props.choseProducer}
              categories={props.categories}
              minPrice={props.minPrice}
              maxPrice={props.maxPrice}
              producers={props.producers}
              selectedProducers={props.selectedProducers}
              showFunction={props.showFunction}
              choseCategory={props.choseCategory}
              handleSearch={props.handleSearch}
              handleRemoveProduct={props.handleRemoveProduct}
              decrementCounter={props.decrementCounter}
              incrementCounter={props.incrementCounter}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/besket"
          element={
            <Besket
              orders={props.orders}
              removeProduct={props.removeProduct}
              counter={props.counter}
              totalCost={props.totalCost}
              updateOrders={props.updateOrders}
              handleRemoveProduct={props.handleRemoveProduct}
              decrementCounter={props.decrementCounter}
              incrementCounter={props.incrementCounter}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/product"
          element={
            <Product
              infoProducts={props.infoProducts}
              addToOrder={props.addToOrder}
              product={props.product}
              orders={props.orders}
              removeProduct={props.removeProduct}
              counter={props.counter}
              totalCost={props.totalCost}
              updateOrders={props.updateOrders}
              infoProduct={props.infoProduct}
              services={props.services}
              renderCart={props.renderCart}
              searchTerm={props.searchTerm}
              searchResults={props.searchResults}
              currentItems={props.currentItems}
              choseProducer={props.choseProducer}
              categories={props.categories}
              minPrice={props.minPrice}
              maxPrice={props.maxPrice}
              producers={props.producers}
              selectedProducers={props.selectedProducers}
              showFunction={props.showFunction}
              choseCategory={props.choseCategory}
              handleSearch={props.handleSearch}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Navbar;
