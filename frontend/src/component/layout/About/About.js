import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/rohan-roy-chowdhury-884619187/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/da5htwyv5/image/upload/v1634854927/1600419298459_vjunv2.jpg"
              alt="Founder"
            />
            <Typography>Rohan Roy Chowdhury</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Linkedin
            </Button>
            <span>
              This is a project wesbite made by @rohan2309. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Other Accounts</Typography>
            <a
              href="https://github.com/Rohan2309"
              target="blank"
            >
              <GitHubIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/rohan._23_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
