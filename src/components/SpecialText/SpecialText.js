import React from 'react';
import {  Container, Head1, HireButton } from './SpecialTextStyles';

export default function SpecialText(props) {
    const text = "#OPENTOWORK";
    console.log(props.language);
    const Hire_Text = props.language === "fr" ? "Je cherche un Stage !" : "I am looking for an Internship !";
    const Linkedin_Link = "https://www.linkedin.com/in/ececillo/";
    const Linkedin_Page = props.language !== "fr" ? Linkedin_Link + "?locale=en_US" : Linkedin_Link; 
    return (
        <Container>
            <Head1>
                {text}
            </Head1>
            <HireButton href={Linkedin_Page}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {Hire_Text}
            </HireButton>
        </Container>
    )
}
