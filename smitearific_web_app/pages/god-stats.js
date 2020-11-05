import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar.js';
import ScrollArrow from '../components/scrollArrow.js';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import GodsService from '../services/GodsService';

export default function GodStats() {
    const { asPath } = useRouter();
    const [godData, setGodData] = useState([]);

    useEffect(() => {
        GodsService.GetGods()
            .then(
                response => {
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
        dataField: 'prevWinRate',
        text: 'Previous Win Rate',
        sort: true
    }, {
        dataField: 'pickRate',
        text: 'Pick Rate',
        sort: true
    }, {
        dataField: 'prevPickRate',
        text: 'Previous Pick Rate',
        sort: true
    }, {
        dataField: 'banRate',
        text: 'Ban Rate',
        sort: true
    }, {
        dataField: 'prevBanRate',
        text: 'Previous Ban Rate',
        sort: true
    }, {
        dataField: 'pandBRate',
        text: 'Pick and Ban Rate',
        sort: true
    }, {
        dataField: 'prevPAndBRate',
        text: 'Previous Pick and Ban Rate',
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
            <p>This is the {asPath} page</p>

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