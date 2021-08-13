import React, { useRef } from 'react';
import styles from './searchbar.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleChange = () => {
    let value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleChange();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleChange();
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type="text"
        placeholder="검색"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  );
};

export default Searchbar;
