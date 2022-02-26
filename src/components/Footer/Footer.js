import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { SectionDivider } from '../../styles/GlobalComponentsStyles/globalC'
import { SocialDiv, SocialIcons } from '../Header/HeaderStyles'
import { FooterDiv, SocialFooter } from './FooterStyles'

function Footer() {
    return (
        <FooterDiv>
            <SectionDivider />
            <p></p>
            <a href="enzo.cecillon@gmail.com">ENZO.CECILLON@GMAIL.COM</a>
            <SocialFooter>
                <SocialIcons href="https://github.com/ECecillo">
                    <AiFillGithub size="2rem" />
                </SocialIcons>
                <SocialIcons href="https://twitter.com/EnzoCECILLON1">
                    <AiFillTwitterCircle size="2rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/enzo-cecillon-27142a145/">
                    <AiFillLinkedin size="2rem" />
                </SocialIcons>
            </SocialFooter>
        </FooterDiv>
    )
}

export default Footer