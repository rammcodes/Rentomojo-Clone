import React from 'react'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="homeview">
        <div className="navbar">
          <div className="container">
            <div className="brand-logo-cont">
              <img
                className="logo"
                src="https://www.rentomojo.com/public/images/logo.svg"
                alt="rentomojo"
              />
            </div>
            <input
              placeholder="Search for products"
              type="text"
              className="search-bar"
            />
            <div className="cart">
              <span className="text">Cart</span>
              <img
                className="icon"
                alt="cart"
                src="https://www.rentomojo.com/public/images/Home/cart__rm-icon.svg"
              />
            </div>
            <button className="nav-btn primary-btn">Login / Signup</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
