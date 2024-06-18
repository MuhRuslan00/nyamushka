import React from 'react';
import Card from '../components/Card';
// import {card} from '../helpers/Array';


import backgroundImage from '../img/BackB.svg';
import Sceleton from '../components/Sceleton';
import NotFound from './notfound/NotFound';
import Nav from '../components/navigation/Nav';
import Sort from '../components/sort/Sort';



const Home = () => {
  const[users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // const[categoryNav, setCategoryNav] = React.useState(0);
  // const [sortType, setSortType] = React.useState(0);
  
  React.useEffect(()=> {
    
    fetch("https://665a0cf9de346625136ee5a1.mockapi.io/users")
    .then((res) => res.json())
    .then((arr) => {
      setUsers(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <>
    <div className='home__wrap'>
    <Nav />
    <Sort/>

    </div>
    <NotFound/>
    <div className='cards__content'>
    { isLoading
     ? [...new Array(3)].map((_, index) =><Sceleton key={index}/>) : users.map((obj)=> <Card
      key={obj.id} 
      title={obj.title}
      subTitle={obj.subTitle}
      diskription={obj.diskription}
      backgroundImage={backgroundImage}
      weight={obj.weight}
      />)}

      
    </div> 
      
    </>
  );
}
 
export default Home;