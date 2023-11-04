import React from "react";
import "./TermsUsage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TitleWraper from "../../Components/TitleWraper";
import { Col, Container, Row } from "react-bootstrap";

const TermsUsage = () => {
  return (
    <>
      <Header />
      <main className="TermsMain default_layout " id="TermsMainID">
        <section className="Terms_section story">
          <Container>
            <Row>
              <Col>
                <TitleWraper
                  MainTitle={"Terms and Conditions"}
                  subTitle={"Terms and Conditions of Use"}
                />
                <div className="detail_wraper">
                  <p>
                  The entire contents of this website are copyrighted by NDP Foundation Inc., unless otherwise noted.
                  </p>
                  <p>
                  Except as stated herein, no portion of these contents may be displayed, reproduced, republished, uploaded, posted, transmitted or distributed in any form or by any means, electronic, mechanical, photocopying, recording or otherwise without the prior written permission of NDP Foundation Inc.  Permission is granted, solely for your personal use for non-commercial purposes, to display the contents with a computer using HTML brower software and to download, use, and print copies of the material, provided that no modification is made to the material and that all copyright and other proprietary notices are preserved.  Permission is granted to include links to the URL’s of documents comprising the site in other HTML documents, provided that all trademarks and copyrights are duly noted in such links.   Permission granted here does not include the right to repost the contents at any other webs sites.  Modification of the materials or use of the materials for any other purposes is a violation of copyright and other proprietary rights.  Use of some of the contents is subject to additional limitations as specified within.
                  </p>
                  <p>
                  NDP Foundation Inc. intends the information contained in this website to be accurate and reliable.  However, errors may occur.  Therefore, NDP disclaims any warranty of any kind, whether express or implied, as to any matter whatsoever relating to this website, including without limitation, the merchantability or fitness for a particular purpose.  
                  </p>
                  <p>
         
Inquiries concerning trademarks, copyrights and other intellectual property rights governing the content of this website should be directed to NDP Foundation Inc., 83 Dakota Drive, Hamilton, NJ 08619.

                  </p>
                  <p>
                   

Entire contents of this website copyright ©2023 NDP Foundation Inc.  All rights reserved.

                  </p>
                </div>
              </Col>{" "}
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
};
export default TermsUsage;
