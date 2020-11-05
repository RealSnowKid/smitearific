import { useRouter } from 'next/router'
import Navbar from '../components/Navbar.js';
import ScrollArrow from '../components/scrollArrow.js';

export default function GodStats() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <ScrollArrow />
            <p>This is the {asPath} page</p>
        </>
    )
}