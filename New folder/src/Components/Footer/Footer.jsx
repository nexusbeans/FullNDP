import React from 'react';
import "./Footer.scss";
// import fbImage from '../../assets/images/fb.png'
// import twImage from '../../assets/images/tw.png'
// import youImage from '../../assets/images/youtube.png'
// import logoheader from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons';

const adoholicTarget = () => {
    window.open('https://adoholic.in', '_blank');
};

const FreepikTarget = () => {
    window.open('https://freepik.com', '_blank');
};




export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer_elemetsOuter ">
                    <div className="container footer_elemets__container">
                        {/* <div className="footer_elemets__row row">
                        <div className="footer_col_element col-md-4">
                            <div className="footer_titelLayer">
                                <div className="logo_footer">
                                    <a href="#">
                                        <img src={logoheader} alt="logo-footer" className='LogoFooter' />
                                    </a>
                                </div>
                                <div className="footer_text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    </p>
                                </div>
                                <div className="social_mediaElemets">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <img src={fbImage} alt="facebook-icon" />{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={twImage} alt="twiter-icon" />{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src={youImage} alt="youtube-icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer_col_element col-md-3">
                            <div className="nav_footerElements">
                                <div className="footer__layerinner">
                                    <h2>Company</h2>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <a href="#">Company</a>
                                        </li>
                                        <li>
                                            <a href="#">Features</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer_col_element col-md-3">
                            <div className="nav_footerElements">
                                <div className="footer__layerinner">
                                    <h2>Resources</h2>
                                    <ul>
                                        <li>
                                            <Link to="/contact-us">Support</Link>
                                        </li>
                                        <li>
                                            <a href="#">Documentation</a>
                                        </li>
                                        <li>
                                            <Link to="/policy-details">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/termsusage">Terms Of use</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer_col_element col-md-2">
                            <div className="nav_footerElements">
                                <div className="footer__layerinner">
                                    <h2>Contact Info</h2>
                                    <ul>
                                        <li>
                                            <a href="#">123, xyz street, Neyjoy ave. New 456</a>
                                        </li>
                                        <li>
                                            <a href="#">+8802-55662000</a>
                                        </li>
                                        <li>
                                            <a href="#">www.imstrom@mail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        <div className="row footer__bottomBlock">
                            <div className="footer__blockInner">
                                <div className='footSocial wFooter'>
                                    <SocialIcons />
                                </div>
                                <div className="footer__rightBlockInner wFooter">
                                    <div className="coprightElemets">
                                        <p>
                                            © Copyright NDP Foundation Inc. <Link to="/">ndpfoundation.com</Link> All rights reserved. Developed by: <button className='blankTarget' onClick={adoholicTarget}> adoholic.in </button> 
                                        </p>
                                        <p> <span> Images Designed by</span> <button className='blankTarget' onClick={FreepikTarget}> Freepik</button> , and by Soumya Bansal</p>
                                    </div>
                                </div>
                                <div className="footer__leftBlockInner wFooter">
                                    <ul>
                                        <li>
                                            <Link to="/termsusage">Terms of Service</Link>
                                        </li>
                                        <li>
                                            <Link to="/policy-details">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
