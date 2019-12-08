import React, { Component } from 'react';
import CustomMenu from './commonComponents/Menu.js';
import Footer from './commonComponents/Footer.js';
import PageAbout from './PageAbout/PageAbout.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop.js';
class App extends Component {

  
 
  render() {
    return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
      <div id="outer-container">
      <CustomMenu/>
      <main id="page-wrap">
      <div className="container">
        	 <Switch>
	          <Route exact name="index" path="/" component={PageAbout} />
        	</Switch>
          <Footer>
    </Footer>
      </div>
      </main>
</div>
      </ScrollToTop>
   </Router>
    );
  }
}

export default App;
