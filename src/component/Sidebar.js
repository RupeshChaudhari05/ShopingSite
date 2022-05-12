import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';

const Sidebar = () => {

  const { data, loading, error } = useFetch("https://fakestoreapi.com/products/categories");


  return (
    <>
      <div className="hero__categories">
        <div className="hero__categories__all">
          <i className="fa fa-bars"></i>
          <span>All Categories</span>
        </div>
        {loading ? <div>Loading...</div> :
          <ul>
            {
              data.map((item, i) => {
                return <li key={i}><Link to="/">{item.toUpperCase()}</Link></li>
              })
            }


          </ul>
        }
      </div>
    </>
  )
}

export default Sidebar