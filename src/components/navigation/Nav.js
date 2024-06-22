import React from 'react';
import './nav.scss';

const Nav = ({categoryNav, onClickCategory}) => {
  // console.log(categoryNav) 
  const navs = ['Все', 'с фуагра', 'с рыбой', 'с курой']


  return (
      <div className='nav'>
        <ul className='nav__list'>
          {
           navs.map((categoryName, i) => (<li key={i} onClick={() => onClickCategory(i)} className={categoryNav === i ? 'active' : ''}>{categoryName}</li>)) 
          }
        </ul>
      </div>
  );
}
 
export default Nav;
                
    
          