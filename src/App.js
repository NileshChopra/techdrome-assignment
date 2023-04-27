import './App.css';
import Filters from './filterElement/Filters';
import Footer from './footerElement/Footer';
import Header from './headerElement/Header';
import Missions from './missionsElement/Missions';
import React, { useState } from 'react';
function App() {
  const [params, setParams] = useState({})

  return (
    <>
      <Header />
      <div className='mainContainer'>
        <div className='filters' >
          <Filters params={params} setParams={setParams} />
        </div>
        <div className='missions'>
          <Missions params={params} />
        </div>
      </div >
      <Footer />
    </>
  );
}

export default App;
