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
              Sneakerscartel is simple. We want you to walk. More. And for that, we’ll reward you. We believe your steps have value: <br /> to you, your health insurance, society. In short: you walk, we pay.
               And why? Because you’ll be happier. Your health will improve. You’ll spend more time outdoors. You’ll feel more energized. And we want a planet full of people like this.
    
            </AccordionLayout>

            <AccordionLayout 
              title="What is Sneakerscartel?"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Sneakerscartel is a pioneer project in the move to earn segment building a powerful web3 digital fitness club   
            </AccordionLayout>

            <AccordionLayout 
              title="What is Sneakerscartel?"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Sneakerscartel is a pioneer project in the move to earn segment building a powerful web3 digital fitness club   
            </AccordionLayout>

            <AccordionLayout 
              title="What is Sneakerscartel?"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Sneakerscartel is a pioneer project in the move to earn segment building a powerful web3 digital fitness club   
            </AccordionLayout>

            <AccordionLayout 
              title="What is Sneakerscartel?"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
            Sneakerscartel is a pioneer project in the move to earn segment building a powerful web3 digital fitness club   
            </AccordionLayout>
        </div>
      </div>
  );
};

export default Accordion;