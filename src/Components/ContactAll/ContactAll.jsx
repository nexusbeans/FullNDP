import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { GoogleCaptcha } from "../../Components/GoogleCaptcha/GoogleCaptcha";


export const ContactAll = () => {
    const [state, handleSubmit] = useForm("xyyqeplb");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
            <form onSubmit={handleSubmit} method="post" className="rightform_elements">
                <div id="blocks" className="form-group">
                    <div className="col-md-12">
                        <div id="block" className="form-group">
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
                            <select
                                className="form-control form-field"
                                name="selectcenterBA" required
                            >
                                <option selected="true" disabled="disabled">Select Purpose</option>
                                <option value="General Contact">
                                    General Contact
                                </option>
                                <option value="Book Related Questions">
                                    Book Related Questions
                                </option>
                            </select>
                            <div className="icon_fields"><FaComments /></div>
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
                        <Button type='submit' className="submit_btn">
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}
