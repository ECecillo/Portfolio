import React from 'react';
import { Container, Head1 } from './SpecialTextStyles';

export default function SpecialText() {
    const text = "#OPENTOWORK";
    return (
        <Container>
            <Head1>
                {text}
            </Head1>
        </Container>
    )
}
