import React, { Component } from 'react'

export default class test extends Component {
    show() {
        for (let index in info_object) {
            console.log(info_object[index]);
            if (index === "Contact") {
                <SectionContent>
                    <ContentTitle>
                        {index}
                    </ContentTitle>
                    {() => {
                        for (let contact_index in info_object["Contact"]) {
                            <ContentParagraph>
                                {info_object["Contact"][contact_index]}
                            </ContentParagraph>
                        }
                    }}
                </SectionContent>
            }
            <SectionContent>
                <ContentTitle>{index}</ContentTitle>
                <ContentParagraph>
                    {info_object[index]}
                </ContentParagraph>
            </SectionContent>
        }
    };
    render() {
        return (
            <div>

            </div>
        )
    }
}
