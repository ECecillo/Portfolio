import Layout from '../layout/Layout';
import React from 'react';
import SpecialText from '../components/SpecialText/SpecialText';
import { Personnal_Info } from '../constants/constants';
import Presentation from '../components/Presentation/Presentation';
import { FadeSection } from '../styles/GlobalComponentsStyles/globalC';

const Home = () => {
  const showSpecial = Personnal_Info[0].recherche ? <SpecialText /> : null; 
  return (
    <Layout>
      {showSpecial}
      <FadeSection>
        <Presentation/>
      </FadeSection>
    </Layout>
  );
};

export default Home;