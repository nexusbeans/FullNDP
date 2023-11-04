import "./UserReviews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import aunty from "../../assets/images/m1.jpg";
import Sanjoy from "../../assets/images/Sanjoy.jpg";
import Jaishree from "../../assets/images/Jaishree.jpg";
import Jagruti from "../../assets/images/Jagruti.jpg";
import Giselle2 from "../../assets/images/Giselle2.jpg";
import Giselle1 from "../../assets/images/Giselle1.jpg";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReadMore from "./ReadMore";

const UserReviews = () => {
  return (
    <>
      <div className="ReviewSlide">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

          }}
          // install Swiper modules
      
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <div className="box">
                <p className="reviewpara">
                  <ReadMore
                    text={
                      "“I AM” has changed me for the better.  I am internally and externally at peace with myself.  I have happiness, joy, appreciation, and serenity.  Everyone should take time to this book; it will impact your self-preservation."
                    }
                  />
                </p>
                <div className="user_review">
                  <img src={aunty} className="review_user" alt="" />
                </div>
                <h4 className="hdreview">Michele Guenther</h4>
                <h4 className="hdreview reviewLocation">
                  Human Resource Manager, New Jersey, USA{" "}
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">
              <div className="box">
                <p className="reviewpara">
                  <ReadMore
                    text={
                      "“It's simple - just one truth, recognize it and get there to enjoy a beautiful life. The book I AM Ashish to “I AM” hand holds us through this journey. A must have experience for all."
                    }
                  />
                </p>
                <div className="user_review">
                  <img src={Jaishree} className="review_user" alt="" />
                </div>
                <h4 className="hdreview">Jaishree Goyal | Founder Trustee </h4>
                <h4 className="hdreview reviewLocation">
                  Anandaya Foundation, New Delhi, India{" "}
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">
              <div className="box">
                <p className="reviewpara">
                  {" "}
                  <ReadMore
                    text={
                      "“The book I AM Ashish to “I AM” offers a new perspective of the Non-Dual Theory described in detail in Sanskrit texts that are difficult to understand and probably less relevant in the modern society where people do not have the time nor the energy or the background to understand the complex arguments described there. Practical situations described in the book and meditations and methods suggested here should prove very useful to people who have no idea about Indian philosophy but are experiencing suffering in one form or the other in their lives."
                    }
                  />{" "}
                </p>
                <div className="user_review">
                  <img src={Sanjoy} className="review_user" alt="" />
                </div>
                <h4 className="hdreview">Sanjoy Banerjee, PhD </h4>
                <h4 className="hdreview reviewLocation">
                  Data Scientist, Kolkata, India{" "}
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="box">
                <p className="reviewpara">
                  <ReadMore
                    text={
                      "“A thought-provoking guide towards spirituality, happiness and still maintaining a normal life. The format is methodical, content well explained and grasping. For parents of young children, it’s like a textbook. Highly reaccommodated for people of all ages."
                    }
                  />
                </p>
                <div className="user_review">
                  <img src={Jagruti} className="review_user" alt="" />
                </div>
                <h4 className="hdreview">Dr. Jagruti J.</h4>
                <h4 className="hdreview reviewLocation">
                  {" "}
                  Dave, Chicago, USA{" "}
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">
              <div className="box">
                <p className="reviewpara">
                  <ReadMore
                    text={
                      "I AM Ashish to “I AM” is a journey of Ashish who identifies with his body and his name very deeply, so much so that he thinks and believes that he is the body. With a series of crises in his life, Ashish wakes up to understand that he has a body, but he is not the body. Then who is he? This book is all about how Ashish discovered who he truly is. Anil sees this transformation in Ashish and is curious like you-the readers to know what brought this change in Ashish. Anil leaves no stone unturned in asking all sorts of questions to Ashish which he thinks will pave way for his own transformation, enlightenment, and Self-realization. Written in an Upanishadic style, this book contains all the FAQs that a sincere seeker should ask, would ask, and must ask the Self-realized Master. Of course, throughout the book, Ashish tacitly maintains that he can give replies to a seeker’s questions, but the seeker has to find his/her own answer. Being a seeker myself, I learned a lot from this book."
                    }
                  />
                </p>
                <div className="user_review">
                  <img src={Giselle2} className="review_user" alt="" />
                </div>
                <h4 className="hdreview">Chandra Shekhar Mayanil, PhD </h4>
                <h4 className="hdreview reviewLocation">
                  {" "}
                  Author and Neuroscientist, Chicago, USA{" "}
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">
              <div className="box">
                <p className="reviewpara">
                  <ReadMore
                    text={
                      "When an individual faces drastic life changing experiences that place him in the only path to salvation and finds discovery of self, his world is unlocked with sudden enlightenment and spiritual blessings.  As Ashish's passion for his new life unravels and begins to unconditionally share his spiritual journey, Ashish crosses paths with Dr. Joshi, whom through their close friendship finds interest, enthusiasm and understanding to Ashish's spiritual journey.  Dr. Joshi has invested years in research, documenting and understanding Ashish's spiritual journey and has put together written literature based on facts and structure for the reader's understanding in capturing the true essence of Ashish's spiritual journey and studies that has brought him ultimate and unconditional happiness."
                    }
                  />
                </p>
                <div className="user_review">
                  <img src={Giselle1} className="review_user" alt="" />
                </div>
                <h4 className="hdreview">Giselle Trujillo </h4>
                <h4 className="hdreview reviewLocation">New Jersey, USA </h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default UserReviews;
