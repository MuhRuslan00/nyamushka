import React from "react";
import styles from './Search.module.scss';
import searchImg from './../../img/search.svg';
import imgClose from './../../img/con_close.svg';
import debounce from 'lodash.debounce';


const Search = ({searchValue, setSearchValue}) => {
  const[value, setValue] = React.useState('');
  // React.useEffect(() => {
    //   console.log(document.querySelector('input'));
    // }, []);
    const inputRef = React.useRef();

    // console.log(inputRef)
  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250), []);


  const onChangeInput = e => {
    setValue(e.target.value)
    updateSearchValue(e.target.value);
  }
  


  return (
  <>
  <div className={styles.root}>
  <img className={styles.search__icon} src={searchImg} />
  <input ref={inputRef}
  value={value}
  onChange={onChangeInput} className={styles.input} placeholder="Поиск"/>

  {value && 
  (<img
    onClick={onClickClear}
     className={styles.search__close}
  src={imgClose}/>)}
  </div>
  </> 
);

}

export default Search;