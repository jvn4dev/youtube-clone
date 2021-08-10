import React, { useState } from 'react';
import styles from './searchbar.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbar = ({ setQuery }) => {
  const [newQuery, setNewQuery] = useState('');

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="검색"
        onChange={(e) => {
          setNewQuery(e.target.value);
        }}
      />
      <button
        className={styles.button}
        type="submit"
        onClick={() => setQuery(newQuery)}
      >
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  );
};

export default Searchbar;
