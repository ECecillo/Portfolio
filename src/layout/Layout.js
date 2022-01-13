import React from 'react'

export default function Layout({children}) {
    return (
        <>
            {{/* Header (Navbar) */}}
           <main>{children}</main>       
           {{/* Footer */}}
        </>
    )
}
