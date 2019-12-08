import React from "react";
import './Footer.css';

const footerStyle = {
  backgroundColor: "white",
  fontSize: "15px",
  color: "black",
  borderTop: "1px solid #0a07c2",
  textAlign: "center",
  padding: "15px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer() {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}> <div>
                <div className="row"> 
            <div className="contact col-3">
              <a href="mailto:aimen.louafi@shift-technology.com" target="_blank"><span className="contactIcon text-center"><i className="fas fa-envelope"/></span>
              </a>
            </div>
            <div className="contact col-3">
              <a href="https://github.com/15louafi" target="_blank"><span className="contactIcon"><i className="fab fa-github"/></span>
              </a>
            </div>
             <div className="contact col-3">
              <a href="https://www.linkedin.com/in/aïmen-louafi-164868116/" target="_blank"><span className="contactIcon text-center"><i className="fab fa-linkedin"/></span>
              </a>
            </div>
            <div className="contact col-3 body greyText">
              &#9400; Aimen Louafi - Powered by React
            </div>
          </div>
    </div></div>
    </div>
  );
}


export default Footer;


