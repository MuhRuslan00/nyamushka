import './weight/weight.css';
import React from 'react';
import cardActive from '../img/Back.svg';
import Sort from './sort/Sort';
import imgChoose from '../img/Vector (15).svg';
import {card} from '../helpers/Array';

const Card = ({title, diskription, subTitle,backgroundImage, weight}) => {
  return (
  
  <div className='cards__wrap'>
        
        <div style={{backgroundImage: `url(${backgroundImage})`}}  className='container__card'>
        <img className='active' src={cardActive}/>
          <div className='card__content'>
        <h3 className='title'>{title}</h3>
        <h2>Нямушка</h2>
        <h4>{subTitle}</h4>
        
        <div className='wrap__span'>
        <span > {diskription}</span>
        </div>
        </div>
        <div className='card1'>
      <div className='card__weight'>
        <div className='weight '>
      <p>{weight}</p>
      
        <span className='text'>кг</span>
        </div> 
      </div>
      </div>
      
      </div> 
      <div className='link'> 
        <a >Чего сидишь? Порадуй котэ, 
          <span className='active__link'>купи.</span></a>
          <Sort/>    

    </div>
    </div> 
    
  );
}
 
export default Card;