import {Routes, Route} from 'react-router-dom';
import React from 'react';
import background from './img/Pattern.png';
import Header from './pages/Header';
import './app.css';
import Home from './pages/Home';
import Bascket from './pages/bascket/Bascket';
import NotFound from './pages/notfound/NotFound';


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue, 'inputchange');
  

  return (
   
    <section style={{backgroundImage: `url(${background})`}} className="content">
      <div className="container">

      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
       <h1>Ты сегодня покормил кота?</h1>
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue}/>} />
        <Route path='/bascket' element={<Bascket/>} />
        <Route path='/notFound' element={<NotFound/>} />


        </Routes>
       
        </div>
    </section>
    
  );
}

            
      
        
export default App;
        

    
  

