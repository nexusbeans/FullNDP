import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SessionContact.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import TitleWraper from "../../Components/TitleWraper";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import { GoogleCaptcha } from "../../Components/GoogleCaptcha/GoogleCaptcha";
import { FaUserPlus, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import FormSubmit from "../FormSubmit/FormSubmit";

export default function SessionContact() {
  useEffect(() => {
    // Load the HubSpot Meetings Embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);
  const [state, handleSubmit] = useForm("xgejkovp");
  const [isSending, setIsSending] = React.useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true); // Set loading state to true before sending

    // Perform the form submission
    const submission = await handleSubmit(event);

    if (submission.success) {
      setIsSending(false); // Reset loading state on successful submission
    }
  };

  if (state.succeeded) {
    return (
      <FormSubmit />
    );
  }
  return (

    <>
      <Header />
      <main
        className="SessionContact_main default_layout"
        id="SessionContact_mainID"
      >
        <section className="story">
          <Container>
            <TitleWraper
              MainTitle={"Sri Ashish"}
              subTitle={"Sessions with Sri Ashish"}
            />
            <Row className="support" id="textspprt">
              <Col md={12}>
                {/* <div className="Title_sub">
                  <h3 className="formhd">Sessions with Sri Ashish</h3>
                </div> */}
                <div className="Title_sub__inner">
                  <p>
                    <strong> Sri Ashish</strong> is available online to answer all your queries. Your questions may be related to non-duality, understanding of the Three-Fold Path, your spiritual journey, the challenges, and obstacles you are facing on this path, or any clarification on the book's content. These forums are available to learn from him or seek his advice.
                  </p>
                  <ul className="list_itemBlock">
                  <li>
                      You can book one on one session with Sri Ashish at the calendar given below
                    </li>
                    {/* <li>
                      Post your question or comments in the box on the side. The reply will be posted on various NDP social media platforms for everyone's benefit. Personal questions can be answered via email.
                    </li> */}

                    {/* <li>
                      Once a month, Sri Ashish will hold a one-hour interactive live session to discuss or answer any questions. You may register for these sessions here.
                    </li> */}
                  </ul>
                </div>
                {/* <div className="button_Outer ">
                  <Link to='/live-events' className="submit_btn">
                    Satsang Registration
                  </Link>
                </div> */}
              </Col>
              <Col md={6} className="d-none">
                <div className="backgrounfoprm Block_itemsMain">
                  <h2>Submit Query</h2>
                  <form onSubmit={handleSubmit} method="post" className="rightform_elements">
                    <input type="hidden" value="Sessions with Sri Ashish" name="Form_Name" id="SESSION_PAGE_FORM" />
                    <div id="blocks" className="form-group">
                      <div className="col-md-12">
                        <div id="block" className="form-group">
                          <input type="hidden" id="Event_Form" name="Event_Form" value="Event_Form" />
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
                      {/* <div className="col-md-12">
                      <div id="block" className="form-group">
                        <select
                          className="form-control form-field"
                          name="selectcenterBA" required
                        >
                          <option selected="true" disabled="disabled">Date Pick</option>
                          <option value="27 Aug 2023">
                            27 Aug 2023
                          </option>
                        </select>
                        <div className="icon_fields"><FaComments /></div>
                      </div>
                    </div> */}
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
                        <Button type="submit" className="submit_btn" disabled={isSending}>
                          {isSending ? 'Sending...' : 'Send'}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
              <Col md={12} className="mt-4">
                  <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/ashish99?embed=true"></div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
