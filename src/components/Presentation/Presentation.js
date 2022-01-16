import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponentsStyles/globalC';
import { BioLayout, LeftSection, MiddleSection, RightSection } from './PresentationStyles';
import { Personnal_Info } from '../../constants/constants';
import Profile from "../../../public/images/Photo.png";
import Bio from './Bio/Bio';
import Image from 'next/image';

export default function Presentation(props) {
    let localLanguage = props.language;
    let jobTitle = localLanguage === "fr" ?
        Personnal_Info.fr.Poste :
        Personnal_Info.en.Job;
    return (
        <>
            <Section row nopadding>
                <SectionTitle main center>
                    {jobTitle}
                </SectionTitle>
            </Section>
            <BioLayout>
                <LeftSection>
                    <Bio />
                </LeftSection>
                <MiddleSection>
                    <Image src={Profile} href="https://www.linkedin.com/in/enzo-cecillon-27142a145/" />
                </MiddleSection>
                <RightSection>
                    
                </RightSection>
            </BioLayout>
        </>
    )
}
