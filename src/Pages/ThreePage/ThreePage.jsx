import React, { useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import "./ThreePage.scss";
import Footer from "../../Components/Footer/Footer";
import TitleWraper from "../../Components/TitleWraper";

export default function ThreePage() {
  useEffect(() => {
    document.title = ": : NDP FOUNDATION -THREE-FOILD PATH : :";
  }, []);
  return (
    <>
      <Header />
      <main className="ThreePage_main default_layout" id="ThreePage_mainID">
        <Container>
          <Row>
            <Col>
              <section className="section_faq">
                <TitleWraper
                MainTitle={"Three-Fold Path to"}
                subTitle={"Realizing One’s True Nature in Sri Ashish’s Own Words"}
                />
                <div className="acc_outerItems ">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="accordion_header">
                        The Truth is non-dual
                        <span className="sub_text">
                          <i className="qs"> (Satya Advaita Hain)</i>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="accordion_items">
                          <p>Understanding of Truth Contemplation thereafter:</p>
                          <ul className="ulli">
                            <li className="lidisc1">
                              Satya Advaita Hain means the Truth is non-dual.
                            </li>
                            <li className="lidisc1">
                              What does the above mean? It means that we are all
                              part of an indivisible whole, and the underlying
                              essence of all existence is one and the same.
                              While there appears to be division in form and
                              name (thoughts, energy and matter), but in
                              Reality, there is none.
                            </li>
                            <li className="lidisc1">
                              What exists is a non-personal all-inclusive
                              awareness and being conscious or abiding in this
                              awareness all the time is called Nirvana,
                              Enlightenment or Self Realization.
                            </li>
                            <li className="lidisc1">
                              Why can’t we experience this awareness all the
                              time even though this is our original and true
                              nature? Due to the illusory appearance of
                              ignorance in the form of individuality or
                              “Individual I” (ego), we begin to falsely identify
                              with this entity which has no substantial reality.
                              And hence begin to believe in relative existence –
                              everything that this false “I” has created for
                              itself.
                            </li>
                            <li className="lidisc1">
                              Once all the limiting ideas related to this false
                              “I” are eliminated or dissolved what remains is
                              your original Being. The true nature of this Being
                              is silent, still and thought free which is
                              directly experienced as indescribable bliss. This
                              original state of Being is called Sat Chit Ananda
                              – Being-Consciousness-Bliss or
                              Being-Awareness-Bliss.
                            </li>
                            <li className="lidisc1">
                              Your original Being has never changed and will
                              never change. It is permanent and so the illusion
                              and bondage is the belief that you are bound due
                              to a false identification. This is the only
                              barrier to realizing your true Self. It is here
                              and now – always present.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className="accordion_header">
                        Just “Be” in your daily life
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="accordion_items">
                          <p>
                            Implementing this understanding in your daily life:
                          </p>
                              <ul className="ulli">
                                <li className="lidisc1">
                                  Through this understanding of Truth just “Be”
                                  in your daily life.
                                </li>
                                <li className="lidisc1">
                                  Let go of everything that you believe in, that
                                  your individuality has built for itself.
                                </li>
                                <li className="lidisc1">
                                  Practice self-inquiry and unconditional
                                  surrender.
                                </li>
                                <li className="lidisc1">
                                  Practice discriminating between real and
                                  unreal as per the understanding above and
                                  begin non-attachment to everything.
                                </li>
                              </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header className="accordion_header">
                      Experience Truth as “I AM” 
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="accordion_items">
                          <p>Direct Experience:</p>
                          <ul className="ulli">
                            <li className="lidisc1">
                            As you begin to continue implementation in your daily life you will begin to see the change within and without.
                            </li>
                            <li className="lidisc1">
                            Eventually it will become automatic, and you will experience your true nature – perpetual, unchanging and unwavering joy as “I AM”.
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer/>
 
    </>
  );
}
