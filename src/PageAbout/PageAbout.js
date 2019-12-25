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

          <div className="d-xs-none d-sm-none"> {/**This is for little screens */}
          
                <img className="avatarImgSmall"  src={process.env.PUBLIC_URL + '/images/DSC01234.JPG'}></img>
              <div id="textDiv">
               <h2 className="text-center">Louafi Aimen</h2>
                <p className="lead text-center">Data Scientist</p>
              </div>
  
          </div>

          <ColoredLine color="#0a07c2" />
          <p className="my-4">
          <div className="body">Hello! I'm a french Data Scientist / Machine Learning Engineer and Mines ParisTech graduate living in Paris. I've been working at <a target="_blank" href="https://shift-technology.com">Shift Technology</a> for almost 2 years.
          </div>
          <br></br>
          <div className="body">I'm building a chatbot for claims automation, and my job revolves around working on text interpretation (from simple keyword matching to sequence labeling models or NLP classification models), putting the models in production, backend development, document analysis, monitoring the production and much more!
          </div>
          <br></br>
          <div className="body">Prior to that, I worked as a Data Scientist for the Supply Chain team at Amazon in London. I was in charge of a project to reduce the time it takes from the moment where Amazon orders a product from its vendor to the moment it is available to buy on the Amazon marketplace. I was in charge of building the data extraction queries, the forecasts and analyzing the data in order to find the bottlenecks and possible ways of improving Amazon's processes.
          </div>
          <br></br>
          <div className="body">I also worked as a researcher at The University of Tokyo, in the field of speech recognition. I built from scratch an isolated word recognition software based on a novel technique revolving around extracting an invariant structural representation of speech, which does require very few training data and is based on the way humans learn how to understand speech. I then improved the accuracy of this technique through various data analysis techniques and geometrical properties exploitation.
          </div>
          <br></br>
          <div className="body">I'm mostly familiar with Python, C#, Java but I also work from time to time using Scala or C. I'm also familiar with SQL, Spark and Hadoop for big data processing. I'd love to expand my knowledge and learn new languages.
          </div>
          <br></br>
          <div className="body">If I'm not coding, I'm usually studying Japanese (currently holding a N2 level at the Japanese Language Proficiency Test), watching movies (fond of Asian cinema at the moment), watching anime, listening to music or reading novels.
          </div>
          <br></br>
          <div className="body">I can speak french and english fluently, I have an intermediate level in japanese and in spanish as well.
          </div>
          <br></br>
          <div className="body">If my profile sparks your interest, you can get in touch with me using one of the links down below!
          </div>
           </p>
        </div>
    );
  }
}

export default PageAbout;
