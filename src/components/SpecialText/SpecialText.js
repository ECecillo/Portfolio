import React from 'react';
import { FadeSection } from '../../styles/GlobalComponentsStyles/globalC';
import { Container, Head1, HireButton } from './SpecialTextStyles';

export default function SpecialText(props) {
  const text = '#OPENTOWORK';
  const Hire_Text =
    props.language === 'fr'
      ? 'Je cherche une Alternance !'
      : 'I am looking for a study training program !';
  const Linkedin_Link = 'https://www.linkedin.com/in/ececillo/';
  const Linkedin_Page =
    props.language !== 'fr' ? Linkedin_Link + '?locale=en_US' : Linkedin_Link;
  return (
    <Container>
      <Head1>{text}</Head1>
      <FadeSection time>
        <HireButton href={Linkedin_Page}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {Hire_Text}
        </HireButton>
      </FadeSection>
    </Container>
  );
}
