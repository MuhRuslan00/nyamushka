import qs from 'qs';
import Sort, { list } from '../components/sort/Sort';

import { useNavigate } from 'react-router-dom';
import React from 'react';
import Card from '../components/Card';
// import {card} from '../helpers/Array';
import {useDispatch, useSelector} from 'react-redux';
import {setCategoryId, setCurrentPage, setFilters} from '../redux/slices/filterSlice';

import axios from 'axios';


import backgroundImage from '../img/BackB.svg';
import Sceleton from '../components/Sceleton';
// import NotFound from './notfound/NotFound';
import Nav from '../components/navigation/Nav';
import Portion from '../components/portion/Portion';
import Pagination from '../components/pagination/Pagination';


const Home = ({searchValue}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  
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
  };

  const fetchPizzas = () => {
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
};
// после первого рендера при изменении параметров проверяй нужно ли вшивать ссылку в адресную строчку
React.useEffect(() => {
  if(isMounted.current){
    const queryString = qs.stringify({
  sortProperty: sort.sortProperty,
  categoryId,
  currentPage,
  })
   // console.log(queryString)
  navigate(`?${queryString}`)
}
isMounted.current = true;
}, [categoryId, sort.sortProperty, searchValue, currentPage]) 

// если был первый рендер, то проверяем URL-параметры и сохраняем в редуксе
  React.useEffect(()=> {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))

     const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      
      dispatch(
        setFilters({
          ...params,
          sort
        }),
      );
      isSearch.current = true;
    }
  }, []);

  
// если был первый ренднр, то запрашиваем пиццы
  React.useEffect(()=> {
    window.scrollTo(0, 0);

    if(!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
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