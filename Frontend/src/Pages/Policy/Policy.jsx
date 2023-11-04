import React, { useEffect } from "react";
import "./Policy.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TitleWraper from "../../Components/TitleWraper";
import { Col, Container, Row } from "react-bootstrap";

const Policy = () => {
  useEffect(() => {
    document.title = ": : NDP FOUNDATION -Privact Policy : :";
  }, []);
  return (
    <>
      <Header />
      <main className="policy_main default_layout" id="policy_mainID">
        <section className="policy_section">
          <Container>
            <Row>
              <Col>
                <TitleWraper
                  MainTitle={"Privacy Policy"}
                  subTitle={"Privacy Policy"}
                />
                <div className="detail_wraper">
             
                  <p>
                    <strong>September 14, 2023 </strong>
                  </p>
                  <h3 className="mb-3">Website: www.ndpfoundation.com</h3>
                  <p>
                  This website is owned and operated by NDP Foundation Inc. (“NDP,” “we” or “us”).  We collect non-personally identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site (as applicable), and the date and time of each visit.  NDP’s primary goal in collecting this information is to better understand how visitors use the website.  NDP may release or utilize the data collected from the website in this manner in an aggregate form (e.g., by publishing a report on how the NDP website is accessed and used).
                  </p>
                  <p>
                  NDP also collects potentially personally identifying information like IP addresses for users who have logged-in, and for users who leave comments on the NDP website.  NDP only discloses logged-in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.
                  </p>
                  <h3>Personally-Identifying Information:</h3>
                  <p>
                  Certain visitors to the NDP website and participants in NDP Interactive Sessions choose to interact with NDP in ways that require NDP to gather personally-identifying information.  The amount and type of information that NDP gathers depends on the nature of the interaction.  Those who engage in transactions with NDP are asked to provide additional information, including as needed, the personal and financial information required to process those transactions.  In each case, NDP collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with NDP.  NDP does not disclose personally-identifying information other than as described below.  Visitors to the NDP website or to the Interactive Sessions can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain activities.

                  </p>
                  <h3>Interactive Sessions with NDP Foundation:</h3>
                  <p>
                  NDP may host interactive sessions from time-to-time, where attendee input occurs.  These sessions may be recorded, and posted to the NDP website and on any third-party platforms NDP may choose to use.  In such cases, the attendee’s image and/or name and/or other identifying information may be made public, and may also be used in NDP’s promotional or fundraising activities. Additionally, these third-party platforms might collect or use the information provided according to their respective disclosure and terms of use policies. Attendees consent to the perpetual, license-free right to use their images, voices, and/or transcription of their statement during the session in the furtherance and promotion of NDP and its mission.
                  </p>
                  <h3>
                  Aggregated Statistics:
                  </h3>
                  <p>
                  NDP may collect statistics about the behavior of visitors to its website.  For instance, NDP may monitor the most popular posts on the NDP website and may display this information publicly or provide to others.  However, NDP does not disclose personally-identifying information other than as described below.  
                  </p>
                  <h3>Protection of Certain Personally-Identifying Information:</h3>
                  <p>
                  Beyond the Interactive Sessions described above, NDP discloses potentially and actually personally-identifying information only to those of its employees, contractors and affiliated organizations that 1) need to know that information in order to process it on NDP’s behalf or to provide services available at NDP’s website, and 2) that have agreed not to disclose it to others.  NDP will not rent or sell potentially or actually personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, NDP will only disclose potentially and actually personally identifying information in response to a subpoena, court order or other governmental request, or when NDP believes in good faith that the disclosure is reasonably necessary to protect the property or rights of NDP, third parties, or the public at large.  NDP takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially or actually personally identifying information.
                  </p>
                  <h3>Cookies:</h3>
                  <p>
                  NDP uses cookies to help identify and track visitors, their usage of the NDP website, and their website access preferences.  NDP visitors who do not wisht to have cookies placed on their computers should set their browsers to refuse cookies before using the NDP website, with the drawback that certain features of NDP’s website may not function properly without the aid of cookies.
                  </p>
                  <h3>Privacy Policy Changes:</h3>
                  <p>NDP may change its privacy policies from time to time, and in its sole discretion.  NDP encourages visitors to frequently check this page for any changes to its privacy policies.  Your continued use of this site after any change in these privacy policies will constitute your acceptance of such change.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Policy;
