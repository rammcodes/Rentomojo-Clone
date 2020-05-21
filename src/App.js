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
        <div className="bottom-nav">
          <div className="container">
            <div className="icon-cont">
              <i class="fa fa-home current" aria-hidden="true"></i>
            </div>
            <div className="icon-cont">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <div className="icon-cont">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="icon-cont">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="icon-cont">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
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
              <span className="btn-cont">
                <img
                  style={{ transform: 'rotate(180deg)' }}
                  src="https://rentomojo.com/public/images/Home/new/chevron.svg"
                  alt="left"
                />{' '}
              </span>
              <span className="btn-cont">
                <img
                  src="https://rentomojo.com/public/images/Home/new/chevron.svg"
                  alt="right"
                />
              </span>
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
                  src="//p.rmjo.in/productSquare/p505hdno-500x500.jpg"
                />
              </div>
              <span className="prd-name">Air Purifier</span>
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
                  src="//p.rmjo.in/productSquare/jn6nzk0e-500x500.jpg"
                />
              </div>
              <span className="prd-name">LED TV</span>
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
        <section className="features">
          <div className="upper">
            <div className="msg">
              <span className="text"> You'll love to take these home </span>
              <hr />
            </div>
          </div>
          <div className="features-list">
            <div className="feature">
              <div className="icon-cont">
                <img
                  className="icon"
                  alt="icon"
                  src="https://rentomojo.com/public/images/Home/new/benefit/icon-finest__quality.svg"
                />
              </div>
              <h4 className="feature-name">Finest-quality products</h4>
              <p className="detail">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </p>
            </div>
            <div className="feature">
              <div className="icon-cont">
                <img
                  className="icon"
                  alt="icon"
                  src="https://rentomojo.com/public/images/Home/new/benefit/icon-free__relocation.svg"
                />
              </div>
              <h4 className="feature-name">Finest-quality products</h4>
              <p className="detail">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </p>
            </div>
            <div className="feature">
              <div className="icon-cont">
                <img
                  className="icon"
                  alt="icon"
                  src="https://rentomojo.com/public/images/Home/new/benefit/icon-free__maintenance.svg"
                />
              </div>
              <h4 className="feature-name">Finest-quality products</h4>
              <p className="detail">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </p>
            </div>
            <div className="feature">
              <div className="icon-cont">
                <img
                  className="icon"
                  alt="icon"
                  src="https://rentomojo.com/public/images/Home/new/benefit/icon-cancel__anytime.svg"
                />
              </div>
              <h4 className="feature-name">Finest-quality products</h4>
              <p className="detail">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </p>
            </div>
            <div className="feature">
              <div className="icon-cont">
                <img
                  className="icon"
                  alt="icon"
                  src="https://rentomojo.com/public/images/Home/new/benefit/icon-easy__return.svg"
                />
              </div>
              <h4 className="feature-name">Finest-quality products</h4>
              <p className="detail">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </p>
            </div>
            <div className="feature">
              <div className="icon-cont">
                <img
                  className="icon"
                  alt="icon"
                  src="https://rentomojo.com/public/images/Home/new/benefit/icon-keep__upgrading.svg"
                />
              </div>
              <h4 className="feature-name">Finest-quality products</h4>
              <p className="detail">
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </p>
            </div>
          </div>
        </section>
        <footer className="main-footer">
          <div className="container">
            <div className="upper">
              <div className="sec">
                <h4 className="title">Rentomojo</h4>
                <ul className="items">
                  <li className="item">About us</li>
                  <li className="item">Culture</li>
                  <li className="item">Investors</li>
                  <li className="item">Careers</li>
                  <li className="item">Contact</li>
                  <li className="item">Our Benefits</li>
                  <li className="item">Sitemap</li>
                </ul>
              </div>
              <div className="sec">
                <h4 className="title">Information</h4>
                <ul className="items">
                  <li className="item">Blog</li>
                  <li className="item">FAQs</li>
                  <li className="item">Documents Required</li>
                  <li className="item">Your Guide to a smarter living</li>
                </ul>
              </div>
              <div className="sec">
                <h4 className="title">Policies</h4>
                <ul className="items">
                  <li className="item">Shipping Policy</li>
                  <li className="item">Cancellations & Modifications</li>
                  <li className="item">Return & refund</li>
                  <li className="item">Privacy & Policy</li>
                  <li className="item">Rental Terms & Conditions</li>
                  <li className="item">Referral Terms & Conditions</li>
                </ul>
              </div>
              <div className="sec">
                <h4 className="title">Need Help?</h4>
                <ul className="items">
                  <li className="item">1800 102 6601</li>
                  <li className="item">joe@rentomojo.com</li>
                </ul>
              </div>
            </div>
            <div className="down">
              <span className="text">© 2020. Edunetwork Pvt. Ltd.</span>
              <div className="social-icons">
                <div className="icon-cont">
                  <img
                    src="https://img.icons8.com/ios-filled/24/000000/youtube-play.png"
                    alt="social"
                    className="icon"
                  />
                </div>
                <div className="icon-cont">
                  <img
                    src="https://img.icons8.com/ios-glyphs/24/000000/instagram-new.png"
                    alt="social"
                    className="icon"
                  />
                </div>
                <div className="icon-cont">
                  <img
                    src="https://img.icons8.com/android/24/000000/facebook-new.png"
                    alt="social"
                    className="icon"
                  />
                </div>
                <div className="icon-cont">
                  <img
                    alt="social"
                    className="icon"
                    src="https://img.icons8.com/ios-glyphs/24/000000/linkedin-circled.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
