import React, { useEffect } from "react";
import "./FormSubmit.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {  FaSquareCheck } from "react-icons/fa6";
import { useHistory } from 'react-router-dom';

function FormSubmit() {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace('https://ndpfoundation.com/');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     window.history.back(); // Go back to the previous page
  //   }, 2000); // 2000 seconds

  //   return () => {
  //     clearTimeout(timeout); // Clear the timeout if the component unmounts
  //   };
  // }, []);
  return (

    <>
      <Header />
      <main className="formMainsubmit default_layout">
        <section>
          <div className="thankyouForm ">
          <div className="successIcon"><FaSquareCheck/></div>
            <h2>Thankyou for Submitting Your Response</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FormSubmit;
