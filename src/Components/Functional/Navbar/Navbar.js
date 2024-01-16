import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "../../UI/About/About.js";
import ProductCatalog from "../../UI/ProductCatalog/ProductCatalog.js";
import Contact from "../../UI/Contact/Contact.js";
import Besket from "../../UI/Besket/Besket.js";
import HomePage from "../../Functional/HomePage/HomePage.js";
import Profile from "../Profile/Profile.js";
import Product from "../Product/Product.js";
import Remont from "../../UI/Remont/Remont.js";
import User from "../User/User.js";
import logo from "../../../img/icons/logo.jpg";
import Purchase from "../../UI/Purchase/Purchase.js";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-wrapper">
      <header class="clearfix">
        <div class="container">
          <div class="header-left">
            <h1>
              {" "}
              <span className="header-logo">МаНа</span> - магазин цифрової
              техніки
            </h1>
          </div>
          <div class="header-right">
            <label for="open">
              <span class="hidden-desktop"></span>
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
      <section class="clearfix new-crearfix">
        <div class="container">
          <div class="section-left">
            <h1 class="section-title">
              В подарунок до Iphon 15 Pro Max отримую AirPods
            </h1>
          </div>
          <div class="section-right">
            <button class="learn-more">Отримати</button>
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
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/remont" element={<Remont />} />
        <Route path="/user" element={<User />} />

        <Route path="/purchase" element={<Purchase />} />
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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Navbar;
