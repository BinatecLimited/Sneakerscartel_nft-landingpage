import React, {useState} from 'react';
import styles from '../styles/Global';

import AccordionLayout from './AccordionLayout/AccordionLayout';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div>
      <h1 className={`${styles.h1Text} ${styles.blackText} ${styles.section}`}>Frequently Asked Questions</h1>
        <div className='flex flex-col items-center'>
            <AccordionLayout 
              title="What is Sneakerscartel?"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Sneakerscartel is a pioneer project in the move to earn segment building a powerful web3 digital fitness club   
            </AccordionLayout>

            <AccordionLayout className='items-center' 
              title="Too good to be true?"
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              Sneakerscartel is simple. We want you to walk. More. And for that, we’ll reward you. We believe your steps have value: <br /> to you, your health insurance, society. In short: you walk, we pay. And why? Because you’ll be happier. Your health will improve. You’ll spend more time outdoors. You’ll feel more energized. And we want a planet full of people like this.
            </AccordionLayout>

            <AccordionLayout 
              title="So how do we get there?     "
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              className={` ${styles.section}flex flex-col items-center`}
            >
              We will build a clever little app using our step verification algorithm to convert your outdoor steps into a virtual currency, which you can spend on real goods and services. No matter how active you are, your steps now count for something. By earning and spending your sneaker token, you make immediate gains and enjoy long-term benefits. Now walk, earn, spend, repeat. You’ll see, it pays to walk.

            </AccordionLayout>

            <AccordionLayout 
              title="Does Sneakerscartel have an app?"
              index={4}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Not yet, our mobile app will be available for downloads on both iOS and Android stores in Q3 2022. You will be able to connect any cardano native wallet, sync your favourite fitness tracker and get rewarded for your fitness activities.
            </AccordionLayout>

            <AccordionLayout 
              title="Does Sneakerscartel have a token?"
              index={5}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Yes Sneakerscartel is a cross chain cryptocurrency available on the Cardano blockchain.  Ask our team in Telegram for any support.   
            </AccordionLayout>

            <AccordionLayout 
              title="How do you Spend Sneaker token?"
              index={6}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            You can Choose from 1000s of fabulous branded goods and services in our marketplace or convert to other cryptocurrencies  
            </AccordionLayout>

            <AccordionLayout 
              title="Should I hold my SNEAKER tokens?"
              index={7}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            SNEAKER holders will benefit from exclusive discounts on partner sport apparel brands and luxury designers brands based on a tier level system. Stay tuned for further announcements.  
            </AccordionLayout>

            <AccordionLayout 
              title="Can I trust Sneakerscartel Team?"
              index={8}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Team is 100% transparent with the community creating a global movement together.  
            </AccordionLayout>

            <AccordionLayout 
              title="What is the best Way to reach out to you?"
              index={9}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            The team is actively checking our socials, however, for immediate attention please contact us.
            </AccordionLayout>

            <AccordionLayout 
              title="The future of Sneakerscartel?"
              index={10}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            We’re in talks with local and national governments, who share our vision of a more active, healthy society. We’re also partnering with healthcare providers and insurance companies, to create an even greater incentive to get moving.We see a future where Sneakerscartel is a currency for everyday use: grocery shopping, or even paying your taxes. So watch this space – earning sweatcoins today might be a smart investment tomorrow. 
            </AccordionLayout>

            <AccordionLayout 
              title="Does Walking Help You Live Longer??"
              index={11}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
           Does Walking Help You Live Longer? 
It’s no secret that exercise is good for your physical and mental health. This has been confirmed in several studies over the last decade. The Centers for Disease Control and Prevention reports that over 8 per cent of all deaths in the United States are because of “inadequate levels of activity.”
The obesity pandemic in the US is thought to be at the root of premature deaths. Life stress is a significant contributing factor also. The most common cause of death in the world is heart disease. 
Any level of exercise can improve your chances of living longer, but your effort has to be worthwhile. A gentle 10-minute stroll won’t have a great deal of impact. A 10-minute brisk walk, on the other hand, is a great start. 
Of course, the distance and speed you walk can only be determined by your physical condition so only do what you’re capable of. But no matter how far you walk,Sneakerscartel is with you every step of the way when you download our app.
Join us on the journey today, and never walk for free again.

            </AccordionLayout>
        </div>
      </div>
  );
};

export default Accordion;