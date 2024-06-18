import {Link} from 'react-router-dom';
import logoImg from '../img/Logo (5).png'
import Button from '../components/buttons/Button';

const Header = () => {
  return (
    <div className='header'>

    <Link to = '/' className='nav'>
    <img className='logo__img' src={logoImg}/>
    <h1 className='header__title'>Nyamushka</h1>
    <p className='header__subtitle'>порадуй котэ</p>
    </Link>
    
    <Button/>
    
    
</div>
  );
}
 
export default Header;