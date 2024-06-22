import React from 'react';
import './style.scss';
const Portion = ({sizes, tipe}) => {
  const[activePortion, setActivePortion] = React.useState(0);
  const tipeNames=['С добавками', 'Без добавок'];
  return (
    <>
    <div className='portion__wrap'>
      <div className='portion__wrap__cards'>
      <ul className='portion__cards'>
      {
      sizes.map(value => <li>{value}кг</li>)
      }
      </ul>

      </div>

      <div className='portion__wrap__types'>
      <ul className='portion__tipes'>
      {
      tipe.map((i) => <li className='active'>{tipeNames[i]} </li>)
      }
      </ul>
      </div>
  </div>
</>

);
}

export default Portion;

    



    
