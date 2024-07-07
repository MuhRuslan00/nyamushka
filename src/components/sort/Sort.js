import React from 'react';
import './sort.css';
import {useSelector, useDispatch} from 'react-redux'
import {setSort} from './../../redux/slices/filterSlice';
export const list = [
  {name: 'порций(DESC)', sortProperty:'diskription'},
  {name: 'порций(ASC)', sortProperty:'-diskription'},
  {name: 'вес(DESC)', sortProperty:'weight'},
  {name: 'вес(ASC)', sortProperty:'-weight'},
  {name: 'с чем(DESC)', sortProperty:'subTitle'},
  {name: 'с чем(ASC)', sortProperty:'-subTitle'},
]

const Sort = () => {
const dispatch = useDispatch();
const sort = useSelector(state => state.filter.sort)

const sortRef = React.useRef(null);


 const [open, setOpen] = React.useState(false);
 
  
  // const sortName = list[sortType].name;
  
  const onClickListItem = (obj) => {
    dispatch(setSort(obj))
    setOpen(false);
  }
  // console.log(sortRef)
React.useEffect(() =>{
      if(!open) return;

      const handleClick = e => {
        if (!sortRef.current) return;
        if (!sortRef.current.contains(e.target)){
          setOpen(false);
          console.log('click outside')
        }
      }
  document.addEventListener('click', handleClick)
  return () => {
    document.removeEventListener('click', handleClick)
  }
 
  
}, [open, setOpen]);
 
  return (
    <>
   <div ref={sortRef} className='sorrt'>
    <span  onClick={()=> setOpen(!open)}className='sort__choose'>{sort.name}</span>
   {/* pop up открытие попап */}
   {open && (
      <ul className='pop__subt'>
   
    {list.map((obj, i) => (
      <li 
      key={i}
      onClick={()=> onClickListItem(obj)}
      className={sort.sortProperty === obj.sortProperty ? 'active__pop' : ''}>
        {obj.name}
      </li>
    ))
   }
   </ul>
  )
}
</div>
</>
  )
} 

 

export default Sort;