import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = (props) => {
  return (
    <>
      <section className="breadcrumb-section set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>{props.loding ? props.title : <div>Lodding...</div>}</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                  <span>{props.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBar