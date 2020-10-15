import { useRouter } from 'next/router'
import Navbar from '../components/Navbar.js';
import ScrollArrow from '../components/scrollArrow.js';

export default function GodStats() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <ScrollArrow />
            <p>Hello, I'm the {asPath} page</p>
        </>
    )
}