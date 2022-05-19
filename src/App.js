
import { Download, Features, Proposal, SectionWrapper, Faq } from './components';
import assets from './assets';
import styles from './styles/Global';
import Header from "./Header";


const App = () => {
  return (
    <>
      
      <SectionWrapper 
        title="Sneakerscartel the Next Gen Web 3.0 move to earn gaming platform."
        description="A place where you earn rewards for your daily steps  you can spend on cool products or convert into it to other crypto currencies."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Why is Sneakerscartel Important "
        description="Why? Because when you look after your health, you benefit society. You are more productive. You help save $billions in healthcare. Your movement has value: you deserve a share in it. It pays to walk."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="SAY ABOUT US"
        description="“if ever you’ve needed an incentive to exercise, Sneakerscartel could give you a much-needed boost to get active”"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="How do I take part in SNEAKERSCARTEL governance?"
        description="You can take part in SNEAKERSCARTEL Governance By simply holding $SNEAKER. Voting power are derived from the $SNEAKER holdings.
        The reasoning behind this is that those holding more $SNEAKER tokens are more invested in the project. Therefore, they have a more significant incentive to succeed and prosper.
        $SNEAKER token holders can see proposals and vote."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <SectionWrapper 
        title="Voting"
        description="Voting requires holding of $SNEAKER, which can simply be stored in nami wallet or staked in the governance pool. There is no need to remove the stake to vote. Voting power is based directly on the amount of $SNEAKER each voter holds."
        subtitle="Voting"
        body="Voting requires holding of $SNEAKER, which can simply be stored in nami wallet or staked in the governance pool. There is no need to remove the stake to vote. Voting power is based directly on the amount of $SNEAKER each voter holds."

        mockupImg={assets.voting}
        reverse
      />
      <Proposal />
      <Faq/>
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.h6Text} ${styles.whiteText}`}>Designed by {" "}
        <span className="bold">BinatecLimited</span>
        </p>
      </div>
    </>
  );
}

export default App;
