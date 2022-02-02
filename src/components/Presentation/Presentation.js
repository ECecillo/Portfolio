import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponentsStyles/globalC';
import { BioLayout, LeftSection, MiddleSection, RightSection, FrameworkIcons, FrameworkDiv } from './PresentationStyles';
import { Personnal_Info } from '../../constants/constants';
import Profile from "../../../public/images/Photo.png";
import Bio from './Bio/Bio';
import { SiCplusplus, SiCss3, SiFigma, SiJavascript, SiMysql, SiReact } from "react-icons/si";
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
                    <FrameworkIcons>
                        <SiReact size="4rem" />
                    </FrameworkIcons>
                    <FrameworkIcons>
                        <SiCplusplus size="4rem" />
                    </FrameworkIcons>
                    <FrameworkIcons>
                        <SiFigma size="4rem" />
                    </FrameworkIcons>
                    <FrameworkIcons>
                        <SiJavascript size="4rem" />
                    </FrameworkIcons>
                    <FrameworkIcons>
                        <SiCss3 size="4rem" />
                    </FrameworkIcons>
                    <FrameworkIcons>
                        <SiMysql size="4rem" />
                    </FrameworkIcons>
                </RightSection>
            </BioLayout>
        </>
    )
}
