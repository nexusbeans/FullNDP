import React from "react";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";
import { Link } from "react-router-dom";
import { FaBook, FaPen, FaTrash } from "react-icons/fa6";

function DashboardBanner() {
  return (
    <div className="dashboardBanner" id="dashboarcontrol">
      <Dashboardslidebar />
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
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">ecommerce</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="javascript:void(0);">product list</a>
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
                  <span className="getDate"> </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="theme-body myCustomScrollbar cdxshopping-cart"
          data-mcs-theme="minimal-dark"
        >
          <div className="custom-container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table productlist-tbl display dataTable cell-border"
                        id="basicdata-tbl"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th>Banner Image</th>
                            <th>Banner Link </th>
                            <th>Banner Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="product-imgwrap">
                                <img
                                  className="img-fluid"
                                  src="../assets/images/pages/product/1.jpg"
                                  alt=""
                                />
                              </div>
                            </td>
                            <td>
                              <a
                                className="text-default"
                                href="product-detail.html"
                              >
                                cheks ewsShirt
                              </a>
                            </td>

                            <td>
                              <span className="badge badge-success">
                                Online
                              </span>
                            </td>
                            <td>
                              <div className="cart-action d-flex gap-3 justify-content-center">
                                <Link
                                  className="delete text-success"
                                  to=""
                                >
                               <FaPen/>
                              
                                </Link>
                                <Link
                                  className="delete text-danger"
                                  to="/dashboard-banner-edit"
                                >
                                  {" "}
                                 <FaTrash/>
                                </Link>
                              </div>
                            </td>
                          </tr>
                   
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}

export default DashboardBanner;
