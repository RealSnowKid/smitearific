import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import ScrollArrow from '../components/scrollArrow.js';
import BootstrapTable from 'react-bootstrap-table-next';
import GodsService from '../services/GodsService';

export default function GodStats() {
    const [godData, setGodData] = useState([]);

    useEffect(() => {
        GodsService.GetGods()
            .then(
                response => {
                    for (let i = 0; i < response.data._embedded.godses.length; i++) {
                        const element = response.data._embedded.godses[i];
                        const regex = /^.*[A-Z].*[A-Z].*$/g;

                        switch (element.god) {
                            case "AMC":
                                response.data._embedded.godses[i].god = "Ah Muzen Cab";
                                break;

                            case "Change":
                                response.data._embedded.godses[i].god = "Chang'e";
                                break;

                            default:
                                if (element.god.match(regex)) {
                                    response.data._embedded.godses[i].god = element.god.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
                                }
                                else {
                                    response.data._embedded.godses[i].god = element.god;
                                }
                                break;
                        }
                    }
                    setGodData(response.data._embedded.godses);
                }
            )
    }, [])

    const columns = [{
        dataField: 'god',
        text: 'God',
        sort: true
    }, {
        dataField: 'winRate',
        text: 'Win Rate',
        sort: true
    }, {
        dataField: 'pickRate',
        text: 'Pick Rate',
        sort: true
    }, {
        dataField: 'banRate',
        text: 'Ban Rate',
        sort: true
    }, {
        dataField: 'pandBRate',
        text: 'Pick & Ban Rate',
        sort: true
    }, {
        dataField: 'role',
        text: 'Role',
        sort: true
    }, {
        dataField: 'secondaryRole',
        text: 'Secondary Role',
        sort: true
    }];

    const defaultSorted = [{
        dataField: 'god',
        order: 'asc'
    }];
    return (
        <>
            <Navbar />
            <ScrollArrow />

            <BootstrapTable
                bootstrap4
                keyField="god"
                data={godData}
                columns={columns}
                defaultSorted={defaultSorted}
            />
        </>
    )
}