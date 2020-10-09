import { useRouter } from 'next/router'
import Navbar from '../components/Navbar.js';

export default function Esports() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <p>Hello, I'm the {asPath} page</p>
        </>
    )
}