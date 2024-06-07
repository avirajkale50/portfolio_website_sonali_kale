import React from 'react';

import {Header,Footer,About,Work,Testimonial,Skills, Awards,Projects,Experience} from './container';

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
      <Projects/>
      <Skills/>
      <Experience/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App;
