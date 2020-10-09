import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Navigation from '../../components/Navigation'

export default function Gods() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <Navigation />
            <p>Hello, I'm the {asPath} page</p>
        </>
    )
}