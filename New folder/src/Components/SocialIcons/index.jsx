import React from "react";
import "./SocialIcons.scss";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaX,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <>
      <div className="social_iconElements">
        <ul className="icon_fab d-flex">
          
        <li>
            <Link
              to="https://x.com/ndp_iam?s=21&t=CR3iCQf61dV5tljbmnDqHQ"
              className="Icon_fab__link" target="_blank"
            >
              <FaX />
            </Link>{" "}
          </li>

          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=100095348732723"
              className="Icon_fab__link" target="_blank"
            >
              <FaFacebookF />
            </Link>{" "}
          </li>
          <li>
            <Link
              to="https://www.youtube.com/@OfficialNdpfoundation"
              className="Icon_fab__link" target="_blank"
            >
              <FaYoutube />
            </Link>{" "}
          </li>
          <li>
            <Link
              to="https://www.instagram.com/ndpfoundationofficial/"
              className="Icon_fab__link" target="_blank"
            >
              <FaInstagram />
            </Link>{" "}
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/company/97865333/admin/feed/posts/?feedType=following"
              className="Icon_fab__link" target="_blank"
            >
              <FaLinkedinIn />
            </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};
export default SocialIcons;
