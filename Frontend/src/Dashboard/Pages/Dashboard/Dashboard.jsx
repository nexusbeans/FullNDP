import React from "react";
import "./Dashboard.scss";
import DynamicImage from "../../../Components/DynamicImage";
import { Link } from "react-router-dom";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";

function Dashboard() {
  return (
    <div className="dashboarcontrol" id="dashboarcontrol">
      <Dashboardslidebar />
      <main>
        <div className="themebody-wrap">
          <div className="codex-breadcrumb">
            <div className="breadcrumb-contain">
              <div className="left-breadcrumb">
                <ul className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <h1>Dashboard</h1>
                    </a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="javascript:void(0);">Default</a>
                  </li>
                </ul>
              </div>
              <div className="right-breadcrumb">
                <ul>
                  <li>
                    <div className="bread-wrap">
                      <i className="fa fa-clock-o" />
                    </div>
                    <span className="liveTime" />
                  </li>
                  <li>
                    <div className="bread-wrap">
                      <i className="fa fa-calendar" />
                    </div>
                    <span className="getDate" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* breadcrumb end*/}
          {/* theme body start*/}
          <div className="theme-body common-dash" data-simplebar="">
            <div className="custom-container">
              <div className="row">
                <div className="col-xl-4 cdx-xl-50">
                  <div className="card welcome-card overflow-hidden">
                    <div className="card-header" />
                    <div className="card-body">
                      <div className="img-wrap">
                        <img
                          className="img-fluid"
                          src="../assets/images/avtar/1.jpg"
                          alt="image"
                        />
                      </div>
                      <h3>Welcome to dear user</h3>
                      <p className="mb-10">
                        Congratulations! Your account has been Setup and you are
                        ready to configure your dashboard now.Configuration only
                        take a couple of seconds.
                      </p>
                      <p>
                        If you have any query for Configuration so contact *****
                        !!!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 cdx-xl-50 cdxorder-xl-1">
                  <div className="card countri-tbl">
                    <div className="card-header">
                      <h4>viewed Countries</h4>
                      <div className="setting-card action-menu">
                        <div className="action-toggle">
                          <i
                            className="codeCopy"
                            data-feather="more-horizontal"
                          />
                        </div>
                        <ul className="action-dropdown">
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-o" />
                              weekly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-check-o" />
                              monthly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar" />
                              yearly
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table tblbody-p0">
                          <tbody>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="flag-wrap">
                                    <i className="flag-icon flag-icon-gbr" />
                                  </div>
                                  <div className="media-body">
                                    United Kingdom
                                  </div>
                                </div>
                              </td>
                              <td className="text-success">
                                48.00%
                                <i className="fa fa-angle-down ml-5" />
                              </td>
                              <td> Nove/22</td>
                              <td>
                                <h6>905k</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="flag-wrap">
                                    <i className="flag-icon flag-icon-umi" />
                                  </div>
                                  <div className="media-body">
                                    United states
                                  </div>
                                </div>
                              </td>
                              <td className="text-success">
                                30.7%
                                <i className="fa fa-angle-up ml-5" />
                              </td>
                              <td> Sep/15</td>
                              <td>
                                <h6>750k</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="flag-wrap">
                                    <i className="flag-icon flag-icon-egy" />
                                  </div>
                                  <div className="media-body">Egypt</div>
                                </div>
                              </td>
                              <td className="text-danger">
                                25.7%
                                <i className="fa fa-angle-down ml-5" />
                              </td>
                              <td>Jun/16</td>
                              <td>
                                <h6>598k</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="flag-wrap">
                                    <i className="flag-icon flag-icon-ind" />
                                  </div>
                                  <div className="media-body">India</div>
                                </div>
                              </td>
                              <td className="text-success">
                                35.00%
                                <i className="fa fa-angle-up ml-5" />
                              </td>
                              <td>Sep/17</td>
                              <td>
                                <h6>320k</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="flag-wrap">
                                    <i className="flag-icon flag-icon-mkd" />
                                  </div>
                                  <div className="media-body">Makedonia</div>
                                </div>
                              </td>
                              <td className="text-success">
                                48.00%
                                <i className="fa fa-angle-down ml-5" />
                              </td>
                              <td>Octo/20</td>
                              <td>
                                <h6>748k</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="flag-wrap">
                                    <i className="flag-icon flag-icon-niu" />
                                  </div>
                                  <div className="media-body">Niue</div>
                                </div>
                              </td>
                              <td className="text-danger">
                                28.07%
                                <i className="fa fa-angle-down ml-5" />
                              </td>
                              <td>Sep/18</td>
                              <td>
                                <h6>580k</h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="flag-wrap">
                                    <i className="flag-icon flag-icon-dnk" />
                                  </div>
                                  <div className="media-body">Denmark</div>
                                </div>
                              </td>
                              <td className="text-danger">
                                20.00%
                                <i className="fa fa-angle-down ml-5" />
                              </td>
                              <td> Dece/16</td>
                              <td>
                                <h6>777k</h6>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 cdx-xl-50">
                  <div className="card support-inboxtbl">
                    <div className="card-header">
                      <h4>Support Inbox</h4>
                      <div className="setting-card action-menu">
                        <div className="action-toggle">
                          <i
                            className="codeCopy"
                            data-feather="more-horizontal"
                          />
                        </div>
                        <ul className="action-dropdown">
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-o" />
                              weekly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-check-o" />
                              monthly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar" />
                              yearly
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/6.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <h6>Jordan Nt</h6>
                                    <p className="text-light">
                                      My item doesn’t shio to correct address
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-primary">
                                  10 hours ago
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/2.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <h6>Carolien Bloeme</h6>
                                    <p className="text-light">
                                      You Shipped Color, i need it to be
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <span className="badge badge-primary">
                                  8 hours ago
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/3.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <h6>Lisanne Viscaal</h6>
                                    <p className="text-light">
                                      Can you please refund back my mony
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <span className="badge badge-primary">
                                  6 hours ago
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/4.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <h6>Sun Jun</h6>
                                    <p className="text-light">
                                      Thank you very much for quick support!
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-primary">
                                  4 hours ago
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/5.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <h6>Tolos Joune</h6>
                                    <p className="text-light">
                                      My item doesn’t shio to correct address
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-primary">
                                  30 minute ago
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 cdx-xl-100">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card project-status">
                            <div className="card-header">
                              <h4>Expenses</h4>
                              <div className="setting-card action-menu">
                                <a
                                  className="action-toggle"
                                  href="javascript:void(0)"
                                >
                                  <i
                                    className="codeCopy"
                                    data-feather="more-horizontal"
                                  />
                                </a>
                                <ul className="action-dropdown">
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-o" />
                                      weekly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-check-o" />
                                      monthly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar" />
                                      yearly
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-body progressCounter">
                              <div className="media">
                                <div>
                                  <h2>
                                    <span className="count">3238</span>
                                  </h2>
                                </div>
                                <div className="media-body">
                                  {" "}
                                  <span className="badge badge-success">
                                    25.7%
                                    <i className="fa fa-angle-up" />
                                  </span>
                                </div>
                              </div>
                              <div className="progress progress-primary">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={58}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  {" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card project-status">
                            <div className="card-header">
                              <h4>New Users</h4>
                              <div className="setting-card action-menu">
                                <a
                                  className="action-toggle"
                                  href="javascript:void(0)"
                                >
                                  <i
                                    className="codeCopy"
                                    data-feather="more-horizontal"
                                  />
                                </a>
                                <ul className="action-dropdown">
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-o" />
                                      weekly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-check-o" />
                                      monthly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar" />
                                      yearly{" "}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-body progressCounter">
                              <div className="media">
                                <div>
                                  <h2>
                                    <span className="count">4850</span>
                                  </h2>
                                </div>
                                <div className="media-body">
                                  {" "}
                                  <span className="badge badge-secondary">
                                    25.7%
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </div>
                              </div>
                              <div className="progress progress-secondary">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={88}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  {" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card project-status">
                            <div className="card-header">
                              <h4>New Clients</h4>
                              <div className="setting-card action-menu">
                                <a
                                  className="action-toggle"
                                  href="javascript:void(0)"
                                >
                                  <i
                                    className="codeCopy"
                                    data-feather="more-horizontal"
                                  />
                                </a>
                                <ul className="action-dropdown">
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-o" />
                                      weekly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-check-o" />
                                      monthly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar" />
                                      yearly
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-body progressCounter">
                              <div className="media">
                                <div>
                                  <h2>
                                    <span className="count">4198</span>
                                  </h2>
                                </div>
                                <div className="media-body">
                                  <span className="badge badge-danger">
                                    20.5%
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </div>
                              </div>
                              <div className="progress progress-info">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={78}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card project-status">
                            <div className="card-header">
                              <h4>Employees</h4>
                              <div className="setting-card action-menu">
                                <a
                                  className="action-toggle"
                                  href="javascript:void(0)"
                                >
                                  <i
                                    className="codeCopy"
                                    data-feather="more-horizontal"
                                  />
                                </a>
                                <ul className="action-dropdown">
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-o" />
                                      weekly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar-check-o" />
                                      monthly
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <i className="fa fa-calendar" />
                                      yearly
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-body progressCounter">
                              <div className="media">
                                <div>
                                  <h2>
                                    <span className="count">1899</span>
                                  </h2>
                                </div>
                                <div className="media-body">
                                  <span className="badge badge-success">
                                    15.2%
                                    <i className="fa fa-angle-up" />
                                  </span>
                                </div>
                              </div>
                              <div className="progress progress-warning">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={29}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 cdx-xl-50">
                  <div className="card project-summarytbl">
                    <div className="card-header">
                      <h4>Project Detail</h4>
                      <div className="setting-card action-menu">
                        <div className="action-toggle">
                          <i
                            className="codeCopy"
                            data-feather="more-horizontal"
                          />
                        </div>
                        <ul className="action-dropdown">
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-o" />
                              weekly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-check-o" />
                              monthly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar" />
                              yearly
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Order</th>
                              <th>Project Name</th>
                              <th>Project Cost</th>
                              <th>Project Status</th>
                              <th>Payment</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Racing Game</td>
                              <td>$45,376</td>
                              <td>Completed</td>
                              <td>
                                <span className="badge badge-primary">
                                  Done
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Cytrust Dashboard</td>
                              <td>$40,258</td>
                              <td>In Progress</td>
                              <td>
                                <span className="badge badge-secondary">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Travel App</td>
                              <td>$32,256</td>
                              <td>Completed</td>
                              <td>
                                <span className="badge badge-primary">
                                  Done
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Reyalestet App</td>
                              <td>$25,058</td>
                              <td>In Progress</td>
                              <td>
                                <span className="badge badge-secondary">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Agriculture Website</td>
                              <td>$36,585</td>
                              <td>In Progress</td>
                              <td>
                                {" "}
                                <span className="badge badge-secondary">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>TRavel Website</td>
                              <td>$25,255</td>
                              <td>Completed</td>
                              <td>
                                {" "}
                                <span className="badge badge-primary">
                                  Done
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 cdx-xl-50">
                  <div className="card recent-ordertbl">
                    <div className="card-header">
                      <h4>Order detail</h4>
                      <div className="setting-card action-menu">
                        <div className="action-toggle">
                          <i
                            className="codeCopy"
                            data-feather="more-horizontal"
                          />
                        </div>
                        <ul className="action-dropdown">
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-o" />
                              weekly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar-check-o" />
                              monthly
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="fa fa-calendar" />
                              yearly
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Customer</th>
                              <th>Product</th>
                              <th>Amount</th>
                              <th>Vendor</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/6.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">Mark Wangar</div>
                                </div>
                              </td>
                              <td>
                                <a
                                  className="text-light"
                                  href="product-detail.html"
                                >
                                  {" "}
                                  Apple Airpod Pro
                                </a>
                              </td>
                              <td>$847.39</td>
                              <td>Palestine</td>
                              <td>
                                {" "}
                                <span className="badge badge-primary">
                                  Paid
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/2.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">
                                    Thomos Vactom
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a
                                  className="text-light"
                                  href="product-detail.html"
                                >
                                  Redmi Note 10s
                                </a>
                              </td>
                              <td>$470.34</td>
                              <td>Serbia</td>
                              <td>
                                {" "}
                                <span className="badge badge-secondary">
                                  Unpaid
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/3.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">Johan Deo</div>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <a
                                  className="text-light"
                                  href="product-detail.html"
                                >
                                  Razer kraken headset
                                </a>
                              </td>
                              <td>$394.39</td>
                              <td>Republic</td>
                              <td>
                                {" "}
                                <span className="badge badge-primary">
                                  Paid
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/4.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">Leena Odem</div>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <a
                                  className="text-light"
                                  href="product-detail.html"
                                >
                                  iphone 12 pro max
                                </a>
                              </td>
                              <td>$249.29</td>
                              <td>Greece</td>
                              <td>
                                {" "}
                                <span className="badge badge-primary">
                                  Paid
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media">
                                  <div className="img-wrap">
                                    <img
                                      className="img-fluid"
                                      src="../assets/images/avtar/5.jpg"
                                      alt="recent-product"
                                    />
                                  </div>
                                  <div className="media-body">Omini Rome</div>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <a
                                  className="text-light"
                                  href="product-detail.html"
                                >
                                  DJL Mavic Pro 2
                                </a>
                              </td>
                              <td>$147.70</td>
                              <td>Central</td>
                              <td>
                                {" "}
                                <span className="badge badge-secondary">
                                  Unpaid
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 cdx-xl-100 cdxorder-xl-1">
                  <div className="card dash-chat">
                    <div className="card-header">
                      <h4>live caht</h4>
                    </div>
                    <div className="card-body">
                      <div className="dash-chatbox">
                        <ul className="chating-list" data-simplebar="">
                          <li>
                            <div className="user-msgbox">
                              <div className="media">
                                <img
                                  className="img-fluid"
                                  src="../assets/images/avtar/1.jpg"
                                  alt="image"
                                />
                                <div className="media-body">
                                  <p>Lorem ipsum dolor sit amet</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="admin-msgbox">
                              <div className="media">
                                <div className="media-body">
                                  <p>Adipisicing elit, sed do eiusmod.</p>
                                </div>
                                <img
                                  className="img-fluid"
                                  src="../assets/images/avtar/2.jpg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="admin-msgbox">
                              <div className="media">
                                <div className="media-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod.
                                  </p>
                                </div>
                                <img
                                  className="img-fluid"
                                  src="../assets/images/avtar/2.jpg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-msgbox">
                              <div className="media">
                                <img
                                  className="img-fluid"
                                  src="../assets/images/avtar/1.jpg"
                                  alt="image"
                                />
                                <div className="media-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="admin-msgbox">
                              <div className="media">
                                <div className="media-body">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod
                                  </p>
                                </div>
                                <img
                                  className="img-fluid"
                                  src="../assets/images/avtar/2.jpg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="user-msgbox">
                              <div className="media">
                                <img
                                  className="img-fluid"
                                  src="../assets/images/avtar/1.jpg"
                                  alt="image"
                                />
                                <div className="media-body">
                                  <p>Lorem ipsum dolor sit amet</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="admin-msgbox">
                              <div className="media">
                                <div className="media-body">
                                  <p>Adipisicing elit, sed do eiusmod.</p>
                                </div>
                                <img
                                  className="img-fluid"
                                  src="../assets/images/avtar/2.jpg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="userchat-typebox d-flex">
                          <a className="btn btn-primary mr-10">
                            <i data-feather="smile" />
                          </a>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Type a message"
                            defaultValue=""
                            autoComplete="off"
                          />
                          <a className="btn btn-primary ml-10">
                            {" "}
                            <i data-feather="send"> </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* theme body end*/}
        </div>
      </main>
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;
