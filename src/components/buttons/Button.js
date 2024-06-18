import {Link} from 'react-router-dom';
import styles from './Button.module.scss';
import basketImg from './../../img/basket__img.svg';

const Button = () => {
  return (
    <div className={styles.button__wrap}>
      <Link to = '/bascket'>
    <button className={styles.button}>
      <span>520p</span>
      <img src={basketImg}/></button>
      </Link>
    
  </div> 
  );
}
 
export default Button;