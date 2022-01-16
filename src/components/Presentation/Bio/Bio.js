import { Personnal_Info } from '../../../constants/constants';

import React from 'react'
import { ContentParagraph, ContentTitle, Section, SectionContent } from './BioStyles';

export default function Bio(props) {
    const lang = props.language;
    const info_object = lang === "fr" ? Personnal_Info.fr : Personnal_Info.en;
    /* Number of Row inside div */

    let info = [];
    /*  */
    for (let index in info_object) {
        if (index === "Job" || index === "Poste")
            continue;
        if (index === "Contact") {
            /* On sait que Contact est un dictionnaire donc on doit aussi le parcourir avec une boucle. */

            info.push(
                <SectionContent key={index}>
                    <ContentTitle>{index}</ContentTitle>
                    <ContentParagraph>
                        {info_object["Contact"].adress + ","}<br/>
                        {info_object["Contact"].city + " " + info_object["Contact"].postal_code}<br/>
                        {info_object["Contact"].phone}<br/>
                        {info_object["Contact"].email}
                    </ContentParagraph>
                </SectionContent>
            );
        }
        else {
            info.push(
                <SectionContent key={index}>
                    <ContentTitle>{index}</ContentTitle>
                    <ContentParagraph>
                        {info_object[index]}
                    </ContentParagraph>
                </SectionContent>
            );
        }
    }
    return (
        <Section>
            {info}
        </Section>
    )
}
