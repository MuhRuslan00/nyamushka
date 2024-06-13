import React from 'react';
import './sort.css';
const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const list = ['с фуагра', 'с рыбой', 'с курой']
  const [selected, setSelected] = React.useState(0);
  const sortName = list[selected];
  
  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(false);
  }
  return (
    <>
    <span onClick={()=> setOpen(!open)}className='sort__choose'>{sortName}</span>
   <div>
   
   {open && (
      <ul className='pop__subt'>
   
    {list.map((name, i) => (
      <li
      key={i}
      onClick={()=> onClickListItem(i)}
      className={selected === i ? 'active__pop' : ''}>
        {name}
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