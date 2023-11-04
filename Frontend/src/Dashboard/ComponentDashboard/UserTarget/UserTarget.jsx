import React, { useEffect, useState } from "react";
import { baseURL } from "../../../utils/constant";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../../Pages/Home/Home";

const UserTargetLogin = () => {
  const [userData, setUserData] = useState(null);
  const [admin, setAdmin] = useState(false);

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

          if (data.data.userType === "Admin") {
            setAdmin(true);
          }
          console.log(admin ,'admin data set')
          setUserData(data.data);

          if (data.data === "token expired") {
            alert("Expired login Session");
            window.localStorage.clear();
            window.location.href = "./login";
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

  return (
    <Dashboard adminData={admin} />
  
  ) 
};

export default UserTargetLogin;
