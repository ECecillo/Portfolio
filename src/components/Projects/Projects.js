import React from 'react';
import {Section, SectionDivider } from '../../styles/GlobalComponentsStyles/globalC';
import ProjectCards from './Card/Card';
import { AllButton, TitleButtonSection, ProjectTitle } from './ProjectsStyles';


export default function Projects(props) {
  let localLanguage = props.language;
  const Title = localLanguage === "fr" ? "Projets" : "Projects";
  return (
    <>
      <Section nopadding id={Title}>
        <SectionDivider />
        <TitleButtonSection nopadding>
          <ProjectTitle>{Title}</ProjectTitle>
          <AllButton onClick={() => props.filtering('All')}>All</AllButton>
        </TitleButtonSection>
        <ProjectCards language={props.language} filter={props.filter} />
      </Section>
    </>
  );
}
