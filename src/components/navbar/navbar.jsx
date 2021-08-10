import React from 'react';
import Searchbar from './searchbar/searchbar';
import styles from './navbar.module.css';

const Navbar = ({ setQuery }) => (
  <div className={styles.container}>
    <div className={styles.logo_container}>
      <img
        className={styles.logo}
        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png"
        alt="youtube logo"
      />
      <span className={styles.main_title}>JvnTube</span>
    </div>
    <Searchbar setQuery={setQuery} />
    <div className={styles.profile_container}>
      <img
        className={styles.profile_image}
        src="https://avatars.githubusercontent.com/u/77430059?v=4"
        alt="userprofile"
      />
    </div>
  </div>
);

export default Navbar;
