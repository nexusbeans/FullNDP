import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import "./ContactUs.scss";
import Footer from "../../Components/Footer/Footer";
import Iframe from "react-iframe";
import TitleWraper from "../../Components/TitleWraper";
import { Link } from "react-router-dom";
import SocialIcons from "../../Components/SocialIcons";

export default function ContactUs() {
  useEffect(() => {
    document.title = ": : NDP FOUNDATION -CONTACT US : :";
  }, []);
  return (
    <>
      <Header />
      <main className="Contactup_main default_layout mt-0 " id="Contactus_mainID">
      <section className="contact__banner">
        <Container>
          <div className="banner_contactLayout">
            <h2>Get in Touch</h2>
          </div>
        </Container>
      </section>
        <section className="section_contact">
          <Container>
            <TitleWraper MainTitle={"Contact Us"} subTitle={"Contact Us"} />
            <Row className=" support">
              <Col md={12} className="contact_control">
                {/*<div class="contactdata">*/}
                {/* <div className=" contmap contmap_items ">
                    <div className="Inner_colBlock">
                      <i className="fa fa-address-book" />
                    </div>
                    <div className=" addre">
                      <p> Address </p>
                      Tower-A, 934-Spaze iTech Park, Sohna Rd, Sector 49,
                      Gurugram, Haryana 122018
                    </div>
                 
                </div> */}
                {/* <div className=" contmap contmap_items">
                
                    <div className="Inner_colBlock">
                      <i className="fa fa-mobile-phone" />
                    </div>
                    <div className=" addre">
                      <p> Contact No </p>
                      <a
                        href="tel:9685745896"
                      >
                        9685745896
                      </a>
                    </div>
                 
                </div> */}
                <div className="d-flex align-items-center layer_fabContact justify-content-center ">
                  <div className="contmap contmap_items">
                    <div className="Inner_colBlock">
                      <i className="fa fa-envelope email" />
                    </div>
                    <div className=" addre">
                      <Link
                        to="mailto:info@ndpfoundation.com"
                        style={{ color: "#000!important" }}
                      >
                        info@ndpfoundation.com
                      </Link>
                    </div>
                  </div>
                  <div className="contact_fabIcon">
                    <SocialIcons />
                  </div>
                </div>
              </Col>
              {/* <Col md={6} className="map">
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d974424.9339533515!2d78.366112!3d17.443079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e9fef92467%3A0x8b77882864ac15d7!2sAIG%20Hospitals!5e0!3m2!1sen!2sus!4v1686133948736!5m2!1sen!2sus"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Col> */}
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
