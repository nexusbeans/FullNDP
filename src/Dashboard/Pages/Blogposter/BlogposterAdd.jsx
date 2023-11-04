import React, { useState } from "react";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../utils/constant";

function BlogposterAdd() {
  const [BlogTitle, BlogTitleset] = useState("");
  const [Blogdescription, Blogdescriptionset] = useState("");
  const [BlogDate, BlogDateset] = useState("");
  const [Blogername, Blogernameset] = useState("");
  const [Blogimage, Blogimageset] = useState("");
  const [Blogbuttonurl, Blogbuttonurlset] = useState("");

  const navigate = useNavigate();

  const handlesubmitblog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/saveUserData`, {
        BlogTitle,
        Blogdescription,
        BlogDate,
        Blogername,
        Blogbuttonurl,
        Blogimage,
      });
      console.log(response.data);
  
      // Display an alert for data save success
      alert("Data saved successfully");
  
      // Redirect to the new location

      navigate("/blogposter");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };
  

  // function covertToBase64(e) {
  //   console.log(e);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result); //base64encoded string
  //     Blogimageset(reader.result);
  //   };
  //   reader.onerror = (error) => {
  //     console.log("Error: ", error);
  //   };
  // }

  function covertToBase64(e) {
    var file = e.target.files[0];

    // Check if the file size is within the limit (200KB or 200,000 bytes)
    if (file.size > 200000) {
      alert("File size exceeds the limit (200KB).");
      window.location.reload(true);
      return;
    }

    console.log(file);

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log(reader.result);
      Blogimageset(reader.result);
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  return (
    <>
      <Dashboardslidebar />
      <main className="addpost" id="dashboarcontrol">
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
                    <Link>ecommerce</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <Link>add product</Link>
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
          {/* breadcrumb end*/}
          {/* theme body start*/}
          <div className="theme-body cdxshopping-cart">
            <div className="custom-container">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={handlesubmitblog}>
                    <div className="card">
                      <div className="card-body">
                        <div className="info-group">
                          <div className="form-group">
                            <label className="form-label">image upload</label>
                            <input
                              className="form-control"
                              accept="image/*"
                              type="file"
                              onChange={covertToBase64}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">
                              Blog Title Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Your Blog Name"
                              onChange={(e) => BlogTitleset(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Bloger name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Your Blog Name"
                              onChange={(e) => Blogernameset(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Bloger Date</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Bloger Date"
                              onChange={(e) => BlogDateset(e.target.value)}
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label className="form-label">
                              Blog description
                            </label>
                            <textarea
                              className="form-control"
                              placeholder="Enter Your Comment"
                              defaultValue={""}
                              onChange={(e) =>
                                Blogdescriptionset(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="group-button text-end">
                        <button
                          className="btn btn-success"
                          type="submit"
                          onSubmit={handlesubmitblog}
                        >
                          Add
                        </button>
                        <button
                          className="btn btn-danger ml-15"
                          onSubmit={handlesubmitblog}
                        >
                          cancle
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <DashboardFooter />
    </>
  );
}

export default BlogposterAdd;
