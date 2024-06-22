import React from 'react';
import './style.scss';
const Portion = ({sizes, tipe}) => {
  const[activePortion, setActivePortion] = React.useState(0);
  const[activeSizes, setActiveSizes] = React.useState(0);
  const tipeNames=['С добавками', 'Без добавок'];
  return (
    <>
    <div className='portion__wrap'>
      <div className='portion__wrap__cards'>
      <ul className='portion__cards'>
      {
      sizes.map((value, i) => <li onClick={()=> setActiveSizes(i)} className={activeSizes === i ? 'active' : ''}>{value}кг</li>)
      }
      </ul>

      </div>

      <div className='portion__wrap__types'>
      <ul className='portion__tipes'>
      {
      tipe.map((i) => <li onClick={()=> setActivePortion(i)} className={activePortion === i ? 'active' : ''}>{tipeNames[i]} </li>)
      }
      </ul>
      </div>
  </div>
</>

);
}

export default Portion;

    



    
