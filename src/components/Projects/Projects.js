import React from 'react';
import {Section, SectionDivider } from '../../styles/GlobalComponentsStyles/globalC';
import ProjectCards from './Card/Card';
import { AllButton, SectionTitleP, ProjectTitle } from './ProjectsStyles';


export default function Projects(props) {
  let localLanguage = props.language;
  const Title = localLanguage === "fr" ? "Projets" : "Projects";
  return (
    <>
      <Section nopadding id={Title}>
        <SectionDivider />
        <SectionTitleP nopadding>
          <ProjectTitle>{Title}</ProjectTitle>
          <AllButton onClick={() => props.filtering('All')}>All</AllButton>
        </SectionTitleP>
        <ProjectCards language={props.language} filter={props.filter} />
      </Section>
    </>
  );
}
