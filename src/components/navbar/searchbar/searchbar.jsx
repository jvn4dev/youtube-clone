import React from 'react';
import styles from './searchbar.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbar = ({ query, setQuery }) => {
  return (
    <form className={styles.container} action="/">
      <input className={styles.input} type="text" placeholder="검색" />
      <button className={styles.button} type="submit">
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </form>
  );
};

export default Searchbar;
