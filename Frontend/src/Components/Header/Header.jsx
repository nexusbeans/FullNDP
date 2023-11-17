import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.scss";
import logoheader from "../../assets/images/logo.png";
import DonateImg from "../../assets/images/Donatebtn.png";
import ButtonLogo from "../../assets/images/button.png";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const [menuReleased, setMenuReleased] = useState(false);

  const toggleMenu = () => {
    setMenuReleased((prevMenuReleased) => !prevMenuReleased);
  };

  return (
    <header
      className={isSticky ? "sticky header_Elements  " : "header_Elements "}
    >
      {isLoggedIn === "true" ? (
        <Link className="button_adminDB" to="/dashboard">
          Admin Dashboard
        </Link>
      ) : null}

      <div className="greyback grad">
        <Container>
          <Row>
            <Col>
              <div
                className={` NavItem_elements right_toggle_menu ${
                  menuReleased ? "right_toggle_menu_release" : ""
                }`}
              >
                <div className="logo_items">
                  <Link to="/">
                    <img src={logoheader} className="logo" alt="logo" />
                  </Link>
                </div>

                <div className="NavBarItem">
                  <nav className="stroke">
                    <ul>
                      {/* <li>
                        <NavLink to="/about-sri-ashish" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active header zoom" : " header zoom"}>
                          About SRI ASHISH
                        </NavLink>
                      </li> */}
                      <li>
                        <div className="dropdown">
                          <NavLink
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? " header zoom"
                                : "header zoom"
                            }
                          >
                            SRI ASHISH
                          </NavLink>
                          <div className="dropdown-content">
                            <Link to="/about-sri-ashish">About Sri Ashish</Link>
                            {/* <Link
                              to="/recording" 
                              className="ancher"
                            >
                              Recordings
                            </Link> */}
                            <NavLink to="/poems" className="ancher">
                              Poems By Sri Ashish{" "}
                            </NavLink>
                          </div>
                        </div>
                      </li>
                      <li>
                        <NavLink
                          to="/three-page"
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "active header zoom"
                              : "header zoom"
                          }
                        >
                          THREE-FOLD PATH
                        </NavLink>
                      </li>
                      <li>
                        <a href="https://ndpfoundation.medium.com/" className="header zoom" target="_blank" rel="noreferrer">
                          Blog
                        </a>
                        {/* <NavLink to="/blog-post" className="ancher">
                          Blog{" "}
                        </NavLink> */}
                      </li>
                      <li>
                        <div className="dropdown">
                          <NavLink to="/i-am-book" className="header zoom">
                            “I AM” – Book{" "}
                          </NavLink>
                          <div className="dropdown-content">
                            <Link
                              offset="80"
                              target="_parent"
                              to="#whatisinbook"
                              className="ancher Value_targetHidden"
                            >
                              WHAT'S IN THE BOOK
                            </Link>
                            <Link
                              href="#whatisinbook"
                              className="ancher Value_targetHidden"
                              offset="80"
                            >
                              Why should you read this book?
                            </Link>
                            <Link href="" className="ancher Value_targetHidden">
                              LOOK INSIDE!
                            </Link>
                            <Link
                              href="/ashish/i-am-book.html#aboutauthor"
                              className="ancher Value_targetHidden"
                            >
                              About the Author
                            </Link>
                            <Link
                              href="/ashish/i-am-book.html#review"
                              className="ancher Value_targetHidden"
                            >
                              Reviews
                            </Link>
                            <NavLink to="/BuyNow" className="ancher">
                              Buy Now
                            </NavLink>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="dropdown">
                          <NavLink
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? " header zoom"
                                : "header zoom"
                            }
                          >
                            EVENTS
                          </NavLink>
                          <div className="dropdown-content">
                            <Link to="/live-events">Upcoming Events</Link>
                            {/* <Link
                              to="/recording"
                              className="ancher"
                            >
                              Recordings
                            </Link> */}
                            <NavLink to="/session-contact" className="ancher">
                              Session with Sri ashish
                            </NavLink>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown">
                          <NavLink
                            to="/video-items"
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "active header zoom"
                                : "header zoom"
                            }
                          >
                            GALLERY
                          </NavLink>
                          {/* <div className="dropdown-content">
                            <Link to="/video-items">Photo & Videos</Link>
                             <Link
                              to="/photos"
                              className="ancher"
                            >
                              Photos
                            </Link> 
                          </div> */}
                        </div>
                      </li>
                      <li>
                        <NavLink
                          to="/contact-us"
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "active header zoom"
                              : "header zoom"
                          }
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/signup-dashboard" className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active header zoom" : "header zoom"}>
                          Login
                        </NavLink>
                      </li> */}
                    </ul>
                  </nav>
                  <div className="mobile_elmenets">
                    <div className="donateIink d-flex ">
                      <div className="NavBlockIcon">
                        <Link to="/i-am-book">
                          <img
                            src={ButtonLogo}
                            className="headerlogo"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="NavBlockIcon donateIcon">
                        <Link
                          to="https://www.zeffy.com/en-US/donation-form/531ca771-879c-4969-90ac-e6dc287f0e61"
                          target="_blank"
                        >
                          <img
                            src={DonateImg}
                            className="headerlogo"
                            alt="img"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="donateIink desktopBlock d-flex">
                  <div className="NavBlockIcon">
                    <Link to="/i-am-book">
                      <img src={ButtonLogo} className="headerlogo" alt="img" />
                    </Link>
                  </div>
                  <div className="NavBlockIcon donateIcon">
                    <Link
                      to="https://www.zeffy.com/en-US/donation-form/531ca771-879c-4969-90ac-e6dc287f0e61"
                      target="_blank"
                    >
                      <img src={DonateImg} className="headerlogo" alt="img" />
                    </Link>
                  </div>
                </div>
                <div
                  className="hamburger-linesOuter right_toggle"
                  onClick={toggleMenu}
                >
                  <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}
