import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation'
import ScrollArrow from '../components/scrollArrow.js';
import GodsService from '../services/GodsService';
import godInfoHelper from '../helpers/godInfoHelper';

function Gods({ godData }) {
    const [gods, setGods] = useState();

    useEffect(() => {
        setGods(godData);
    }, [godData.length])

    return (
        <>
            <Navbar />
            <Navigation />
            <ScrollArrow />
            <div className="card-deck mx-auto mb-4">
                {gods != null ? gods.map((god) =>
                    <Link href={"/gods/" + god.name}>
                        <div key={god.name} className="card godCard">
                            <div className="godIcon">
                                <img src={god.icon} />
                            </div>
                            <div className="card-body text-center">
                                <div className="d-flex">
                                    <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                    <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                                </div>
                                <h5 className="godName">{godInfoHelper.ProperGodNames(god.name)}</h5>
                                <p className="godTitle">{god.title}</p>
                            </div>
                        </div>
                    </Link>
                ) : <p>API can't be reached</p>}
            </div>
        </>
    )
}

export default Gods;

export async function getServerSideProps() {
    let apiRes = null;
    try {
        (apiRes = await GodsService.GetAllGodsInfo());
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