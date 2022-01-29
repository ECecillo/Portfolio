import Layout from '../layout/Layout';
import React from 'react';
import SpecialText from '../components/SpecialText/SpecialText';
import { Personnal_Info } from '../constants/constants';
import Presentation from '../components/Presentation/Presentation';
import { FadeSection } from '../styles/GlobalComponentsStyles/globalC';
import { useRouter } from 'next/router';
import Projects from '../components/Projects/Projects';

const Home = (props) => {
  const showSpecial = Personnal_Info.recherche ? <SpecialText /> : null;
  const router = useRouter();
  const lang = router.locale;
  return (
    <Layout>
      {showSpecial}
      <FadeSection>
        <Presentation language={lang}/>
        <Projects />
      </FadeSection>
    </Layout>
  );
};

export default Home;