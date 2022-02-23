import React from 'react';
import { SectionDivider } from '../../styles/GlobalComponentsStyles/globalC';
import ProjectCards from './Card/Card';
import { AllButton, TitleButtonSection, ProjectTitle, ProjectSection } from './ProjectsStyles';


export default function Projects(props) {
  let localLanguage = props.language;
  const Title = localLanguage === "fr" ? "Projets" : "Projects";
  return (
    <>
      <ProjectSection nopadding id={Title}>
        <SectionDivider />
        <TitleButtonSection nopadding>
          <ProjectTitle>{Title}</ProjectTitle>
          <div style={{
            gridColumn: "2 / 3",
            alignSelf: "center",
            justifySelf: "center"
          }}>
            <AllButton onClick={() => props.filtering('All')}>All</AllButton>
          </div>
        </TitleButtonSection>
        <ProjectCards language={props.language} filter={props.filter} />
      </ProjectSection>
    </>
  );
}
