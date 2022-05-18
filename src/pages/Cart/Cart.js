import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../component/Header'
import useFetch from '../../Hooks/useFetch'
import { addCart } from '../../Redux/Actions/addCartData'


const Cart = () => {
  //const { data, loading, error } = useFetch("https://fakestoreapi.com/carts");
  const ff = useSelector(state => state.cartData.add_cart);
  //console.log(ff.length);

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {ff.length != 0 ? ff.map((item, i) => {
            return <div className='col-lg-12' key={i}>
              <div className='cart__title'><strong><h5>Product Name :{item.title}</h5></strong></div>
              <div className='col-lg-6'><img src={item.image} width={200} /></div>
              <div className='cart__title'><strong>Product Price : ${item.price}</strong></div>
              <hr />
            </div>
          }) : <div><h5><center> No Data Found</center></h5></div>}

        </div>
      </div>
    </>
  )
}

export default Cart