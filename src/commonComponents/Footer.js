import React from "react";
import './Footer.css';

const footerStyle = {
  backgroundColor: "white",
  fontSize: "15px",
  color: "black",
  textAlign: "center",
  left: "0",
  bottom: "0",
  width: "100%"
};


function Footer() {
  return (
    <div>
      <div style={footerStyle}> <div>
                <div className="row"> 
            <div className="contact col-3">
              <a href="mailto:aimen.louafi@shift-technology.com" target="_blank"><span className="contactIcon text-center"><i className="fas fa-envelope"/><span className="contactText body">Email</span></span>
              </a>
            </div>
            <div className="contact col-3">
              <a href="https://github.com/15louafi" target="_blank"><span className="contactIcon"><i className="fab fa-github"/><span className="contactText body">Github</span></span>
              </a>
            </div>
             <div className="contact col-3">
              <a href="https://www.linkedin.com/in/aïmen-louafi-164868116/" target="_blank"><span className="contactIcon text-center"><i className="fab fa-linkedin"/><span className="contactText body">LinkedIn</span></span>
              </a>
            </div>
            <div className="contact col-3 body copyright">
              &#9400; Aimen Louafi - Powered by React
            </div>
          </div>
    </div></div>
    </div>
  );
}


export default Footer;


