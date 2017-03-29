import React from 'react';
import Header from "./Header/Header.jsx";
import GenderSection from "./GenderSection/GenderSection.jsx";
import FirstSection from "./FirstSection/FirstSection.jsx";
import GridPictures from "./GridPictures/GriPictures.jsx";
import MiddleSection from "./MiddleSection/MiddleSection.jsx";




class App extends React.Component {
  render() {
    return (
     <div className="App">
       <Header />
       {/*<Carousel />*/}
       <FirstSection />
       <MiddleSection />
       <GridPictures />
       <GenderSection />


      </div>
    );
  }
}

export default App;
