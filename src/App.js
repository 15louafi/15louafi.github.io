import React, { Component } from 'react';
import CustomMenu from './commonComponents/Menu.js';
import Footer from './commonComponents/Footer.js';
import PageAbout from './PageAbout/PageAbout.js';
import MainPage from './MainPage/MainPage.js';
import { HashRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop.js';
class App extends Component {

  
 
  render() {
    return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
      <div id="outer-container">
      <CustomMenu/>
      <main id="page-wrap">
      <BrowserRouter>
      <div className="container">
        	 <Switch>
	          <Route name="index" exact path="/" component={MainPage} />
            <Route name="about" exact path="/about" component={PageAbout} />
        	</Switch>
          <Footer>
    </Footer>
      </div>
      </BrowserRouter>
      </main>
</div>
      </ScrollToTop>
   </Router>
    );
  }
}

export default App;
