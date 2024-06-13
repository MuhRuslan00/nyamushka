import React from 'react';
import Card from '../components/Card';
// import {card} from '../helpers/Array';

import backgroundImage from '../img/BackB.svg';



const Home = () => {
  const[users, setUsers] = React.useState([]);
  fetch("https://665a0cf9de346625136ee5a1.mockapi.io/users")
  .then((res) => {
    return res.json();
    
    })
    .then((arr) => setUsers(arr));
    console.log(users);
  return (
    <>
  
    <div className='cards__content'>
    {
      users.map((obj) => (<Card 
      key={obj.id} 
      title={obj.title}
      subTitle={obj.subTitle}
      diskription={obj.diskription}
      backgroundImage={backgroundImage}
      weight={obj.weight}
      />))}
      
    </div> 
    </>
  );
}
 
export default Home;