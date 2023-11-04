import React, { useEffect, useState } from "react";
import TitleWraper from "../../Components/TitleWraper";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Iframe from "react-iframe";
import axios from "axios";

export default function Recording() {
  const [videoRecording, videoRecordingData] = useState([]);

  useEffect(() => {
    // Fetch slider data using Axios
    axios
      .get("/data/VideoRecording.json")
      .then((response) => {
        videoRecordingData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);
  return (
    <>
      <Header />
      <main className="main_recording default_layout ">
        <Container>
        <TitleWraper
              MainTitle={"Recording"}
              subTitle={"Recording"}
            />
          <Row>
            <Col>
              <div className="Video_block">
                <div className="register__form">
                  <div
                    id="registration-form-wrapper "
                    className="bottomframe Video_BlockItems"
                  >
                    {videoRecording.map((url, index) => (
                      <div key={index} className="Video_blockElements">
                        <Iframe
                          src={url}
                          title={`YouTube video ${index + 1}`}
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
