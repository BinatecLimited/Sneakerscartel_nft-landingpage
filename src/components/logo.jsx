import React from 'react'

import styles from '../styles/Global';
import Logo from "./logo.png";

const logo = ( reverse ) => {
  return (
    <div className={`min-h-0 max-h-0 ${styles.sub} 
      ${reverse ? styles.bgWhite : styles.bgPrimary}`}>
        <div ><img class="my-6 py-4" src={Logo} alt="Sneakerscartel" /></div>
    </div>
  )
}

export default logo