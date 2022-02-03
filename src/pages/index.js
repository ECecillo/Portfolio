import Layout from '../layout/Layout';
import React, { useState } from 'react';
import SpecialText from '../components/SpecialText/SpecialText';
import { Personnal_Info } from '../constants/constants';
import Presentation from '../components/Presentation/Presentation';
import { FadeSection } from '../styles/GlobalComponentsStyles/globalC';
import { useRouter } from 'next/router';
import Projects from '../components/Projects/Projects';

const Home = (props) => {

  const [filter, handleFilter] = useState('All');
  const changeFilter = (Framework) => {
    // Change the value of Filter.
    handleFilter(Framework);
  };
  const showSpecial = Personnal_Info.recherche ? <SpecialText /> : null;
  const router = useRouter();
  const lang = router.locale;
  const themeToggler = props.toggler;

  return (
    <Layout 
    toggler={themeToggler} 
    theme={props.ambientTheme}>
      {showSpecial}
      <FadeSection>
        <Presentation language={lang} filtering={changeFilter}/>
        <Projects language={lang} filter={filter} filtering={changeFilter}/>
      </FadeSection>
    </Layout>
  );
};

export default Home;