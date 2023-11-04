import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DynamicImage from "../../../Components/DynamicImage";
import { FaFile, FaGauge, FaImage } from "react-icons/fa6";
import { baseURL } from "../../../utils/constant";
import axios from "axios";

const Dashboardslidebar = () => {
  const [userData, setUserData] = useState(null);
  const [allDataArray, setAllData] = useState([]);



  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login-dashboard";
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${baseURL}/userData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data, "userData by User target login");
          setUserData(data.data);

          if (data.data === "token expired") {
            alert("Expired login Session");
            window.localStorage.clear();
            window.location.href = "./login-dashboard";
          }
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);



  useEffect(() => {
    // Fetch user data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get(`${baseURL}/getUserData`);
        setAllData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

  // console.log("arraty data",allDataArray)
  const [isMenuOpen, setMenuOpen] = useState([]);

  const handleMenuClick = (index) => {
    const updatedOpenItems = [...isMenuOpen];
    updatedOpenItems[index] = !updatedOpenItems[index];
    setMenuOpen(updatedOpenItems);
  };


  return (
    <div id="dashboarcontrol">
       <h1 className="test">{allDataArray.fname}</h1>
      <header className="codex-header">
        <div className="header-contian d-flex justify-content-between align-items-center">
          <div className="header-left d-flex align-items-center">
            <div className="sidebar-action navicon-wrap">
              <i data-feather="menu" />
             
            </div>
            <div className="search-bar">
              <div className="form-group mb-0">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue=""
                    placeholder="Search Here....."
                  />
                  <span className="input-group-text">
                    <i data-feather="search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right d-flex align-items-center justify-content-end">
            <ul className="nav-iconlist">
              <li>
                <div className="navicon-wrap action-dark">
                  <i className="fa fa-moon-o icon-dark" />
                  <i
                    className="fa fa-sun-o icon-light"
                    style={{ display: "none" }}
                  />
                </div>
              </li>
              <li>
                <div className="navicon-wrap">
                  <i data-feather="bell" />
                  <div className="noti-count">04</div>
                </div>
                <div className="hover-dropdown navnotification-drop">
                  <div className="drop-header">
                    <h5>
                      notification<span>05</span>
                    </h5>
                  </div>
                  <ul data-simplebar="">
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-primary">
                            <i className="fa fa-check-square-o" />
                          </div>
                          <div className="media-body">
                            <h6>order Cheked</h6>
                            <span className="text-light">1 hour ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-secondary">
                            <i className="fa fa-first-order" />
                          </div>
                          <div className="media-body">
                            <h6>order receved</h6>
                            <span className="text-light">1 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-success">
                            <i className="fa fa-money" />
                          </div>
                          <div className="media-body">
                            <h6>payment received</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-warning">
                            <i className="fa fa-truck" />
                          </div>
                          <div className="media-body">
                            <h6>order shipped</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-info">
                            <i className="fa fa-first-order" />
                          </div>
                          <div className="media-body">
                            <h6>order receved</h6>
                            <span className="text-light">1 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-success">
                            <i className="fa fa-money" />
                          </div>
                          <div className="media-body">
                            <h6>payment received</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-warning">
                            <i className="fa fa-truck" />
                          </div>
                          <div className="media-body">
                            <h6>order shipped</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-info">
                            <i className="fa fa-first-order" />
                          </div>
                          <div className="media-body">
                            <h6>order receved</h6>
                            <span className="text-light">1 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="drop-footer">
                    <a href="email-inbox.html">See All Notification</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="navicon-wrap">
                  <i data-feather="shopping-cart" />
                  <div className="noti-count">07</div>
                </div>
                <div className="hover-dropdown navshop-drop">
                  <div className="drop-header">
                    <h5>
                      Shopping<span>7</span>
                    </h5>
                  </div>
                  <ul data-simplebar="">
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>teddy bear</h6>
                            <span className="text-light">$250</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>iphone</h6>
                            <span className="text-light">$140</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>Apple Airpod</h6>
                            <span className="text-light">$310</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>Motors</h6>
                            <span className="text-light">$510</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>iphone</h6>
                            <span className="text-light">$140</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="drop-footer">
                    <a href="checkout.html">Checkout All</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="navicon-wrap btn-windowfull">
                  <i data-feather="maximize" />
                </div>
              </li>
              <li className="nav-profile">
                <div className="media">
                  <div className="user-icon">
                    <img
                      className="img-fluid rounded-50"
                      src="../assets/images/avtar/3.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="media-body">
                    <h6>Thomas Vactom</h6>
                    <span className="text-light">Web designer</span>
                  </div>
                </div>
                <div className="hover-dropdown navprofile-drop">
                  <ul>
                    <li>
                      <a href="profile.html">
                        <i className="ti-user" />
                        profile
                      </a>
                    </li>
                    <li>
                      <a href="email-inbox.html">
                        <i className="ti-email" />
                        inbox
                      </a>
                    </li>
                    <li>
                      <a href="user-edit.html">
                        <i className="ti-settings" />
                        setting
                      </a>
                    </li>
                    <li>
                      <Link onClick={logOut}>
                        <i className="fa fa-sign-out" />
                        log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <aside className="codex-sidebar">
        <div className="logo-gridwrap">
          <Link className="codexbrand-logo" to="/dashboard">
            <DynamicImage imageName="logo.png" />
          </Link>
          <div className="sidebar-action">
            <i data-feather="menu" />
          </div>
        </div>
        <div className="icon-logo">
          <a href="index.html">
            <img
              className="img-fluid"
              src="../assets/images/logo/icon-logo.png"
              alt="theeme-logo"
            />
          </a>
        </div>
        <div className="codex-menuwrapper">
          <ul className="codex-menu custom-scroll" data-simplebar="">
            <li className="cdxmenu-title">
              <h5>Dashboards</h5>
            </li>
            <li className="menu-item">
              <Link to="/dashboard">
                <div className="icon-item">
                 <FaGauge/>
                </div>
                <span>Dashboards Area</span>
              </Link>
            </li>
            <li className="cdxmenu-title">
              <h5>pages</h5>
            </li>
            <li className="menu-item">
              <Link onClick={() => handleMenuClick(1)}>
                <div className="icon-item">
                <FaFile/>
                </div>
                <span>blog</span>
                <i className="fa fa-angle-down" />
              </Link>
              <ul className={`submenu-list ${isMenuOpen[1] ? 'd-block' : ''}`}>
                <li>
                  <Link to="/blogposter">blog list</Link>
                </li>
                <li>
                  <Link to="/blogposter-add">blog-add</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link onClick={() => handleMenuClick(3)}>
                <div className="icon-item">
                  <FaImage/>
                </div>
                <span>Front Banner</span>
                <i className="fa fa-angle-down" />
              </Link>
              <ul className={`submenu-list ${isMenuOpen[3] ? 'd-block' : ''}`}>
                <li>
                  <Link to="/dashboard-banner">Banner list</Link>
                </li>
                <li>
                  <Link to="/dashboard-banner-add">Banner Add</Link>
                </li>
              </ul>
            </li>
            <li className="cdxmenu-title">
              <h5>application</h5>
            </li>
            <li className="menu-item">
              <a href="calendar.html">
                <div className="icon-item">
                  <i data-feather="calendar" />
                </div>
                <span>calendar</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="chat.html">
                <div className="icon-item">
                  <i data-feather="message-square" />
                </div>
                <span>chat</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="todo.html">
                <div className="icon-item">
                  <i data-feather="clock" />
                </div>
                <span>todo</span>
              </a>
            </li>
            <li className="menu-item">
              <Link href="javascript:void(0);" onClick={() => handleMenuClick(0)}>
                <div className="icon-item">
                  <i data-feather="mail" />
                </div>
                <span>email</span>
                <i className="fa fa-angle-down" />
              </Link>
              <ul className={`submenu-list ${isMenuOpen[0] ? 'd-block' : ''}`}>
                <li>
                  <a href="email-inbox.html">email inbox</a>
                </li>
                <li>
                  <a href="email-read.html">email read</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  {" "}
                  <i data-feather="user" />
                </div>
                <span>Users</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="profile.html">profile</a>
                </li>
                <li>
                  <a href="user-list.html">user list</a>
                </li>
                <li>
                  <a href="user-edit.html">user edit</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="shopping-bag" />
                </div>
                <span>ecommerce</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="product.html">product</a>
                </li>
                <li>
                  <a href="product-detail.html">product detail</a>
                </li>
                <li>
                  <a href="add-product.html">add product</a>
                </li>
                <li>
                  <a href="product-list.html">product list</a>
                </li>
                <li>
                  <a href="order-history.html">order history</a>
                </li>
                <li>
                  <a href="cart.html">cart</a>
                </li>
                <li>
                  <a href="wishlist.html">wishlist</a>
                </li>
                <li>
                  <a href="checkout.html">checkout</a>
                </li>
                <li>
                  <a href="pricing.html">pricing</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="invoice.html">
                <div className="icon-item">
                  <i data-feather="file-minus" />
                </div>
                <span>invoice</span>
              </a>
            </li>


            <li className="menu-item">
              <a href="error-page.html">
                <div className="icon-item">
                  <i data-feather="alert-triangle" />
                </div>
                <span>error 404</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="coming-soon.html">
                <div className="icon-item">
                  <i data-feather="watch" />
                </div>
                <span>coming soon</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="pie-chart" />
                </div>
                <span>Charts</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="chart-apex.html">apex chart</a>
                </li>
                <li className="menu-item">
                  <a href="chart-echarts.html">echarts</a>
                </li>
                <li className="menu-item">
                  <a href="chart-morris.html">morris charts</a>
                </li>
                <li className="menu-item">
                  <a href="chart-chartsjs.html">charts js</a>
                </li>
                <li className="menu-item">
                  <a href="chart-sparkline.html">sparkline charts</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="contacts.html">
                <div className="icon-item">
                  <i data-feather="phone-call" />
                </div>
                <span>contacts</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="gallery.html">
                <div className="icon-item">
                  <i data-feather="image" />
                </div>
                <span>gallery</span>
              </a>
            </li>
           

          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboardslidebar;
