import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import TopBar from '../../component/TopBar'
import { saveMessage } from '../../Redux/Actions/addMessageAction'
import { ToastContainer, toast } from 'react-toastify';

const ContactPage = () => {
  const intitialState = {
    fullname: "",
    email: "",
    message: ""
  }

  const [state, setState] = useState(intitialState);
  const dispatch = useDispatch();
  const mystate = useSelector(state => state.message.listofmessage);
  const handleChange = (e) => {
    //console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    //console.log(mystate);
    const d = mystate.filter((item) => {
      return item.email === state.email
    })
    // console.log(d);
    if (d.length === 0) {
      dispatch(saveMessage(state));
      toast("Sucessfully sent")
    } else {
      toast("Allredy sent")
    }

  }






  return (
    <>
      <Header />
      <TopBar title="Contact us" loding={true} />
      <div className="container">

        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_phone"></span>
                  <h4>Phone</h4>
                  <p>+01-3-8888-6868</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_pin_alt"></span>
                  <h4>Address</h4>
                  <p>60-49 Road 11378 New York</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_clock_alt"></span>
                  <h4>Open time</h4>
                  <p>10:00 am to 23:00 pm</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_mail_alt"></span>
                  <h4>Email</h4>
                  <p>hello@colorlib.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_phone"></span>
                  <h4>Phone</h4>
                  <p>+01-3-8888-6868</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_pin_alt"></span>
                  <h4>Address</h4>
                  <p>60-49 Road 11378 New York</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_clock_alt"></span>
                  <h4>Open time</h4>
                  <p>10:00 am to 23:00 pm</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                <div className="contact__widget">
                  <span className="icon_mail_alt"></span>
                  <h4>Email</h4>
                  <p>hello@colorlib.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>




        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd" height="500" allowFullScreen="" aria-hidden="false"></iframe>
          <div className="map-inside">
            <i className="icon_pin"></i>
            <div className="inside-widget">
              <h4>New York</h4>
              <ul>
                <li>Phone: +12-345-6789</li>
                <li>Add: 16 Creek Ave. Farmingdale, NY</li>
              </ul>
            </div>
          </div>
        </div>




        <div className="contact-form spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__form__title">
                  <h2>Leave Message</h2>
                </div>
              </div>
            </div>
            <form action="#" onSubmit={formSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <input type="text" placeholder="Your name" name="fullname" onChange={handleChange} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input type="text" placeholder="Your Email" name="email" onChange={handleChange} />
                </div>
                <div className="col-lg-12 text-center">
                  <textarea placeholder="Your message" onChange={handleChange} name="message"></textarea>
                  <button type="submit" className="site-btn">SEND MESSAGE</button>
                </div>
              </div>
            </form>
          </div>
        </div>







      </div>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default ContactPage