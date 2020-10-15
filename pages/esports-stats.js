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
            <p>Hello, I'm the {asPath} page</p>
        </>
    )
}