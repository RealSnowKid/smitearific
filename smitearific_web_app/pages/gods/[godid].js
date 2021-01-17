import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar.js';
import Navigation from '../../components/Navigation';
import rankItems from '../../components/rankItems';
import menuItems from '../../components/menuItems';
import LaneBadge from '../../components/badges/laneBadge';
import RoleBadge from '../../components/badges/roleBadge';
import PantheonBadge from '../../components/badges/pantheonBadge';
import TypeBadge from '../../components/badges/typeBadge';
import { Tabs, Tab } from 'react-bootstrap';
import ScrollArrow from '../../components/scrollArrow.js';
import GodsService from '../../services/GodsService';
import godInfoHelper from '../../helpers/godInfoHelper';

function GodPage({ godData }) {
    const [godInfo, setGodInfo] = useState({});

    useEffect(() => {
        setGodInfo(godData[0]);
    }, [godData[0].type])

    // function getAttackType(data) {
    //     if (data != null) {
    //         return (data.split(", ")[0]);
    //     }
    // }

    // function getDamageType(data) {
    //     if (data != null) {
    //         return (data.split(", ")[1]);
    //     }
    // }

    return (
        <>
            <Navbar />
            <Navigation />
            <ScrollArrow />
            <div className="containter mx-auto godInfo">
                <div className="row">
                    <div className="godIcon">
                        <img src={godInfo.icon} />
                    </div>
                    <div className="godNfo">
                        <div className="d-flex align-items-center">
                            <h1 className="font-weight-bold">{godInfo.name != undefined ? godInfoHelper.ProperGodNames(godInfo.name) : <></>}</h1>
                            <h2 className="ml-6">{godInfo.title}</h2>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            {LaneBadge(godInfo.lane)}
                            {RoleBadge(godInfo.role)}
                            {PantheonBadge(godInfo.pantheon)}
                            {TypeBadge(godInfo.type)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column mx-auto abilities mb-3">
                <h2>Abilities</h2>
                <Tabs fill defaultActiveKey="passive" id="uncontrolled-tab-example" className="mt-4">
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="passive" title={<img className="abilityIcon" src={godInfo.ability5URL} />}>
                        <h3>{godInfo.ability5Name}</h3>
                        <p>{godInfo.ability5Description}</p>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="attributes col-5">
                                {menuItems(godInfo.ability5Cost, godInfo.ability5Cooldown, godInfo.ability5Menuitems)}
                            </div>
                            <div className="attributes col-5">
                                {rankItems(godInfo.ability5Rankitems)}
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ability1" title={<img className="abilityIcon" src={godInfo.ability1URL} />}>
                        <h3>{godInfo.ability1Name}</h3>
                        <p>{godInfo.ability1Description}</p>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="attributes col-5">
                                {menuItems(godInfo.ability1Cost, godInfo.ability1Cooldown, godInfo.ability1Menuitems)}
                            </div>
                            <div className="attributes col-5">
                                {rankItems(godInfo.ability1Rankitems)}
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ability2" title={<img className="abilityIcon" src={godInfo.ability2URL} />}>
                        <h3>{godInfo.ability2Name}</h3>
                        <p>{godInfo.ability2Description}</p>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="attributes col-5">
                                {menuItems(godInfo.ability2Cost, godInfo.ability2Cooldown, godInfo.ability2Menuitems)}
                            </div>
                            <div className="attributes col-5">
                                {rankItems(godInfo.ability2Rankitems)}
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ability3" title={<img className="abilityIcon" src={godInfo.ability3URL} />}>
                        <h3>{godInfo.ability3Name}</h3>
                        <p>{godInfo.ability3Description}</p>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="attributes col-5">
                                {menuItems(godInfo.ability3Cost, godInfo.ability3Cooldown, godInfo.ability3Menuitems)}
                            </div>
                            <div className="attributes col-5">
                                {rankItems(godInfo.ability3Rankitems)}
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ultimate" title={<img className="abilityIcon" src={godInfo.ability4URL} />}>
                        <h3>{godInfo.ability4Name}</h3>
                        <p>{godInfo.ability4Description}</p>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="attributes col-5">
                                {menuItems(godInfo.ability4Cost, godInfo.ability4Cooldown, godInfo.ability4Menuitems)}
                            </div>
                            <div className="attributes col-5">
                                {rankItems(godInfo.ability4Rankitems)}
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default GodPage;

export async function getServerSideProps({ params }) {
    // Fetch necessary data for the blog post using params.godid
    let apiRes = null;
    try {
        (apiRes = await GodsService.GetGodInfo(params.godid));
    } catch (err) {
        apiRes = err.response?.status;
    }

    if (apiRes?.data?._embedded?.godinfoes[0]?.name != null) {
        const godData = apiRes.data._embedded.godinfoes;

        return {
            props: {
                godData
            },
        };
    } else if (apiRes === 404 || apiRes === 400) {
        const godData = apiRes;

        return {
            props: {
                godData
            },
        };
    } else {
        const godData = "failure";

        return {
            props: {
                godData
            },
        };
    }
}