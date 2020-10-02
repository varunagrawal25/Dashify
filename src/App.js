import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Ranking_analytics from './components/Ranking_analytics';
import Login from './components/Login'
function App() {
  return (
    <div>
      {/* <Ranking_analytics/> */}
      <Login/>
      {/* <Support/> */}
      {/* <Router>
   <Navbar/>
             <Route exact path="/" component={Home} />
             <Route  path="/about us" component={Aboutus} />
             <Route  path="/pricing" component={Pricing} />
             <Route  path="/support" component={Support} />
             <Route  path="/blog" component={Blog} />
             <Route  path="/contact us" component={Contactus} />
             <Route  path="/how we work" component={How_we_work} />
             <Route  path="/listing management" component={Listing_management} />
             <Route  path="/our news" component={Our_news} />
             <Route  path="/our team" component={Our_team} />
             <Route  path="/scanner" component={Scanner} />
             <Route  path="/career" component={Career} />
             <Route  path="/review management" component={Review_management} />
    <Footer/>
    </Router> */}
    </div>
  );
}

export default App;
