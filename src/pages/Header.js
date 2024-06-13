import logoImg from '../img/Logo (5).png'
import basketImg from '../img/basket__img.svg'

const Header = () => {
  return (
    <div className='header'>
    <div className='nav'>
<img className='logo__img' src={logoImg}/>
<h1 className='header__title'>Nyamushka</h1>
<p className='header__subtitle'>порадуй котэ</p>
</div>

<div className='basket'>
  <button className='button__basket'>
    <span className='button__price'>520p</span>
    <img className='basket__img'src={basketImg}/></button>
  
</div>
</div>
  );
}
 
export default Header;