import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponentsStyles/globalC';
import ProjectCards from './Card/Card';


export default function Projects(props) {
  let localLanguage = props.language;
  const Title = localLanguage === "fr" ? "Projets" : "Projects";
  return (
    <>
      <Section nopadding id={Title}>
        <SectionDivider />
        <SectionTitle main>{Title}</SectionTitle>
        <ProjectCards language={props.language} filter={props.filter}/>
      </Section>
    </>
  );
}
