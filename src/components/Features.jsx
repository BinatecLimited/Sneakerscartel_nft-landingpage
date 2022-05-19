import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

//const FeatureCard = ({ iconUrl, iconText }) =>  (
  //<div className={styles.featureCard}>
   // <img src={iconUrl} alt="icon" className={styles.featureImg} />
   // <p className={styles.featureText}>{iconText}</p>
 // </div>
//)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Does Walking Help You Live Longer?</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>It’s no secret that exercise is good for your physical and mental health. This has been confirmed in several studies over the last decade. The Centers for Disease Control and Prevention reports that over 8 per cent of all deaths in the United States are because of “inadequate levels of activity.”
The obesity pandemic in the US is thought to be at the root of premature deaths. Life stress is a significant contributing factor also. The most common cause of death in the world is heart disease. 
Any level of exercise can improve your chances of living longer, but your effort has to be worthwhile. A gentle 10-minute stroll won’t have a great deal of impact. A 10-minute brisk walk, on the other hand, is a great start.</p>
        </div>

        
      </div>
    </div>
  )
}

export default Features

//<div className={styles.flexWrap}>
          //<FeatureCard iconUrl={assets.react} iconText="React Native" />
          //<FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
        //</div>