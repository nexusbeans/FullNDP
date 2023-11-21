import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TitleWraper from "../../Components/TitleWraper";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./IamBook.scss";
import readbook from "../../assets/images/readbook.png";
import ndp from "../../assets/images/ndp.jpg";
import img_bookSet from "../../assets/images/img_bookSet.png";
import UserReviews from "../../Components/UserReviews";
import Buybutton from "../../Components/Button/Buybutton";
import LookoutButton from "../../Components/Button/LookoutButton";
import { Link } from "react-router-dom";
import Modals from "../../Components/Modals/Modals";
import BuyIcon from "../../assets/images/buy-iconitem.png";

export default function IamBook() {

  useEffect(() => {
    document.title = ": : NDP FOUNDATION -“I AM” – BOOK : :";
  }, []);
  return (
    <>
      <Header />
      <main className="iamBook_main" id="IamBook_mainId">
        <section className="ban_sec banner_fold">
          <Container>
            <Row>
              <Col fluid className="banner_fold__col">
                <div className="d-flex unfold_Elements_outer">
                  <div className="ban_text unfold_Elements">
                    <strong>
                      UNFOLD AND <br />
                      EXPLORE
                    </strong>
                    <div className="unfold_subTitle">
                      <p>
                        <b> I AM Ashish </b> to “I AM” brings the essence of
                        universal spiritualism and the wisdom of non-dualism to
                        today's world. It empowers the individuals in
                        discovering their own true nature -{" "}
                        <i>
                          Sat-Chit-Ananda (Ever Existent-Ever Conscious-Ever
                          Blissful) or (Being-Awareness-Bliss).
                        </i>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="img_bookLayer">
                    <img src={img_bookSet} alt="" className="img-fluid" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className="story"
          id="whatisinbook"
          style={{ paddingBottom: 80 }}
        >
          <div className="container">
            <TitleWraper
              MainTitle={"What's in the book?"}
              subTitle={"What's in the book?"}
            />
            <Row className="whtcontnt">
              <Col md={6}>
                <p>
                  This is a story of a hard-driving businessman who, at age
                  forty-six, understood that this world is simply an illusion as
                  perceived through our senses and individuality. He wanted to
                  get more out of life and experience the Truth behind this
                  illusion. In the twenty-first century, his message to all of
                  us is to put less emphasis on organized religion and more on
                  universal spirituality.
                </p>
                <p>
                  This book will help a reader understand some of the more
                  profound questions we often ask ourselves when sitting alone,
                  facing challenges, or striving for peace and happiness: Who am
                  I? Is there a God? Do prayers work? How is spiritualism
                  different than religion? What does it mean to be enlightened?
                  "I AM" will clarify your questions and illuminate your path to
                  enlightenment.
                </p>
              </Col>
              <Col md={6}>
                <p>
                  Written in a question-and-answer format and accessible to
                  all—young and experienced alike—this book distills the essence
                  of spiritualism as understood and experienced by an ordinary
                  human being amongst us. An ordinary human being sharing his
                  thoughts and experiences on spiritualism and answering the
                  eternal question: Who am I?
                </p>
                <p>
                  <strong> Excerpt from "I AM" </strong>
                  When personality merges with Reality, what remains is a
                  non-personal, all-inclusive awareness. The Reality is
                  singular. God and I are one and the same in this Reality. When
                  our individuality or ego is dissolved, the appearance of all
                  perceived connections with this external and illusory world
                  dissolves. Thus, "Ashish" no longer exists, and a self becomes
                  the Self—a permanent and eternal state of
                  Existence-Consciousness-Bliss. This is Self-Realization."
                </p>
              </Col>
            </Row>
          </div>
        </section>
        <section
          className="story readstory"
          id="readthisbook"
          style={{ background: "#77c1c4" }}
        >
          <Container>
            <h1 className="hd">Read this book</h1>
            <h2 className="hd1" id="universal" style={{ textAlign: "center" }}>
              <b style={{ color: "#333333c4" }}>
                Why should you read this book?
              </b>
            </h2>
            <Row className="whyshouldcontnt">
              <Col md={6} className="relative d-flex">
                <div className="read_bookOuter align-self-end">
                  <img src={readbook} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col md={6}>
                <p className="leftparagraph">
                  Sri Ashish answers questions that are close to our heart for
                  which we never find good solutions. We struggle with these
                  internally resulting in disturbing our inner peace and
                  happiness.
                </p>
                <p className="leftparagraph">
                  Whether these are deeper questions related to God and
                  spirituality, or to worldly matters regarding children,
                  relationships, and health - the book emphasizes how to truly
                  know yourself, and by knowing that how you can eliminate the
                  root cause of all problems. The methods suggested are not easy
                  to implement, yet they are most effective in realizing a state
                  of constant happiness.
                </p>
                <p className="leftparagraph">
                  This book allows you to explore the idea of non-dualism and
                  explains why non-attachment and equanimity are antidotes to
                  suffering and mental anguish in our daily lives.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="buy_looksection" id="LookUP">
          <Container>
            <Row>
              <Col>
                <div className="layer_buyItems">
                  <div className="LookTitle">
<LookoutButton/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="aboutauthor" className="abouttheauthor">
          <Container>
            <TitleWraper
              MainTitle={"About the Author"}
              subTitle={"About the Author"}
            />
            <Row className=" whatsbook">
              <Col md={5}>
                <div className="user_foundImg">
                  <img src={ndp} className="authorimg img-fluid" alt="" />
                </div>
              </Col>
              <Col md={7} className=" leftpara">
                <p>
                  <strong> Anil Joshi </strong> is the founder and CEO of
                  IntelliH, a virtual care and remote patient monitoring firm
                  that helps physicians and nurses deliver health care through
                  its digital health platform. Prior to starting IntelliH, Anil
                  was a professor at Harvard University's School of Dental
                  Medicine and taught epidemiology, medical informatics, and
                  biostatistics.
                </p>
                <p>
                  Since his college days, Anil has been a practitioner of
                  meditation and an ardent follower of Swami Vivekananda. The
                  teachings of the Bhagavad Gita and the Yoga Sutras of
                  Patanjali have guided his spiritual interests. Discovering the
                  ancient wisdom hidden in spiritual texts or in the minds of
                  yogis brings joy to his heart. Inspired by Sri Ashish, this book
                  was written as an expression of that joy. Anil believes that
                  the spiritual mysticism has a perfect repeatable method which
                  remains to be explained by science.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="ReviewSlide reviewpadd">
          <div className="container" id="review">
            <TitleWraper MainTitle={"Reviews"} subTitle={"Reviews"} />
            <UserReviews />
          </div>
        </section>
        <section className="buy_looksection" id="LookUP">
          <Container>
            <Row>
              <Col>
                <div className="layer_buyItems d-flex">
                  <div className="LookupBtn">
                    {/* <Buybutton/> */}
                    <Link to='/BuyNow'
                      className="buyButton btnFix"
                 
                    >
                          BuyNow
                      <span>
                        <img src={BuyIcon} alt="buyicon" />{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
