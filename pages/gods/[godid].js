import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar.js';
import Navigation from '../../components/Navigation'

export default function GodPage() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <Navigation />
            <p>Hello, I'm the {asPath} page</p>
        </>
    )
}