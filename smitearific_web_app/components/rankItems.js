import React, { useState, useEffect } from 'react'

function rankItems(rankItems) {
    const [items, setItems] = useState();

    useEffect(() => {
        if (rankItems != undefined) {
            setItems(JSON.parse(rankItems));
        }
    }, [rankItems])

    return (
        <>
            {items != null ? items.map((item) =>
                <p key={item.value}><b>{item.description}</b> {item.value}</p>
            ) : <p>failure</p>}

        </>
    )
}

export default rankItems;