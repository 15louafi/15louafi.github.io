//Ismael Rodriguez, ismaro.394 at gmail dot com
//About page component
import React, { Component } from 'react';
import './PageAbout.css';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);

class PageAbout extends Component {
  render() {
    return (
      <div>
        <div className="personalInfoBox">

          <div className="wrapper d-none d-sm-block">
            <div className="title">
              <div id="avatarDiv">
                <img className="avatarImg" src={process.env.PUBLIC_URL + '/images/DSC01234.JPG'}></img>
              </div>
              <div id="textDiv">
               <h1 className="text-center"><div className="body">Aïmen Louafi</div></h1>
               <br></br>
               <br></br><br></br>
                <p className="lead text-center"><div className="body">Data Scientist</div></p>
              </div>
            </div>
            <br></br><br></br>
          </div>
          <ColoredLine color="#0a07c2" />
          <p className="my-4">
          <div className="body">Hi! I'm currently a Data Scientist working at <a target="_blank" href="https://shift-technology.com">Shift Technology</a>.
          </div>
          <br></br>
          <div className="body">I'm a recent graduate from Mines ParisTech, a top french Grande Ecole. I also studied at the University of Tokyo (Todai). I mostly focused my studies on computer science, mathematics and machine learning.
          </div>
          <br></br>
          <div className="body">I worked as a researcher at The University of Tokyo, in the field of speech recognition. I then decided to intern at Amazon as a Data Scientist in London, in the Supply Chain team. Now, at Shift Technology, I'm building a chatbot for claims automation, and my job revolves around working on text interpretation, backend development, document analysis and much more!
          </div>
          <br></br>
          <div className="body">I'm mostly familiar with Python, C#, Java but I also work from time to time using Scala or C. I'm also familiar with SQL, Spark and Hadoop for big data processing. Always looking forward to learning new technologies!
          </div>
          <br></br>
          <div className="body">This website is still in progress (I'm using it as means to learn React <span role="img" aria-label="wink">😉</span>), but if you're interested in my profile, you can get in touch with me using one of the links down below!
          </div>
           </p>
          <hr/>
        </div>
      </div>
    );
  }
}

export default PageAbout;
