import React from "react";
import "./InfoBlog.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const InfoBlog = () => {
  return (
    <>
      <div className="TopArea">
        <div
          style={{
            display: "flex",
            padding: "5%",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "white"
          }}
          className="Top_Area_Responsive"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4vh"
            }}
            className="Top_Area_Text_Left_Responsive"
          >
            <div>Featured Project</div>
            <div
              style={{
                marginTop: "5vh",
                fontSize: "50px",
                width: "35vw",
                cursor: "pointer"
              }}
            >
              <span
                className="underLine"
                style={{
                  fontFamily: " 'Ubuntu', sans-serif",
                  fontWeight: "bolder"
                }}
              >
                Uber Design
              </span>{" "}
              <br />{" "}
              <span
                className="underLine1 Responsive_Head"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: "100"
                }}
              >
                Looking under the hood
              </span>
            </div>
            <div style={{ marginTop: "10vh" }} className="Responsive_Head">
                <a className="link-a" href="/list2">
                    <Button variant="contained" color="secondary">
                            More Projects
                    </Button>            
                </a>
            </div>
          </div>
          <div style={{ padding: "2%" }} data-aos="zoom-in-up">
            <video
                style={{width: '100%'}}
              className="Vid"
              src="https://mvremya.ru/upload/iblock/40c/40c0cfaa2b456777e5a9e809ab4491f0.jpg"
              poster="https://mvremya.ru/upload/iblock/40c/40c0cfaa2b456777e5a9e809ab4491f0.jpg"
            ></video>
          </div>
        </div>
        <div style={{}}>
          <Typography
            className="text-b"
            style={{
              width: "45vw",
              fontSize: "30px",
              margin: "auto",
              textAlign: "center",
              fontWeight: "lighter"
            }}
            variant="subtitle1"
            color="initial"
            
          >
            Ueno is a full-service agency, busy designing and building beautiful
            digital products, brands, and experiences.
            <br />
            <a className="link-a" href="/contact">
              <Button variant="outlined" color="secondary">
                Contact us
              </Button>           
            </a>
          </Typography>
        </div>
        <div className="vl">&nbsp;</div>
        <div className="vlt">
          {" "}
          <span style={{ fontSize: "30px" }}>All work, all play </span>
          <br />
          <span style={{ fontSize: "25px", fontWeight: "lighter" }}>
            {" "}
            Selected project
          </span>
        </div>
      </div>
    </>
  );
};

export default InfoBlog ;
