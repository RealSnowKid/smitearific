import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

function Navigation() {
    const { asPath } = useRouter();
    const [path, setPath] = useState();
    const [home, setHome] = useState(false);
    const [tierlist, setgTierlist] = useState(false);
    const [gods, setGods] = useState(false);

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
                setHome(true);
                setgTierlist(false);
                setGods(false);
                break;

            case '/general-tier-list':
                setHome(false);
                setgTierlist(true);
                setGods(false);
                break;

            case '/gods':
                setHome(false);
                setgTierlist(false);
                setGods(true);
                break;

            default:
                setHome(false);
                setgTierlist(false);
                setGods(false);
                break;
        }
    }

    return (
        <>
            <Nav className="navLinksContainer justify-content-center" defaultActiveKey="/blog">
                <Nav.Item className="navItem">
                    <Nav.Link active={home} className="navText" href="/blog">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link active={tierlist} className="navText" href="/general-tier-list">General Tier List</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link active={gods} className="navText" href="/gods">Gods</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )

}

export default Navigation