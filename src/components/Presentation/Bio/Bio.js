import { Personnal_Info } from '../../../constants/constants';

import React from 'react'
import { PContent, ContentTitle, Section, SectionContent } from './BioStyles';
import { SectionText } from '../../../styles/GlobalComponentsStyles/globalC';

export default function Bio(props) {
    const lang = props.language;
    // Get the good translation for the text and return the object that match the language.
    const info_object = lang === "fr" ? Personnal_Info.fr : Personnal_Info.en;
    
    // Array that will store the elements that we will render.
    let info = [];

    for (let index in info_object) { // index = key index of Dictionnary.
        // Don't render the job title again.
        if (index === "Job" || index === "Poste")
            continue;
        if (index === "Contact") {
            // Contact key has a dictionnary type value so we will get them one by one. (couldn't do it with an array)
            info.push(
                <SectionContent key={index}>
                    <PContent>
                        {info_object["Contact"].adress + ","}<br />
                        {info_object["Contact"].city + " " + info_object["Contact"].postal_code}<br />
                        {info_object["Contact"].phone}<br />
                        {info_object["Contact"].email}
                    </PContent>
                </SectionContent>
            );
        }
        else {
            info.push(
                <SectionContent key={index}>
                    <PContent key={index}>
                        {info_object[index]}
                    </PContent>
                </SectionContent>
            );
        }
    }
    return (
        <Section>
            <h2>Salut! Moi c'est Enzo 👋</h2>
            {info}
        </Section>
    )
}
