import React from 'react';

import styles from '../styles/Global';
//import assets from '../assets';

const Proposal = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Creating a proposal</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Proposals can't be created by anyone.
To be able to create a proposal you must have a certain number of $SNEAKER tokens to be staked in the governance pool.
Each proposal created comprises a question posed to the community, along with the option of choices to vote for.</p>
        </div>
        <button className={styles.btnPrimary} xmlns="https://t.me/sneakerscartel">Ask a Question</button>
      </div>
    </div>
  )
}

export default Proposal
