import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import GlobalStyles from './GlobalStyles';


function App() {
  return (
    <React.Fragment>
      <Header title={"IP Address Tracker"}></Header>
      <div style={{ height: "180px" }}id="mapid"></div>
      <Footer></Footer>
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
