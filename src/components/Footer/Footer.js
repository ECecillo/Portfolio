import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SectionDivider } from '../../styles/GlobalComponentsStyles/globalC';
import {
  FooterDiv,
  FooterInfo,
  Mail,
  SocialFooter,
  SocialIconsFooter,
  Source,
} from './FooterStyles';

function Footer() {
  return (
    <FooterDiv>
      <SectionDivider style={{ marginBottom: '2rem' }} />
      <FooterInfo>
        <Source href="https://github.com/ECecillo/Portfolio">
          Source Code of this page
        </Source>
        <Mail href="mailto:enzo.cecillon@gmail.com">ENZO.CECILLON@GMAIL.COM</Mail>
        <SocialFooter>
          <SocialIconsFooter href="https://github.com/ECecillo">
            <AiFillGithub size="2rem" />
          </SocialIconsFooter>
          <SocialIconsFooter href="https://twitter.com/EnzoCECILLON1">
            <AiFillTwitterCircle size="2rem" />
          </SocialIconsFooter>
          <SocialIconsFooter href="https://www.linkedin.com/in/enzo-cecillon-27142a145/">
            <AiFillLinkedin size="2rem" />
          </SocialIconsFooter>
        </SocialFooter>
      </FooterInfo>
    </FooterDiv>
  );
}

export default Footer;
