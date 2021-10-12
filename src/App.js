
import React from "react";
import './App.css';
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Advantage from './components/advantage/advantage'
import BtnCumpara from './components/button/btnCumpara'
import Dimensiuni from './components/Dimensiuni/Dimensiuni'
import Tabsbtn from './components/tabsbtn/tabsbtn'
import Footer from './components/footer/footer'
import Gallery from './components/gallery/gallery'
import {BrowserRouter} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        
       <Header />
        <Banner/>
        <Advantage />
        <BtnCumpara />
        <Dimensiuni />
        <Tabsbtn />
        <Gallery />
        <Footer />

        
        
        
    </div>
    </BrowserRouter>
  );
}

export default App;
