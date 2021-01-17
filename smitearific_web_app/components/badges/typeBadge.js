import React, { useState, useEffect } from 'react'

function TypeBadge(value) {
    const [attackType, setAttackType] = useState();
    const [damageType, setDamageType] = useState();

    useEffect(() => {
        if (value != undefined) {
            setAttackType(value.split(", ")[0]);
            setDamageType(value.split(", ")[1]);
        }
    }, [value])

    switch (value) {
        case "Ranged, Magical":
            return (
                <>
                    <p><img className="type" src="https://i.imgur.com/KwS7jBM.png" alt="ranged" /> {attackType}</p>
                    <p><img className="type" src="https://i.imgur.com/eVcHWaQ.png" alt="magical" /> {damageType}</p>
                </>
            )
            break;

        case "Ranged, Physical":
            return (
                <>
                    <p><img className="type" src="https://i.imgur.com/KwS7jBM.png" alt="ranged" /> {attackType}</p>
                    <p><img className="type" src="https://i.imgur.com/Xi87075.png" alt="physical" /> {damageType}</p>
                </>
            )
            break;

        case "Melee, Physical":
            return (
                <>
                    <p><img className="type" src="https://i.imgur.com/sQCO3dB.png" alt="melee" /> {attackType}</p>
                    <p><img className="type" src="https://i.imgur.com/Xi87075.png" alt="physical" /> {damageType}</p>
                </>
            )
            break;

        case "Melee, Magical":
            return (
                <>
                    <p><img className="type" src="https://i.imgur.com/sQCO3dB.png" alt="melee" /> {attackType}</p>
                    <p><img className="type" src="https://i.imgur.com/eVcHWaQ.png" alt="magical" /> {damageType}</p>
                </>
            )
            break;

        default:
            return (
                <>
                    <p><img className="type" src="https://i.imgur.com/YQwJ7RY.png" alt="no attack type" /> No Attack Type</p>
                    <p><img className="type" src="https://i.imgur.com/ntgfVFJ.png" alt="no damage type" /> No Damage Type</p>
                </>
            )
            break;
    }

}

export default TypeBadge;