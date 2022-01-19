import React from 'react';
import styles from '../css/search.module.css';

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.start}>
        <img src={`${process.env.PUBLIC_URL}/img/youtube.png`} alt="logo" className={styles.logo} />
      </div>

      <div className={styles.center}>
        <form className={styles.searchForm}>
          <div className={styles.searchCon}>
            <input type="text" className={styles.search} placeholder="검색" />
            <button className={styles.searchBtn}>
              <img src={`${process.env.PUBLIC_URL}/img/search.png`} alt="logo" />
            </button>
          </div>

          <div className={styles.microCon}>
            <i className="fas fa-microphone" id={styles.micro}></i>
          </div>
        </form>
      </div>

      <div className={styles.end}>
        <img src={`${process.env.PUBLIC_URL}/img/add-video.png`} alt="logo" className={styles.icon} />
        <img src={`${process.env.PUBLIC_URL}/img/menu.png`} alt="logo" className={styles.icon} />
        <img src={`${process.env.PUBLIC_URL}/img/bell.png`} alt="logo" className={styles.icon} />
      </div>
    </div>
  );
};

export default Search;
