import React from 'react';

//imprt global style 
import GlobalStyle from './components/GlobalStyle';


//Import Pages 
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

//import from components
import Nav from './components/Nav';

//Router 
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
     </Switch>
    </div>
  );
}

export default App;

