import React from 'react'
import Header from '../../component/Header'
import useFetch from '../../Hooks/useFetch'

const Cart = () => {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/carts");
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {loading ? <h1>Loading...</h1> : data.map((item, i) => {
            return <div className='col-lg-12' key={i}>
              <div className='cart__title'>Date{item.date}</div>
              <div className=''>Quantity : {item.products[0].productId}</div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default Cart