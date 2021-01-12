import React, { useState, useEffect } from 'react';

function menuItems(mana, cooldown, menuItems) {
    const [manaVal, setMana] = useState();
    const [cooldownVal, setCooldown] = useState();
    const [items, setItems] = useState()

    useEffect(() => {
        if (mana != undefined && cooldown != undefined && menuItems != undefined) {
            setMana(mana);
            setCooldown(cooldown);
            setItems(JSON.parse(menuItems));
        }
        else if (mana == undefined && cooldown == undefined && menuItems != undefined) {
            setMana(null);
            setCooldown(null);
            setItems(JSON.parse(menuItems));
        }
    }, [mana, cooldown, menuItems])



    return (
        <>
            {manaVal != null ? <p><b>Cost: </b> {manaVal}</p> : <></>}
            {cooldownVal != null ? <p><b>Cooldown: </b> {cooldownVal}</p> : <></>}
            {items != null ? items.map((item) =>
                <p key={item.value}><b>{item.description}</b> {item.value}</p>
            ) : <p>failure</p>}
        </>
    )

}

export default menuItems;