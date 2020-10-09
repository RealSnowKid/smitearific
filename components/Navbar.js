import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Img from 'react-optimized-image';
import Logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const { asPath } = useRouter();
    const [path, setPath] = useState();
    const [blog, setBlog] = useState(false);
    const [godstats, setgGodstats] = useState(false);
    const [esports, setEsports] = useState(false);

    const handlePath = () => setPath(asPath);

    useEffect(() => {
        window.addEventListener('load', handlePath);
        handlePage();
        console.log(path);
        return () => {
            window.removeEventListener('load', handlePath);
        };
    });

    function handlePage() {
        switch (path) {
            case '/blog':
                setBlog(true);
                setgGodstats(false);
                setEsports(false);
                break;

            case '/godstats':
                setBlog(false);
                setgGodstats(true);
                setEsports(false);
                break;

            case '/esports':
                setBlog(false);
                setgGodstats(false);
                setEsports(true);
                break;

            default:
                setBlog(true);
                setgGodstats(false);
                setEsports(false);
                break;
        }
    }

    return (
        <>
            <Navbar expand="md" className="d-flex navContainer">
                <div className="d-lg-flex mx-auto align-items-center">
                    <Navbar.Brand className="" href="/blog">
                        <div className="d-flex align-items-center brand">
                            <Img className="svgLogo ml-1" src={Logo}></Img>
                            <h1 className="ml-3">SMITEARIFIC</h1>
                        </div>
                    </Navbar.Brand>
                    <Nav className="navLinkContainer">
                        <Nav.Link active={blog} id="blog" className="navText" href="/blog">Blog</Nav.Link>
                        <Nav.Link active={godstats} id="godStats" className="navText" href="/godstats">God Stats</Nav.Link>
                        <Nav.Link active={esports} id="esports" className="navText" href="/esports">Esports Stats</Nav.Link>
                    </Nav>
                </div>
                <NavDropdown alignRight={true} className="dorpdownContainer" title={<FontAwesomeIcon className="navAvatar" icon={faUserCircle} />}>
                    <NavDropdown.Item className="dropdownItem" href="#profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem" href="#logout">Sign Out</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </>
    )
}

export default NavBar