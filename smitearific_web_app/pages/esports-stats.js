import { useRouter } from 'next/router'
import Navbar from '../components/Navbar.js';
import NavigationEsports from '../components/navigationEsports.js';
import ScrollArrow from '../components/scrollArrow.js';

export default function Esports() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <NavigationEsports />
            <ScrollArrow />
            <p>This is the {asPath} page</p>
        </>
    )
}