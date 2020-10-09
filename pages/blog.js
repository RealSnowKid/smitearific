import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar.js';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Blog() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <p>Hello, I'm the {asPath} page</p>
        </>
    )
}