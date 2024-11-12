import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../../assets/lottie/email";
import DisplayLottie from "../../../components/displayLottie/DisplayLottie";
// import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  // const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={"subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={"contact-text-div"
              }
            >
              {contactInfo.linkedin && (
                <>
                  <a
                    className="contact-detail"
                    href={ contactInfo.linkedin}
                  >
                    {contactInfo.linkedin}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {
              <img
                alt="Man working"
                src={require("../../../assets/images/sameer.jpg")}
              ></img>
            }
          </div>
        </div>
      </div>
    </Fade>
  );
}
