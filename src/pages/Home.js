import React from 'react';
import Card from '../components/Card';
// import {card} from '../helpers/Array';


import backgroundImage from '../img/BackB.svg';
import Sceleton from '../components/Sceleton';
import NotFound from './notfound/NotFound';
import Nav from '../components/navigation/Nav';
import Sort from '../components/sort/Sort';
import Portion from '../components/portion/Portion';



const Home = () => {
  const[users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

   const[categoryNav, setCategoryNav] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'вес', 
     sort:'weight'

  });
  // console.log(categoryNav, sortType)

  React.useEffect(()=> {
    setIsLoading(true);
    fetch(`https://665a0cf9de346625136ee5a1.mockapi.io/users?${categoryNav > 0 ? `weight=${categoryNav}`: ''
    }&sortBy=${sortType.sort}&order=desc`, 
    ) 
    .then((res) => res.json())
    .then((arr) => {
      setUsers(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryNav, sortType]);
  // console.log(categoryNav, sortType)
    
  return (
    <>
    <div className='home__wrap'>


    <Nav categoryNav={categoryNav} onClickCategory={(i) => setCategoryNav(i)}/>
    <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)}/>

    </div>
    <NotFound/>
    <div className='cards__content'>
    { isLoading
    ? [...new Array(3)].map((_, index) =><Sceleton key={index}/>) : users.map((obj)=> <Card
    key={obj.id} {...obj} backgroundImage={backgroundImage}
    
    />)}

      
    </div>
    <div className='portion__container'>
      {users.map((obj)=> (
        <Portion
        sizes={obj.sizes}
        tipe={obj.tipe}
        />
      ))

      }
      </div> 
    </>
      
  );
}
      
 
export default Home;