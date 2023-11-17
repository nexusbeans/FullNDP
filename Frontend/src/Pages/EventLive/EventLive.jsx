import React, { useEffect, useState } from 'react'
import './EventLive.scss'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Button, Col, Container, Row } from 'react-bootstrap';
import TitleWraper from '../../Components/TitleWraper';
import { FaUserPlus, FaLocationDot, FaEnvelope, FaComments } from "react-icons/fa6";
import EventCalender from '../../Components/EventCalender';
import { useForm, ValidationError } from '@formspree/react';
import { GoogleCaptcha } from "../../Components/GoogleCaptcha/GoogleCaptcha";
import FormSubmit from '../FormSubmit/FormSubmit';
import SliderBlock from '../../Components/SliderBlock';
import Banner5 from "../../assets/images/NDP_Banner1.jpg";
import Banner6 from "../../assets/images/p1.jpg";
import Banner7 from "../../assets/images/p6.jpg";
// import selectOptions from "../../Api/LiveEventOption";
import axios from 'axios';

function EventLive() {
  const [selectOptions, selectOptionsData] = useState([]);

  useEffect(() => {
    // Fetch slider data using Axios
    axios.get("/data/LiveEventOption.json")
      .then(response => {
        selectOptionsData(response.data);
      })
      .catch(error => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  const [state, handleSubmit] = useForm("xgejkovp");
  if (state.succeeded) {
    return <><FormSubmit/></>;
  }
  const eventOnclick = () => {
    window.open('https://tc.touchcast.com/showtime/ndp/login', '_blank');
};



  return (
    <>
      <Header />
      <main className='eventLive_main default_layout mt-0'>
      {/* <section className='banner_itemsevents'>
        <Container fluid>
          <img src={Banner5} alt='bannerimage' className='img-fluid set_pointer' onClick={eventOnclick}/>
        </Container>
      </section> */}
        <section className='section_eventsLive section_msgDrop mt-3'>
          <Container>
            <TitleWraper
              MainTitle={"Upcomings Event"}
              subTitle={"Upcomings Event"}
            />
                  {/* <SliderBlock /> */}
            <Row className='event_listRow'>
              {/* <Col md={6}>
                <div className='live_eventPage'>
                  <a href="https://42801678.hs-sites.com/satsang-oct-15-2023" target='_blank' rel="noreferrer">
                       <img src={Banner6} alt="" srcset="" className='w-100' />
                  </a>
                </div>
              </Col> */}
              <Col md={12} className="rightform">
              <a href="#" target='_blank' rel="noreferrer" className='w-100'>
              <img src={Banner7} alt="" srcset=""  className='w-100'/>
              </a>
              {/* <p className='text-center'>No Events</p> */}
                {/* <form onSubmit={handleSubmit} method="post" className="rightform_elements">
                <input type="hidden" value="Live Event Form" name="Form_Name" id="SESSION_PAGE_FORM" />
                  <div id="blocks" className="form-group">
                    <div className="col-md-12">
                      <div id="block" className="form-group">
                        <input
                          name="nameuser"
                          id="nameuser"
                          type="text"
                          placeholder="Your Name"
                          className="form-control form-field"
                          required
                        />
                        <ValidationError
                          prefix="Name User"
                          field="nameuser"
                          errors={state.errors}
                        />
                        <div className="icon_fields"><FaUserPlus /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="clearfix" />
                      <div id="block" className="form-group">
                        <input
                          id="email"
                          type="email"
                          name="email" className="form-control form-field" placeholder="Email Address"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                        <div className="icon_fields"><FaEnvelope /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="clearfix" />
                      <div id="block" className="form-group">
                        <input
                          name="residence"
                          type="text"
                          placeholder="Country of Residence"
                          className="form-control form-field"
                          required
                        />
                        <ValidationError
                          prefix="residence"
                          field="residence"
                          errors={state.errors}
                        />

                        <div className="icon_fields"><FaLocationDot /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div id="block" className="form-group">
                        <select
                          className="form-control form-field"
                          name="selectcenterBA" required
                        >
                         <option value="" disabled>Select Date</option>
                        {selectOptions.map((option, index) => (
                          <option key={index} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                        <div className="icon_fields"><FaComments /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div id="block" className="form-group1">
                        <textarea
                          id="message"
                          name="message" className="form-control form-field" placeholder="Enter your Message"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />

                      </div>
                    </div>
                    <GoogleCaptcha />
                    <div className="button_Outer ">
                      <Button type='submit' className="submit_btn">
                        Register
                      </Button>
                    </div>
                  </div>
                </form> */}
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EventLive