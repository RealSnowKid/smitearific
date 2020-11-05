import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

function navigationEsports() {
    const { asPath } = useRouter();
    const [path, setPath] = useState();
    const [home, setHome] = useState(false);
    const [tierlist, setTierlist] = useState(false);
    const [builds, setBuilds] = useState(false);

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
            case '/esports-stats':
                setHome(true);
                setTierlist(false);
                setBuilds(false);
                break;

            case '/esports-tier-list':
                setHome(false);
                setTierlist(true);
                setBuilds(false);
                break;

            case '/builds':
                setHome(false);
                setTierlist(false);
                setBuilds(true);
                break;

            default:
                setHome(false);
                setTierlist(false);
                setBuilds(false);
                break;
        }
    }

    return (
        <>
            <Nav className="navLinksContainer justify-content-center" defaultActiveKey="/esports-stats">
                <Nav.Item className="navItem">
                    <Nav.Link active={home} className="navText" href="/esports-stats">Stats</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link active={builds} className="navText" href="/builds">Builds</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link active={tierlist} className="navText" href="/esports-tier-list">Esports Tier List</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )

}

export default navigationEsports