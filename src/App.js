import Footer from './components/Footer';
import Header from './components/Header';
import AboutSection from './modules/About';
import MainSection from './modules/Main';
import PartnersSection from './modules/Partners';
import RoadmapSection from './modules/Roadmap';
import StakingSection from './modules/Staking';
import TokenomiksSection from './modules/Tokenomiks';
import WhySection from './modules/Why';
import { StarsScroll } from './components/Stars/StarsScroll';
import { MoonPayProvider } from '@moonpay/moonpay-react';

function App() {
  return (
    <MoonPayProvider
      apiKey='pk_test_tbgcoMvWGhBXazOVrb6iTKRFjLVQSw96'
      environment='sandbox'
      debug
    >
      <div className={`wrapper`}>
        <div className='start__wrapper'>
          <StarsScroll />
        </div>
        <div className={`content`}>
          <Header />
          <MainSection />
          <AboutSection />
          <PartnersSection />
          <StakingSection />
          <RoadmapSection />
          <TokenomiksSection />
          <WhySection />
          <Footer />
        </div>
      </div>
    </MoonPayProvider>
  );
}

export default App;
