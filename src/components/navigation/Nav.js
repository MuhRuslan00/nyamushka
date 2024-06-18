import React from 'react';
import './nav.scss';

const Nav = () => {

  const[activeNav, setActiveNav] = React.useState(0);

  const navs = ['Все', 'с фуагра', 'с рыбой', 'с курой']

  const onClickCategory = (index) => {
    setActiveNav(index);
  };
  console.log(activeNav);

  return (
      <div className='nav'>
        <ul className='nav__list'>
          {
           navs.map((value, i) => (<li key={i} onClick={() => onClickCategory(i)} className={activeNav === i ? 'active' : ''}>{value}</li>)) 
          }
        </ul>
      </div>
  );
}
 
export default Nav;
                
    
          