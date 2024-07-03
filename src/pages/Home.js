import React from 'react';
import Card from '../components/Card';
// import {card} from '../helpers/Array';
import {useDispatch, useSelector} from 'react-redux';
import {setCategoryId} from '../redux/slices/filterSlice';


import backgroundImage from '../img/BackB.svg';
import Sceleton from '../components/Sceleton';
// import NotFound from './notfound/NotFound';
import Nav from '../components/navigation/Nav';
import Sort from '../components/sort/Sort';
import Portion from '../components/portion/Portion';
import Pagination from '../components/pagination/Pagination';


const Home = ({searchValue}) => {
  const dispatch = useDispatch();
  console.log(dispatch, 'App dispatch')

const categoryId = useSelector((state) => state.filter.categoryId);
console.log('redux state', categoryId)



const setCategoryNav = () => {};




  const[users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const[currentPage, setCurrentPage] = React.useState(1)

  const [sortType, setSortType] = React.useState({
    name: 'вес', 
     sort:'weight'

  });
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }
  

  React.useEffect(()=> {
    setIsLoading(true);

    const order = sortType.sort.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sort.replace('-','');
    const search = searchValue ? `&search=${searchValue}`: '';
    
    fetch(`https://665a0cf9de346625136ee5a1.mockapi.io/users?page=${currentPage}&limit=3&${categoryId > 0 ? `category=${categoryId}`: ''
    }&sortBy=${sortBy}&order=${order}${search}`, 
  ) 
  .then((res) => res.json())
  .then((arr) => {
    setUsers(arr);
    setIsLoading(false);
  });
  window.scrollTo(0, 0);
}, [categoryId, sortType, searchValue, currentPage]);
// console.log(categoryNav, sortType)

  const usersArr = users.map((obj)=> <Card
  key={obj.id} {...obj} backgroundImage={backgroundImage}
  />) 
    
  return (
    <>
    <div className='home__wrap'>


    <Nav categoryNav={categoryId} onChangeCategory={onChangeCategory}/>
    <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)}/>

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
      <Pagination onChangePage={number => setCurrentPage(number)}/>
      
    </>
      
  );
}
      
 
export default Home;