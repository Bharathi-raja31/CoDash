import React from 'react';
import { Helmet } from "react-helmet";

//Components
import Header from './components/Header';
import Footer from './components/Footer';

// SASS
import './assets/sass/Index.scss';

function App(props) {
  return (
    <div className="App">
      <Helmet title={` CoDash | Admin Dashboard Template`} />
      <div className="AppContent">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default App;
