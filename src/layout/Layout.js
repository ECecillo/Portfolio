import React from 'react';
import { Container } from './LayoutStyles'
import Header from '../components/Header/Header';

export default function Layout({children}) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}