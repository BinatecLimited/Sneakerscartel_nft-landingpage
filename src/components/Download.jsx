import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Sneakerscartel NFT Collection</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Check out the full collection on our marketplace</p>
        </div>
       <a href="https://github.com/" ><button className={styles.btnPrimary}>Full NFT Collection</button></a>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download