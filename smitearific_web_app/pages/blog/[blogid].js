import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar.js';
import Navigation from '../../components/Navigation.js';
import ScrollArrow from '../../components/scrollArrow.js';

export default function Blog() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <Navigation />
            <ScrollArrow />
            <p>This is the {asPath} page</p>
        </>
    )
}