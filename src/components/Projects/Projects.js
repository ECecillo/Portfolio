import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponentsStyles/globalC';
import ProjectCards from './Card/Card';


export default function Projects() {

  return (
    <>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <ProjectCards />
      </Section>
    </>
  );
}
