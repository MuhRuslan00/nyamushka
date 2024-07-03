import React from 'react';
import './nav.scss';

const Nav = ({categoryNav, onChangeCategory}) => {
  // console.log(categoryNav) 
  const navs = ['Все', '10', '40', '200']


  return (
      <div className='nav'>
        <ul className='nav__list'>
          {
           navs.map((categoryName, i) => (<li key={i} onClick={() => onChangeCategory(i)} className={categoryNav === i ? 'active' : ''}>{categoryName}</li>)) 
          }
        </ul>
      </div>
  );
}
 
export default Nav;
                
    
          