import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Faq = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Frequently Asked Questions</h1>
          <div>
              <h2 className={`${styles.descDiv} ${styles.blackText}`}>What is Sneakerscartel?</h2>
          </div>
        </div>
      </div>
      <div className={`${styles.descDiv} text-left`}>
      <h2 className={`${styles.descDiv} ${styles.blackText} ${styles.textLeft}`}></h2>
          <div>
              <h2 className={`${styles.descDiv} ${styles.blackText}`}>What is Sneakerscartel?</h2>
          </div>

      </div>
    </div>
  )
}

export default Faq