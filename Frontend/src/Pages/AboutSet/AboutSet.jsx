import React, { useEffect } from "react";
import "./AboutSet.scss";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ashishImg from "../../assets/images/ashish.jpg";
import TitleWraper from "../../Components/TitleWraper";

export default function AboutSet() {
  useEffect(() => {
    document.title = ": : NDP FOUNDATION -I AM ASHISH : :";
  }, []);
  return (
    <>
      <Header />
      <main
        className="Contactup_main default_layout mb-0"
        id="Contactus_mainID"
      >
        <section className="reviewpadd">
        <TitleWraper
                  MainTitle={"About Sri Ashish"}
                  subTitle={"About Sri Ashish"}
                />
          <Container className="container">
            <Row className="user_artical">
              <Col md={6}>
                <div className="user_image about_image__outer">
                  <img src={ashishImg} className="ashishimg" alt="img" />
                </div>
              </Col>
              <Col md={6}>
              <div className="user_artical_title">
                  <p>
                    <strong>Sri Ashish's</strong> transformation began in
                    December 2015 after he experienced a traumatic event in his
                    personal life. Unable to find answers or any direction in
                    his life, he intently prayed one night - “Lord, you have
                    trumped me this time. I have no answer or direction. I
                    sincerely need your help”. The next morning, he woke up with
                    “SRF” imprinted on his mind. On further searching he was
                    introduced to Paramhansa Yogananda and to Self-Realization
                    Fellowship, an organization started by Paramhansa Yogananda.
                  </p>
                  <p>
                    Sri Ashish ordered his first book on the subject of
                    Self-Realization called “An Autobiography of a Yogi”. This
                    was the first turning point in Sri Ashish’s life which arose
                    an awakening in him. For the next three years he read over
                    50 books on the subject including the Bhagavad Gita, the
                    Bible, Ashtavakra Gita, Avadhuta Gita, Ribhu Gita, and
                    Dhammapada – which awoke in him a realization that the only
                    purpose of life is to know one’s true nature – this is
                    called Realizing the Self or Self-Realization. Sri Ashish
                    felt that he was still missing something in his quest to
                    Realize the Truth, and this led to the most crucial turning
                    point in Sri Ashish’s life - when he was introduced to
                    Ramana Maharshi (an Indian Hindu sage and jivanmukta –
                    liberated being) and his method of Self-Inquiry. This point
                    on, Ramana Maharshi became Sri Ashish’s guiding light.
                  </p>
                  <p>
                    In February 2020, Sri Ashish visited Ramana’s ashram at
                    Tiruvannamalai, India, following which he began practicing
                    Self-Inquiry (Jnana Yoga) and Surrender (Bhakti Yoga) as per
                    Ramana’s teachings. Prior to this visit, he had only
                    practiced Kriya Yoga (Dhyana Yoga). In 2021, he experienced
                    shoonya (nothingness) – his original state of being, also
                    known as Sat-Chit-Ananda (Existence-Consciousness-Bliss).
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Item_sectionUser">
          <Container>
            <Col>
              <div className="d-flex item_religion">
                <p>
                  Prior to this time, <strong> Sri Ashish</strong> did not have
                  any interest in religion, spiritualism, or the non-material
                  aspects of life. He was an ambitious young man pursuing the
                  rewards of material success. Over time, he was able to achieve
                  success per his dreams. His life was like any other young man,
                  filled with lots of fun and pleasure but mixed with an equal
                  number of disappointments.
                </p>

                <p>
                  <strong> Sri Ashish's</strong> transformation is a living
                  testimonial of what is possible. It is an inspirational story
                  for all of us who aspire to pursue a spiritual path but get
                  lost in scriptures, dogmas, and rituals. We lose the eternal
                  truth that we already are what we are seeking! Sri Ashish is
                  your next-door neighbor with an uncanny ability to simplify
                  the core spiritual message that is accessible by all.{" "}
                </p>
              </div>
            </Col>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
