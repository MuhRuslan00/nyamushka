import React from "react";
import styles from './Search.module.scss';
import searchImg from './../../img/search.svg';
import imgClose from './../../img/con_close.svg';



const Search = ({searchValue, setSearchValue}) => {
  
  // React.useEffect(() => {
  //   console.log(document.querySelector('input'));
  // }, []);
  const inputRef = React.useRef();
  // console.log(inputRef)
  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  }


  return (
  <>
  <div className={styles.root}>
  <img className={styles.search__icon} src={searchImg} />
  <input ref={inputRef}
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder="Поиск"/>

  {searchValue && 
  (<img
    onClick={onClickClear}
     className={styles.search__close}
  src={imgClose}/>)}
  </div>
  </> 
);

}

export default Search;