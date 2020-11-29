import React from 'react';
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      IP Address Tracker
  
      Search for any IP address or domain
    
      IP Address
      Location
      Timezone
        UTC 
         {/* add offset value dynamically using the API  */}
      ISP
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
