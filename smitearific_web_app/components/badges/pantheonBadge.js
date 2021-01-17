import React, { useState, useEffect } from 'react'

function PantheonBadge(value) {
    const [pantheon, setPantheon] = useState()

    useEffect(() => {
        if (value != undefined) {
            setPantheon(value);
        }
    }, [value])

    switch (pantheon) {
        case "Greek":
            return (
                <p><img className="type" src="https://i.imgur.com/lLaI2pd.png" alt="greek" /> {pantheon}</p>
            )
            break;

        case "Hindu":
            return (
                <p><img className="type" src="https://i.imgur.com/kKGAa0G.png" alt="hindu" /> {pantheon}</p>
            )
            break;

        case "Mayan":
            return (
                <p><img className="type" src="https://i.imgur.com/pJ72OJt.png" alt="mayan" /> {pantheon}</p>
            )
            break;

        case "Japanese":
            return (
                <p><img className="type" src="https://i.imgur.com/os93xT6.png" alt="japanese" /> {pantheon}</p>
            )
            break;

        case "Egyptian":
            return (
                <p><img className="type" src="https://i.imgur.com/osqPLFE.png" alt="egyptian" /> {pantheon}</p>
            )
            break;

        case "Chinese":
            return (
                <p><img className="type" src="https://i.imgur.com/NTozQfH.png" alt="chinese" /> {pantheon}</p>
            )
            break;

        case "Roman":
            return (
                <p><img className="type" src="https://i.imgur.com/y93NbpJ.png" alt="roman" /> {pantheon}</p>
            )
            break;

        case "Slavic":
            return (
                <p><img className="type" src="https://i.imgur.com/uAmYbfv.png" alt="slavic" /> {pantheon}</p>
            )
            break;

        case "Arthurian":
            return (
                <p><img className="type" src="https://i.imgur.com/YE9sE9V.png" alt="arthurian" /> {pantheon}</p>
            )
            break;

        case "Celtic":
            return (
                <p><img className="type" src="https://i.imgur.com/G9KErPl.png" alt="celtic" /> {pantheon}</p>
            )
            break;

        case "Great Old Ones":
            return (
                <p><img className="type" src="https://i.imgur.com/PpcUSoQ.png" alt="great old ones" /> {pantheon}</p>
            )
            break;

        case "Norse":
            return (
                <p><img className="type" src="https://i.imgur.com/1twxXgP.png" alt="norse" /> {pantheon}</p>
            )
            break;

        case "Polynesian":
            return (
                <p><img className="type" src="https://i.imgur.com/JgCfCXq.png" alt="polynesian" /> {pantheon}</p>
            )
            break;

        case "Voodoo":
            return (
                <p><img className="type" src="https://i.imgur.com/sefPXkH.png" alt="voodoo" /> {pantheon}</p>
            )
            break;

        case "Yoruba":
            return (
                <p><img className="type" src="https://i.imgur.com/fHlg8j3.png" alt="yoruba" /> {pantheon}</p>
            )
            break;

        default:
            return (
                <p><img className="type" src="https://i.imgur.com/rpY7Vt9.png" alt="no pantheon" /> No Pantheon Assigned</p>
            )
            break;
    }

}

export default PantheonBadge;