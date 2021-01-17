import React, { useState, useEffect } from 'react'

function LaneBadge(value) {
    const [lane, setLane] = useState()

    useEffect(() => {
        if (value != undefined) {
            setLane(value);
        }
    }, [value])

    switch (lane) {
        case "Solo":
            return (
                <p><img className="type" src="https://i.imgur.com/7mymIjx.png" alt="solo" /> {lane} Lane</p>
            )
            break;

        case "Jungle":
            return (
                <p><img className="type" src="https://i.imgur.com/PVmW2dg.png" alt="jungle" /> {lane}</p>
            )
            break;

        case "Mid":
            return (
                <p><img className="type" src="https://i.imgur.com/1H7MWCR.png" alt="mid" /> {lane} Lane</p>
            )
            break;

        case "AD Carry":
            return (
                <p><img className="type" src="https://i.imgur.com/vLamKHO.png" alt="adc" /> {lane}</p>
            )
            break;

        case "Support":
            return (
                <p><img className="type" src="https://i.imgur.com/NW9fIN3.png" alt="support" /> {lane}</p>
            )
            break;

        default:
            return (
                <p><img className="type" src="https://i.imgur.com/zEGS1cA.png" alt="no lane" /> No Lane Assigned</p>
            )
            break;
    }

}

export default LaneBadge;