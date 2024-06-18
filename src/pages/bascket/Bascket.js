import React from 'react';
import styles from './bascket.module.scss';
import imgBasCat from './../../img/Back.svg';
import imgBasket from './../../img/basket__img.svg';
import imgTrash from './../../img/trash.svg';

const Bascket = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container__cart}>
      <div className={styles.cart__mini}>
        <div className={styles.cart__top}>
         {/* <img className={styles.img} src={imgBasket}/> */}
      <h2 className={styles.title}>Корзина</h2> 
        </div>
        <div >
      <img src={imgTrash}/>
      <span>Очистить корзину</span>
      </div>
      </div>
      

      <div className={styles.cart__diskription}>
      <div className={styles.diskription__title}>
      <img className={styles.cat__img} src={imgBasCat}/>
      <div>
      <h2>с фуа-гра</h2>
      <p>мышь в подарок</p>
      </div>
      </div>

      <div className={styles.item__count}>
        <button className={styles.round}>+</button>
      <span>1</span>
        <button className={styles.round}>-</button>

      </div>
      <div className={styles.item__price}>
      <span>770 р</span>
      </div>
      <div className={styles.button__close}>
      <button className={styles.round}>X</button>
      </div>
      </div>

      <div className={styles.cart__footer}>
        <span>Всего 1 порция</span>
        <span>Сумма заказа: 900 ₽</span>
      </div>
      <div className={styles.footer__summ}>
        <button>Вернуться назад</button>
        <button>Оплатить сейчас</button>
      </div>



      </div>
      </div>
);
}

export default Bascket;




