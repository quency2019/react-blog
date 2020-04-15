import React from 'react';
import styles from './index.css';
import LogoImg from '../assets/douban/logo_db.png'
import searchBtn from '../assets/douban/bn_srh_1.png'

const BasicLayout: React.FC = props => {
  return (
    <div>
      <header className={`${styles.header} ${styles.clearfix}`}>
        <div className={styles.left}>
          <h1 className={styles.title}><a href="https://www.douban.com/"><img className={styles.logo} src={LogoImg} /></a></h1>
          <div className={styles.search}>
            <form>
              <input className={styles.text} type="text" placeholder="书籍、电影、音乐、小组、小站、成员" />
              <button className={styles.btn}></button>
            </form>
          </div>

        </div>
        <ul className={styles.right}>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </header>
      {props.children}
    </div>

  );
};

export default BasicLayout;
