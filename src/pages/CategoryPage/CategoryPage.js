import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../component/Header'
import TopBar from '../../component/TopBar'
import useFetch from '../../Hooks/useFetch'

const CategoryPage = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${id}`);

  const addItem = async (myid) => {
    //https://fakestoreapi.com/carts

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;


    const g = {
      userid: 1,
      date: today,
      products: [{ productId: myid, quantity: 1 }]
    }
    const response = await axios.post(`https://fakestoreapi.com/carts`, g);
    console.log(response.status);

  }

  return (
    <>
      <Header />
      <TopBar title={id} />
      <div className="container product spad">
        <div className='row'>
          <div className="col-md-3">
            <div className="sidebar">
              <div className="sidebar__item sidebar__item__color--option">
                <h4>Colors</h4>
                <div className="sidebar__item__color sidebar__item__color--white">
                  <label htmlFor="white">
                    White
                    <input type="radio" id="white" />
                  </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--gray">
                  <label htmlFor="gray">
                    Gray
                    <input type="radio" id="gray" />
                  </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--red">
                  <label htmlFor="red">
                    Red
                    <input type="radio" id="red" />
                  </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--black">
                  <label htmlFor="black">
                    Black
                    <input type="radio" id="black" />
                  </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--blue">
                  <label htmlFor="blue">
                    Blue
                    <input type="radio" id="blue" />
                  </label>
                </div>
                <div className="sidebar__item__color sidebar__item__color--green">
                  <label htmlFor="green">
                    Green
                    <input type="radio" id="green" />
                  </label>
                </div>
              </div>
              <div className="sidebar__item">
                <h4>Popular Size</h4>
                <div className="sidebar__item__size">
                  <label htmlFor="large">
                    Large
                    <input type="radio" id="large" />
                  </label>
                </div>
                <div className="sidebar__item__size">
                  <label htmlFor="medium">
                    Medium
                    <input type="radio" id="medium" />
                  </label>
                </div>
                <div className="sidebar__item__size">
                  <label htmlFor="small">
                    Small
                    <input type="radio" id="small" />
                  </label>
                </div>
                <div className="sidebar__item__size">
                  <label htmlFor="tiny">
                    Tiny
                    <input type="radio" id="tiny" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              {loading ? <h1>Loading...</h1> : data.map((item, i) => {
                return <div className="col-md-3" key={i}>
                  <div className="product__item" >
                    <Link to={`product/${item.id}`} ><img src={item.image} alt={item.title} height={200} /></Link>
                    <center><button type='button' className='site-btn-s' onClick={() => addItem(item.id)}>Add to Cart</button></center>
                    <div className="product__item__text">
                      <h6><a href="#">{item.title}</a></h6>
                      <h5>${item.price}</h5>
                    </div>
                  </div>
                </div>
              })}
              <span>{error}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryPage