import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';
function MyFunction() {
  console.log(__dirname);
}

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <MyFunction/>
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);
export default App;