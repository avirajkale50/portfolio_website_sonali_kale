import React from 'react';

import {Header,Footer,About,Work,Testimonial,Skills, Awards} from './container';
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
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App;
