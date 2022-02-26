import Layout from '../layout/Layout';
import React, { useEffect, useState } from 'react';
import SpecialText from '../components/SpecialText/SpecialText';
import { Personnal_Info } from '../constants/constants';
import Presentation from '../components/Presentation/Presentation';
import { FadeSection } from '../styles/GlobalComponentsStyles/globalC';
import { useRouter } from 'next/router';
import Projects from '../components/Projects/Projects';
import WebFont from 'webfontloader';

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

  // Télécharge la font pour le texte
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Oxygen', 'Lato']
      }
    });
  }, []);

  return (
    <Layout 
    toggler={themeToggler} 
    theme={props.ambientTheme}>
      {showSpecial}
      <FadeSection style={{width: "90%", margin: "auto"}}>
        <Presentation language={lang} filtering={changeFilter}/>
        <Projects language={lang} filter={filter} filtering={changeFilter}/>
      </FadeSection>
    </Layout>
  );
};

export default Home;