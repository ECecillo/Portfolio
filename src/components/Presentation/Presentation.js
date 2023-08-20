import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponentsStyles/globalC';
import {
  BioLayout,
  LeftSection,
  MiddleSection,
  RightSection,
  FrameworkIcons,
} from './PresentationStyles';
import { Personnal_Info } from '../../constants/constants';
import Profile from '../../../public/images/Photo.png';
import Bio from '../Bio/Bio';
import {
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiJavascript,
  SiMysql,
  SiReact,
} from 'react-icons/si';
import Image from 'next/image';

export default function Presentation(props) {
  let localLanguage = props.language;
  const setFilter = (Framework) => {
    props.filtering(Framework);
  };

  let jobTitle =
    localLanguage === 'fr' ? Personnal_Info.fr.Poste : Personnal_Info.en.Job;

  return (
    <div>
      <Section row nopadding>
        <SectionTitle style={{ marginBottom: '3rem' }} main center>
          {jobTitle}
        </SectionTitle>
      </Section>
      <BioLayout id="Portrait">
        <LeftSection>
          <Bio language={localLanguage} />
        </LeftSection>
        <MiddleSection>
          <Image
            src={Profile}
            href="https://www.linkedin.com/in/enzo-cecillon-27142a145/"
          />
        </MiddleSection>
        <RightSection>
          <FrameworkIcons
            onClick={() => {
              setFilter('React');
            }}
          >
            <SiReact size="4rem" />
          </FrameworkIcons>
          <FrameworkIcons
            onClick={() => {
              setFilter('C++');
            }}
          >
            <SiCplusplus size="4rem" />
          </FrameworkIcons>
          <FrameworkIcons>
            <SiFigma size="4rem" />
          </FrameworkIcons>
          <FrameworkIcons
            onClick={() => {
              setFilter('JS');
            }}
          >
            <SiJavascript size="4rem" />
          </FrameworkIcons>
          <FrameworkIcons
            onClick={() => {
              setFilter('CSS');
            }}
          >
            <SiCss3 size="4rem" />
          </FrameworkIcons>
          <FrameworkIcons
            onClick={() => {
              setFilter('SQL');
            }}
          >
            <SiMysql size="4rem" />
          </FrameworkIcons>
        </RightSection>
      </BioLayout>
    </div>
  );
}
