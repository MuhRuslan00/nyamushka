import React from 'react';
import Card from '../components/Card';
// import {card} from '../helpers/Array';
import {useDispatch, useSelector} from 'react-redux';
import {setCategoryId, setCurrentPage} from '../redux/slices/filterSlice';

import axios from 'axios';


import backgroundImage from '../img/BackB.svg';
import Sceleton from '../components/Sceleton';
// import NotFound from './notfound/NotFound';
import Nav from '../components/navigation/Nav';
import Sort from '../components/sort/Sort';
import Portion from '../components/portion/Portion';
import Pagination from '../components/pagination/Pagination';


const Home = ({searchValue}) => {
  const dispatch = useDispatch();
  
const {categoryId, sort, currentPage} = useSelector((state) => state.filter);
// const sortType = sort.sortProperty;


// const setCategoryNav = () => {};

  const[users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // const[currentPage, setCurrentPage] = React.useState(1)


  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }
  

  React.useEffect(()=> {
    setIsLoading(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-','');
    const search = searchValue ? `&search=${searchValue}`: '';
 
  axios.get(`https://665a0cf9de346625136ee5a1.mockapi.io/users?page=${currentPage}&limit=3&${categoryId > 0 ? `category=${categoryId}`: ''}&sortBy=${sortBy}&order=${order}${search}`)
  .then((res) => {
    console.log(res)
    setUsers(res.data);
    setIsLoading(false);
    
  });

  window.scrollTo(0, 0);
}, [categoryId, sort.sortProperty, searchValue, currentPage]);
// console.log(categoryNav, sortType)

  const usersArr = users.map((obj)=> <Card
  key={obj.id} {...obj} backgroundImage={backgroundImage}
  />) 
    
  return (
    <>
    <div className='home__wrap'>


    <Nav categoryNav={categoryId} onChangeCategory={onChangeCategory}/>
    <Sort/>

    </div>
    
    <div className='cards__content'>
    { isLoading
    ? [...new Array(3)].map((_, index) =><Sceleton key={index}/>) : usersArr}

      
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
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
      
    </>
      
  );
}
      
 
export default Home;