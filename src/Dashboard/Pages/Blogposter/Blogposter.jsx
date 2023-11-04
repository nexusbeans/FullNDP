import React, { useEffect, useState } from "react";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";
import axios  from "axios";
import "./Blogposter.scss"
import { baseURL } from "../../../utils/constant";

function Blogposter() {

  const [allDataArray, setAllData] = useState([]);

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


  return (
    <>
      <Dashboardslidebar />
      <main className="blogposterMain" id="dashboarcontrol">
        <div className="themebody-wrap">
          <div className="codex-breadcrumb">
          </div>
          <div className="theme-body">
            <div className="custom-container">
              <div className="row">
                {allDataArray && allDataArray.map((post, index) => (
                  <div className="col-xl-4 col-sm-6 cdx-xl-50" key={index._id}>
                    <div className="card blog-wrapper">
                      <div className="imgwrapper">
                        <img
                          className="img-fluid"
                          src={post.Blogimage} 
                          alt={post.BlogTitle} 
                        />
                        <a className="hover-link" href="blog-detail.html">
                          <i data-feather="link" />
                        </a>
                      </div>
                      <div className="detailwrapper">
                        <a href="blog-detail.html">
                          <h4>{post.BlogTitle}</h4>
                        </a>
           
                        <ul className="blogsoc-list">
                          <li>
                            <a>
                              <i data-feather="user" />
                              {post.Blogername}
                            </a>
                          </li>
                          <li>
                            <a >
                              <i data-feather="message-circle" />
                              comment
                            </a>
                          </li>
                          <li>
                            <a>
                              <i data-feather="thumbs-up" />
                              like
                            </a>
                          </li>
                        </ul>
                        <p>{post.Blogdescription}</p> 
                        <div className="blog-footer">
                          <a className="btn btn-primary" href="blog-detail.html">
                            read more
                          </a>
                          <div className="date-info">
                            <i className="fa fa-calendar" />
                            <span>{post.date}</span> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* theme body end*/}
        </div>
      </main>
      <DashboardFooter />
    </>
  );
}

export default Blogposter;
