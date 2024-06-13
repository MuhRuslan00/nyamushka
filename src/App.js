import {Routes, Route} from 'react-router-dom';
import React from 'react';
import background from './img/Pattern.png';
import Header from './pages/Header';
import './app.css';
import Home from './pages/Home';


function App() {
  

  return (
    <section style={{backgroundImage: `url(${background})`}} className="content">
      <div className="container">

      <Header/>
       <h1>Ты сегодня покормил кота?</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/' element={<NotFound/>} /> */}


        </Routes>
       
        </div>
    </section>
  );
}

            
      
        
export default App;
        

    
  

