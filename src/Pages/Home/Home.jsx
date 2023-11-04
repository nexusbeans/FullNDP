import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import { Button, Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/images/ABOUT-NDP.jpg";
import "./Home.scss";
import contactImage from "../../assets/images/touch.jpg";
import TitleWraper from "../../Components/TitleWraper";
import {
  FaUserPlus,
  FaLocationDot,
  FaEnvelope,
  FaComments,
  FaEarthAsia,
  FaRocket,
  FaComment,
} from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";
import { GoogleCaptcha } from "../../Components/GoogleCaptcha/GoogleCaptcha";
import FormSubmit from "../FormSubmit/FormSubmit";
import HubspotForm from "react-hubspot-form";

export default function Home() {
  useEffect(() => {
    document.title = ": : NDP FOUNDATION -HOME : :";
  }, []);

  const [state, handleSubmit] = useForm("xgejkovp");
  if (state.succeeded) {
    return <FormSubmit />;
  }
  return (
    <>
      <Header />
      <main className="Home_main default_layout mt-0" id="Home_mainID">
        <HomeSlider />
        <section className="section_Foundation story1">
          <Container>
            <TitleWraper
              MainTitle={"About NDP Foundation"}
              subTitle={"About NDP Foundation"}
            />
            <Row className="whatsbook" id="aboutndpfoun">
              <Col md={6}>
                <div className="about_image__outer">
                  <img src={aboutImg} className="author img-fluid" alt="" />
                </div>
              </Col>
              <Col md={6} className="leftpara">
                <blockquote className="author">
                  Non-Duality – A non-personal all-inclusive awareness. The
                  underlying true nature of all existence is one and the same.
                </blockquote>
                <p className="author">
                  NDP (Non-Duality Perspective) Foundation has been founded by
                  Sri Ashish to communicate his learnings and experience on
                  Realizing the Self.
                </p>
                <p className="author">
                  The core learnings are captured in the Three-Fold Path below:
                </p>
                <ul className="list_itemBlock">
                  <li className="lidisc">
                    The Truth is non-dual <i>(Satya Advaita Hain)</i>
                  </li>
                  <li className="lidisc">
                    Just “Be” in your daily life – practice discriminating
                    between real and unreal, i.e. non-attachment to everything
                  </li>
                  <li className="lidisc">Experience Truth as “I AM”</li>
                </ul>
                <p className="author bottom_titleLIne">
                  <strong> NDP Foundation</strong> will communicate Sri Ashish’s
                  learnings through various conversations and media channels,
                  first of which is a book authored by Dr. Anil Joshi called I
                  AM Ashish to “I AM”.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section_Universal story1 story_bg">
          <Container className="parascrolled">
            <h1 className="hd hd1111" style={{ color: "#e9ecef" }}>
              Universal Truth
            </h1>
            <h2 className="hd1" id="universal">
              <b>Creating Awareness of the Universal Truth</b>
            </h2>
            <Row className="story">
              <div className="col-md-8 itia">
                <div className="creatingpara">
                  <p className="creatingawarness">
                    <b>Buddhism: </b>
                    <i>“We are all part of One indivisible whole”</i>
                  </p>
                  <p className="creatingawarness">
                    <b>Christianity:</b>
                    <i>
                      “Jesus said to them: Amen, amen, I say to you, before
                      Abraham was made, I AM.” – (John 8:58)
                    </i>
                  </p>
                  <p className="creatingawarness">
                    <b>Hindu Upanishads:</b>
                    <i>
                      “The eye cannot see it; mind cannot grasp it. <br />
                      The deathless Self has neither caste nor race, <br />
                      Neither eyes nor ears nor hands nor feet. <br />
                      Sages say this Self is infinite in the great <br />
                      And in the small, everlasting and changeless, <br />
                      The source of life.” - (Mundaka i.1.6)
                    </i>
                  </p>
                  <p className="creatingawarness">
                    <b>Islam: </b>
                    <i>
                      Islam means surrender – unconditional surrender to the
                      will of God. “There is no god but God and Muhammad is his
                      messenger”
                    </i>
                  </p>
                  <p className="creatingawarness">
                    <b>Judaism: </b>
                    <i>I AM who I AM” – (Book of Exodus 3:14)</i>
                  </p>
                </div>
              </div>
              <div className="col-md-4 parascrolled itia">
                <div className="creatingpararight">
                  <p className="creatingawarness">
                    <i>
                      All spiritual paths have only one key message. There is
                      only one undivided, permanent, and eternal consciousness.
                      Truth is non-dual, and Reality is singular. Humans also
                      have one fundamental desire - to remain happy and
                      eliminate suffering. This quest has existed throughout
                      human history, and thousands of books and scriptures have
                      been written and passed on from one generation to the
                      other.
                    </i>
                  </p>
                  <p className="creatingawarness">
                    <i>
                      I AM Ashish to “I AM” has been written to create awareness
                      and simplify these two fundamental pursuits of human
                      beings - discover the Self (the truth) and remain happy
                      amid worldly chaos.
                    </i>
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className="section_ourvision">
          <Container>
            {/* <TitleWraper MainTitle={"Our Vision"} subTitle={"Our Vision"} /> */}
            <Row className="whatsbook">
              {/* <div class="col-md-3 col-sm-6">
                    <div class="serviceBox">
                      <div class="service-icon">
                        <span>
                          <i class="fa fa-globe"></i>
                        </span>
                      </div>
                      <h3 class="title">Web Design</h3>
                      <p class="description">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div> */}
              <div class="col-md-4 col-sm-6">
                <div class="serviceBox red">
                  <div class="service-icon">
                    <span>
                      <FaRocket />
                    </span>
                  </div>
                  <h3 class="title">MISSION</h3>
                  <p class="description">
                    To Spread Awareness and Message of Non-Dualism and
                    Self-Realization
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="serviceBox blue">
                  <div class="service-icon">
                    <span>
                      <FaComment />
                    </span>
                  </div>
                  <h3 class="title">PURPOSE</h3>
                  <p class="description">
                    To Impart Knowledge and Learnings of Sri Ashish as per his
                    Three-Fold Path
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="serviceBox green">
                  <div class="service-icon">
                    <span>
                      <FaEarthAsia />
                    </span>
                  </div>
                  <h3 class="title">GOAL</h3>
                  <p class="description">
                    To fulfill mission and purpose of Foundation through Digital
                    and Physical (Ashram) presence{" "}
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

         {/* <section className="section_msgDrop reviewpadd">
          <Container>
            <TitleWraper
              MainTitle={"Contact with Us"}
              subTitle={"Drop a Message"}
            />
            <div className="row whatsbook">
              <Col md={6}>
                <div className="about_image__outer">
                  <img src={contactImage} alt="" className="contact author" />
                </div>
              </Col>
              <Col md={6} className="rightform">
                <form onSubmit={handleSubmit} method="post" className="rightform_elements">
                  <input type="hidden" value="HOME_PAGE_FORM" name="Form_Name" id="HOME_PAGE_FORM" />
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
                          name="Purpose" required
                        >
                          <option selected="true" disabled="disabled">Select Purpose</option>
                          <option value="General Contact">
                            General Contact
                          </option>
                          <option value="Book Related Questions">
                            Book Related Questions
                          </option>
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
                        Send
                      </Button>
                    </div>
                  </div>
                </form>

                <HubspotForm
                  portalId="43797893"
                  formId="b722e9e2-e4cf-44e8-9295-85a2ad512f54"
                  onSubmit={() => console.log("Submit!")}
                  onReady={(form) => console.log("Form ready!")}
                  loading={<div>Loading...</div>}
                />
              </Col>
            </div>
          </Container>
        </section>  */}
      </main>
      <Footer />
    </>
  );
}
