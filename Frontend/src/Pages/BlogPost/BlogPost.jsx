import React, { useEffect, useState } from "react";
import "./BlogPost.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import poemimage from "../../assets/images/poem.jpg";
import blogData from "../../Api/BlogData";
import axios from "axios";

function BlogPost() {
  // const [blogData, blogItemsData] = useState([]);

  // useEffect(() => {
  //   // Fetch slider data using Axios
  //   axios.get("/data/BlogData.json")
  //     .then(response => {
  //       blogItemsData(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching slider data:", error);
  //     });
  // }, []);

  const blogItems = blogData.map((blog, index) => (
    <Col md={12} key={index}>
      <div className="blog_card">
        {/* <div className="blog_card_image">
          <img src={poemimage} alt="img" />
        </div> */}
        <div className="dateTitle">
          <div className="dateTitleInner"><p>{blog.title}</p></div>
        </div>
        <div className="blog_card_content">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <div className="name_items">
            <p>{blog.subline}</p>
            <p>{blog.author}</p>
            <p>{blog.date}</p>
            <p> {blog.bottomline}</p>
          </div>
        </div>
      </div>
    </Col>
  ));

  return (
    <>
      <Header />
      <main className="blogPost default_layout mt-0">
        <section className="contact__banner blogPost_section_main">
          <Container>
            <div className="banner_contactLayout">
              <h2>Poems By Sri Ashish</h2>
            </div>
          </Container>
        </section>
        <section className="blogPost_section mt-5">
          <Container>
            <Row>{blogItems}</Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BlogPost;
