import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar.js';
import NavigationEsports from '../../components/navigationEsports.js';

export default function GodBuild() {
    const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <NavigationEsports />
            <p>Hello, I'm the {asPath} page</p>
        </>
    )
}