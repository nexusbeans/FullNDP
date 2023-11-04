import React, { useEffect, useState } from "react";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";

function Addbanner() {
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);

  function covertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encoded string
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }
  useEffect(() => {
    getImage();
  }, []);

  function uploadImage() {
    fetch("http://localhost:5000/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        base64: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  function getImage() {
    fetch("http://localhost:5000/get-image", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllImage(data.data);
      });
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
                    <a href="javascript:void(0);">form</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="javascript:void(0);">Input Element</a>
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

          <div className="theme-body codex-calendar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>Add Banner</h4>
                    </div>
                    <div className="card-body">
                      <form >
                        <div className="form-group">
                          <label className="form-label">Banner Name</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Upload Banner</label>
                          <div className="auth-wrapper">
                            <div
                              className="auth-inner"
                              style={{ width: "auto" }}
                            >
                              Let's Upload Image
                              <input
                                accept="image/*"
                                type="file"
                                onChange={covertToBase64}
                              />
                              {image == "" || image == null ? (
                                ""
                              ) : (
                                <img width={100} height={100} src={image} />
                              )}
                              {allImage.map((data) => {
                                return (
                                  <img
                                    width={100}
                                    height={100}
                                    src={data.image}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">url</label>
                          <input
                            className="form-control"
                            type="url"
                            defaultValue="https://example.com/"
                            placeholder="https://example.com/"
                          />
                        </div>
                        <button onClick={uploadImage} class="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
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

export default Addbanner;
