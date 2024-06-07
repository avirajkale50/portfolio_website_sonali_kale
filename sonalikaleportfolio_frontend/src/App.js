import React from 'react';

import {Header,Footer,About,Work,Testimonial,Skills, Awards,Experience} from './container';
import {Navbar} from './components';
import "./App.scss";
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Awards/>
      <Skills/>
      <Experience/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App;
