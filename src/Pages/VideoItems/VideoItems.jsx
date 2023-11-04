import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./VideoItems.scss";
import img66 from "../../assets/images/66.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Iframe from "react-iframe";
import TitleWraper from "../../Components/TitleWraper";
import axios from "axios";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

export default function VideoItems() {
  const [videoUrls, youtubeData] = useState([]);
  const [videoRecording, videoRecordingData] = useState([]);

  const [activeTab, setActiveTab] = useState(1);

  // const videoUrls = [
  //   "https://www.youtube.com/embed/ng7Xxhed-dQ?si=jsOPBZKCL2aBzZRp",
  //   "https://www.youtube.com/embed/I0pGAi_6Ei4?si=lInwXRUPolnBf6xk",
  //   "https://www.youtube.com/embed/uHUPQzs_zo8?si=cLlg4aOgYPzaQt8b",
  // ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    // Fetch slider data using Axios
    axios
      .get("/data/Youtubevideo.json")
      .then((response) => {
        youtubeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

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
      <main className="video_elements default_layout" id="video_elementsID">
        <section className="story">
          <Container>
            <Row>
              <Col>
                <TitleWraper MainTitle={"Gallery"} subTitle={"Gallery"} />
                <div className=" streamingtab">
                  <div className="login-button-container clearfix">
                    <div className="btn_defaultVideo sign-in">
                      <button
                        className={
                          activeTab === 1
                            ? "active btn sign-in__button  btn_trigervideo"
                            : "btn sign-in__button  btn_trigervideo"
                        }
                        onClick={() => handleTabClick(1)}
                      >
                        Video Gallery
                      </button>

                      <button
                        className={
                          activeTab === 2
                            ? "active btn sign-in__button  btn_trigervideo"
                            : "btn sign-in__button  btn_trigervideo"
                        }
                        onClick={() => handleTabClick(2)}
                      >
                        Recordings
                      </button>
                      <button
                        className={
                          activeTab === 3
                            ? "active btn sign-in__button  btn_trigervideo"
                            : "btn sign-in__button  btn_trigervideo"
                        }
                        onClick={() => handleTabClick(3)}
                      >
                        Photo Gallery
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Video_block">
                  {activeTab === 1 && (
                    <div className="register__form">
                      <div
                        id="registration-form-wrapper "
                        className="bottomframe Video_BlockItems"
                      >
                        {/* {videoUrls.map((url, index) => (
                          <div key={index} className="Video_blockElements">
                            <Iframe
                              src={url}
                              title={`YouTube video ${index + 1}`}
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen=""
                            />
                          </div>
                        ))} */}
                        <YouTubePlaylist
                          apiKey="AIzaSyBtGPHVKuztk8298ZbA0rb5ZHjZd4BE1F8"
                          playlistId="PL-nQOdm3xoxjeyS1q2BVDowznv9BN4v2z"
                          uniqueName="Videos"
                        />
                      </div>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="register__form">
                      <div
                        id="registration-form-wrapper "
                        className="bottomframe Video_BlockItems"
                      >
                        {/* {videoRecording.map((url, index) => (
                          <div key={index} className="Video_blockElements">
                            <Iframe
                              src={url}
                              title={`YouTube video ${index + 1}`}
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen=""
                            />
                          </div>
                        ))} */}
                        <YouTubePlaylist
                          apiKey="AIzaSyBtGPHVKuztk8298ZbA0rb5ZHjZd4BE1F8"
                          playlistId="PL-nQOdm3xoxggWZWGor1Rig9QJVOz19FK"
                          uniqueName="Videos_recording"
                        />
                      </div>
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div class="text-center">
                      <h3 class="h2">This Page is Under Development</h3>
                    </div>
                  )}
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
