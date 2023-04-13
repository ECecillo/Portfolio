import Layout from '../layout/Layout';
import React, { useEffect, useState } from 'react';
import SpecialText from '../components/SpecialText/SpecialText';
import { Personnal_Info } from '../constants/constants';
import Presentation from '../components/Presentation/Presentation';
import { FadeSection } from '../styles/GlobalComponentsStyles/globalC';
import { useRouter } from 'next/router';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

const Home = (props) => {
  const [filter, handleFilter] = useState('All');
  const changeFilter = (Framework) => {
    // Change the value of Filter.
    handleFilter(Framework);
  };
  const router = useRouter();
  const lang = router.locale;
  const themeToggler = props.toggler;
  const showSpecial = Personnal_Info.recherche ? (
    <SpecialText language={lang} />
  ) : null;

  return (
    <Layout toggler={themeToggler} theme={props.ambientTheme}>
      {showSpecial}
      <FadeSection style={{ width: '90%', margin: 'auto' }}>
        <Presentation language={lang} filtering={changeFilter} />
        <Projects language={lang} filter={filter} filtering={changeFilter} />
        <Footer />
      </FadeSection>
    </Layout>
  );
};

export default Home;
