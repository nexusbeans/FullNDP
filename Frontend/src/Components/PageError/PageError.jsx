import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './PageError.scss'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

export default function PageError() {
  useEffect(() => {
    document.title = ": : NDP FOUNDATION -404 ERROR: :";
  }, []);
  return (
    <>
        <Header/>
        <main className='errorMain'>
        <section class="page_404">
  <Container>
    <Row>
      <Col md={12}>
        <div class="text-center error_fpage">
          <div class="four_zero_four_bg">
            <h1 class="text-center ">404</h1>
          </div>
          <div class="contant_box_404">
            <h3 class="h2">
              Look like you're lost
            </h3>
            <p>the page you are looking for not avaible!</p>
            <Link to="/" class="link_404">Go to Home</Link>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
       
        </main>
        <Footer/>
    </>
  )
}
