import React, { useState, useEffect } from 'react'

function RoleBadge(value) {
    const [role, setRole] = useState()

    useEffect(() => {
        if (value != undefined) {
            setRole(value);
        }
    }, [value])

    switch (role) {
        case "Warrior":
            return (
                <p><img className="type" src="https://i.imgur.com/ToqTKZh.png" alt="warrior" /> {role}</p>
            )
            break;

        case "Assassin":
            return (
                <p><img className="type" src="https://i.imgur.com/QFPq2Qe.png" alt="assassin" /> {role}</p>
            )
            break;

        case "Mage":
            return (
                <p><img className="type" src="https://i.imgur.com/AHheMFR.png" alt="mage" /> {role}</p>
            )
            break;

        case "Hunter":
            return (
                <p><img className="type" src="https://i.imgur.com/tW0u9EU.png" alt="hunter" /> {role}</p>
            )
            break;

        case "Guardian":
            return (
                <p><img className="type" src="https://i.imgur.com/aXtBO0n.png" alt="guardian" /> {role}</p>
            )
            break;

        default:
            return (
                <p><img className="type" src="https://i.imgur.com/rpY7Vt9.png" alt="no role" /> No Role Assigned</p>
            )
            break;
    }

}

export default RoleBadge;