import React, { useState } from 'react'
import './ButtonElements.scss'
import bulkButtonicon from '../../assets/images/bulkOrder.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TitleWraper from '../TitleWraper';
import { useForm, ValidationError } from '@formspree/react';
import { GoogleCaptcha } from "../../Components/GoogleCaptcha/GoogleCaptcha";
import { FaUserPlus, FaLocationDot, FaEnvelope, FaAddressBook, } from "react-icons/fa6";
import FormSubmit from '../../Pages/FormSubmit/FormSubmit';



const BulkButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, handleSubmit] = useForm("xgejkovp");
  const [isSending, setIsSending] = React.useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true); // Set loading state to true before sending

    // Perform the form submission
    const submission = await handleSubmit(event);

    if (submission.success) {
      setIsSending(false); // Reset loading state on successful submission
    }
  };

  if (state.succeeded) {
    return (
      <FormSubmit />
    );
  }
  return (
    <div>
      <div className="buy_nowBtnItem">
        <Button variant="primary" onClick={handleShow} className="buyButton btnFix">
          Bulk Orders <span><img src={bulkButtonicon} alt="" /> </span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-content_data">
            <TitleWraper
              MainTitle={"Bulk Order"}
              subTitle={"Bulk Orders"}
            />
            <div className="">
              <form onSubmit={handleSubmit} method="post" className="rightform_elements">
                <input type="hidden" value="Bulk Order" name="Form_Name" id="SESSION_PAGE_FORM" />
                <div id="blocks" className="form-group">
                  <div className="col-md-12">
                    <div id="block" className="form-group">
                      <input type="hidden" id="Event_Form" name="Event_Form" value="Event_Form" />
                      <input
                        name="nameuser"
                        id="nameuser"
                        type="text"
                        placeholder="Your Name"
                        className="form-control form-field"
                        required
                      />
                      <ValidationError
                        prefix="Name User"
                        field="nameuser"
                        errors={state.errors}
                      />
                      <div className="icon_fields"><FaUserPlus /></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="clearfix" />
                    <div id="block" className="form-group">
                      <input
                        id="email"
                        type="email"
                        name="email" className="form-control form-field" placeholder="Email Address"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <div className="icon_fields"><FaEnvelope /></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="clearfix" />
                    <div id="block" className="form-group">
                      <input
                        name="residence"
                        type="text"
                        placeholder="Country of Residence"
                        className="form-control form-field"
                        required
                      />
                      <ValidationError
                        prefix="residence"
                        field="residence"
                        errors={state.errors}
                      />

                      <div className="icon_fields"><FaLocationDot /></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="block" className="form-group">
                      <input
                        name="Number of Books"
                        type="text"
                        placeholder="Number of Books"
                        className="form-control form-field"
                        required
                      />
                      <ValidationError
                        prefix="residence"
                        field="residence"
                        errors={state.errors}
                      />

                      <div className="icon_fields"><FaAddressBook /></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="block" className="form-group1">
                      <textarea
                        id="message"
                        name="message" className="form-control form-field" placeholder="Enter your Message"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />

                    </div>
                  </div>
                  <GoogleCaptcha />
                  <div className="button_Outer ">
                    <Button type="submit" className="submit_btn" disabled={isSending}>
                      {isSending ? 'Sending...' : 'Send'}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </div>
  )
}
export default BulkButton