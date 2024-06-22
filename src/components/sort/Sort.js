import React from 'react';
import './sort.css';
const Sort = ({sortType, onChangeSort}) => {
  const [open, setOpen] = React.useState(false);
  const list = [
    {name: 'порций(DESC)', sort:'diskription'},
    {name: 'порций(ASC)', sort:'-diskription'},
    {name: 'вес(DESC)', sort:'weight'},
    {name: 'вес(ASC)', sort:'-weight'},
    {name: 'с чем(DESC)', sort:'subTitle'},
    {name: 'с чем(ASC)', sort:'-subTitle'},
  ]
  
  // const sortName = list[sortType].name;
  
  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  }
  return (
    <>
   <div>
    <span onClick={()=> setOpen(!open)}className='sort__choose'>{sortType.name}</span>
   
   {open && (
      <ul className='pop__subt'>
   
    {list.map((obj, i) => (
      <li
      key={i}
      onClick={()=> onClickListItem(obj)}
      className={sortType.sort === obj.sort ? 'active__pop' : ''}>
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