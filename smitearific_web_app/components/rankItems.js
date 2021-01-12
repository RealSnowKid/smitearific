import React, { useState, useEffect } from 'react'

function rankItems(rankItems) {
    const [items, setItems] = useState();

    useEffect(() => {
        if (rankItems != undefined && rankItems != "[]") {
            setItems(JSON.parse(rankItems));
        }
    }, [rankItems])

    return (
        <>
            {items != null ? items.map((item) =>
                <p key={item.value}><b>{item.description}</b> {item.value}</p>
            ) : <></>}

        </>
    )
}

export default rankItems;