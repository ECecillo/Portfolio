import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponentsStyles/globalC';
import { GridContainer } from './ProjectsStyles';

export default function Projects() {

  return (
    <>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>

        </GridContainer>
      </Section>
    </>
  );
}
