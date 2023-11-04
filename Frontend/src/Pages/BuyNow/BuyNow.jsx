import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import booKImg from "../../assets/images/buy-book.png";
import booKImgIC from "../../assets/images/titlei.png";
import "./BuyNow.scss";
import TitleWraper from "../../Components/TitleWraper";
import BuyIcon_img from "../../assets/images/buyimgs.jpg";
import bulkOrder from "../../assets/images/bulkorder.jpg";
import BulkButton from "../../Components/Button/BulkButton";
import Buybutton from "../../Components/Button/Buybutton";
import { useEffect } from "react";
import Modals from "../../Components/Modals/Modals";

export default function BuyNow() {
  
  useEffect(() => {
    document.title = ": : NDP FOUNDATION -BUY NOW : :";
  }, []);

  return (
    <>
      <Header />
      <main className="BuyNow_main" id="BuyNow_MainID">
        <section className="BookSection story_bg">
          <Container>
            <Row className="centerLayer">
              <Col md={5}>
                <div className="BookImage_section">
                  <img src={booKImg} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col md={7}>
                <div className="BookImage_section_title">
                  <img src={booKImgIC} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="story">
          <Container>
            <TitleWraper MainTitle={"Buy Now"} subTitle={"Buy Now"} />
            <Row className=" support">
              <Col>
                <div className="buy_items">
                  <div className="buy_card_outer">
                    <div className="buy_card">
                      <div className="bu_nowCard__inner">
                        <img
                          src={BuyIcon_img}
                          alt="img"
                          className="img-fluid order_iconbuld"
                        />
                      </div>
                      {/* <div className="bulkTitle">
                        <h4>USA & Other Countries</h4>
                      </div> */}
                      <div className="buy_nowBtnItem_page mt-2 d-flex justify-content-center">
                        <Buybutton />
                        {/* <Modals ButtonModalTitle={"BUYNOW"}
                      bodydata={"Book Will Be Available From 1st September 2023"}
                    /> */}
                      </div>
                    </div>
                  </div>
                  <div className="buy_card_outer">
                    <div className="buy_card">
                      <div className="bu_nowCard__inner r">
                        <img
                          src={bulkOrder}
                          alt="img"
                          className="img-fluid order_iconbuld"
                        />
                      </div>
                      {/* <div className="bulkTitle">
                        <h4>Bulk Orders</h4>
                      </div> */}
                      <div className="buy_bulkBtnItem_page mt-2">
                        <BulkButton />
                      </div>
                    </div>
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
