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
        <header className="homeview-header">
          <div className="hero-showcase">
            <div className="hero-cont">
              <img
                className="hero"
                src="https://s.rmjo.in/2020/4/1/Take-the-leap-9u5t0h.jpg"
                alt="hero"
              />
            </div>
          </div>
          <div className="category">
            <div className="container">
              <div className="category-list">
                <div className="cat">
                  <div className="cat-icon-cont">
                    <img
                      className="icon"
                      src="https://rentomojo.com/public/images/categories/new-packages.svg"
                      alt="cat"
                    />
                  </div>
                  <h4 className="cat-name">Electronics</h4>
                </div>
                <div className="cat">
                  <div className="cat-icon-cont">
                    <img
                      className="icon"
                      src="https://rentomojo.com/public/images/categories/new-furniture.svg"
                      alt="cat"
                    />
                  </div>
                  <h4 className="cat-name">Electronics</h4>
                </div>
                <div className="cat">
                  <div className="cat-icon-cont">
                    <img
                      className="icon"
                      src="https://rentomojo.com/public/images/categories/new-appliances.svg"
                      alt="cat"
                    />
                  </div>
                  <h4 className="cat-name">Electronics</h4>
                </div>
                <div className="cat">
                  <div className="cat-icon-cont">
                    <img
                      className="icon"
                      src="https://rentomojo.com/public/images/categories/new-electronics.svg"
                      alt="cat"
                    />
                  </div>
                  <h4 className="cat-name">Electronics</h4>
                </div>
                <div className="cat">
                  <div className="cat-icon-cont">
                    <img
                      className="icon"
                      src="https://rentomojo.com/public/images/categories/new-fitness.svg"
                      alt="cat"
                    />
                  </div>
                  <h4 className="cat-name">Electronics</h4>
                </div>
                <div className="cat">
                  <div className="cat-icon-cont">
                    <img
                      className="icon"
                      src="https://rentomojo.com/public/images/categories/new-arrivals.svg"
                      alt="cat"
                    />
                  </div>
                  <h4 className="cat-name">Electronics</h4>
                </div>
                <div className="cat">
                  <div className="cat-icon-cont">
                    <img
                      className="icon"
                      src="https://rentomojo.com/public/images/categories/offer.svg"
                      alt="cat"
                    />
                  </div>
                  <h4 className="cat-name">Electronics</h4>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="homeview-products">
          <div className="upper">
            <div className="msg">
              <span className="text"> You'll love to take these home </span>
              <hr />
            </div>
            <div className="buttons">
              <span className="btn-cont"> </span>
              <span className="btn-cont"> </span>
            </div>
          </div>
          <div className="products">
            <div className="product">
              <div className="prd-img-cont">
                <img
                  alt="product_image"
                  className="img"
                  src="//p.rmjo.in/productSquare/y4ytan9d-500x500.jpg"
                />
              </div>
              <span className="prd-name">Samsung Galaxy S9</span>
              <div className="down">
                <div className="left">
                  <p className="text">Rent</p>
                  <p className="rate">$ 100/mo</p>
                </div>
                <div className="right">
                  <button className="btn btn-inv">See More</button>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="prd-img-cont">
                <img
                  alt="product_image"
                  className="img"
                  src="//p.rmjo.in/productSquare/y4ytan9d-500x500.jpg"
                />
              </div>
              <span className="prd-name">Samsung Galaxy S9</span>
              <div className="down">
                <div className="left">
                  <p className="text">Rent</p>
                  <p className="rate">$ 100/mo</p>
                </div>
                <div className="right">
                  <button className="btn btn-inv">See More</button>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="prd-img-cont">
                <img
                  alt="product_image"
                  className="img"
                  src="//p.rmjo.in/productSquare/y4ytan9d-500x500.jpg"
                />
              </div>
              <span className="prd-name">Samsung Galaxy S9</span>
              <div className="down">
                <div className="left">
                  <p className="text">Rent</p>
                  <p className="rate">$ 100/mo</p>
                </div>
                <div className="right">
                  <button className="btn btn-inv">See More</button>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="prd-img-cont">
                <img
                  alt="product_image"
                  className="img"
                  src="//p.rmjo.in/productSquare/y4ytan9d-500x500.jpg"
                />
              </div>
              <span className="prd-name">Samsung Galaxy S9</span>
              <div className="down">
                <div className="left">
                  <p className="text">Rent</p>
                  <p className="rate">$ 100/mo</p>
                </div>
                <div className="right">
                  <button className="btn btn-inv">See More</button>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="prd-img-cont">
                <img
                  alt="product_image"
                  className="img"
                  src="//p.rmjo.in/productSquare/y4ytan9d-500x500.jpg"
                />
              </div>
              <span className="prd-name">Samsung Galaxy S9</span>
              <div className="down">
                <div className="left">
                  <p className="text">Rent</p>
                  <p className="rate">$ 100/mo</p>
                </div>
                <div className="right">
                  <button className="btn btn-inv">See More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
