import React from 'react';
import Container from '../layout/LayoutStyles'

export default function Layout({ children }) {
    return (
        <Container>
            {{/* Header (Navbar) */ }}
            <main>{children}</main>
            {{/* Footer */ }}
        </Container>
    )
}
