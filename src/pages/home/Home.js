import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'
import useFetch from '../../Hooks/useFetch'

export const Home = () => {

  const { data, loading, error } = useFetch("https://fakestoreapi.com/products/categories");

  console.log(data);
  return <>
    <Header />
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <div className="hero__search__categories">
                    All Categories
                    <span className="arrow_carrot-down"></span>
                  </div>
                  <input type="text" placeholder="What do yo u need?" />
                  <button type="submit" className="site-btn">SEARCH</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>

            <div className='row'>

              <div className="col-md-3">
                <div className="product__item">
                  <img src='https://technext.github.io/ogani/img/product/product-8.jpg' alt="" />
                  <center><button type='button' className='site-btn-s'>Add to Cart</button></center>
                  <div className="product__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
}
