import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar.js';
import NavigationEsports from '../components/navigationEsports.js';
import ScrollArrow from '../components/scrollArrow.js';
import { Button, ButtonGroup } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import GodsService from '../services/GodsService';
import statsTableHelpers from '../helpers/statsTableHelpers';

export default function EsportsStats() {
    const [godData, setGodData] = useState([]);
    const { SearchBar } = Search;
    const searcBar = useRef(null);

    useEffect(() => {
        GodsService.GetGods()
            .then(
                response => {
                    statsTableHelpers.ProperGodNames(response);
                    setGodData(response.data._embedded.godses);
                }
            )
    }, []);

    function godFormatter(cell) {
        let source = statsTableHelpers.NameToSource(cell);

        return (
            <div className="d-flex align-items-center">
                <img className="godStatsIcon mr-4" src={source}></img>
                <p>{cell}</p>
            </div>
        );
    }

    const searchFill = () => {
        searcBar.current.props.onSearch("");
    };
    const searchSolo = () => {
        searcBar.current.props.onSearch("Solo");
    };
    const searchJung = () => {
        searcBar.current.props.onSearch("Jung");
    };
    const searchMid = () => {
        searcBar.current.props.onSearch("Mid");
    };
    const searchAdc = () => {
        searcBar.current.props.onSearch("ADC");
    };
    const searchSupp = () => {
        searcBar.current.props.onSearch("Supp");
    };

    const columns = [{
        dataField: 'god',
        text: 'God',
        sort: true,
        title: true,
        formatter: godFormatter
    }, {
        dataField: 'winRate',
        text: 'Win Rate',
        sort: true,
        searchable: false
    }, {
        dataField: 'pickRate',
        text: 'Pick Rate',
        sort: true,
        searchable: false
    }, {
        dataField: 'banRate',
        text: 'Ban Rate',
        sort: true,
        searchable: false
    }, {
        dataField: 'pandBRate',
        text: 'Pick & Ban Rate',
        sort: true,
        searchable: false
    }, {
        dataField: 'role',
        text: 'Role',
        hidden: true
    }, {
        dataField: 'secondaryRole',
        text: '2nd Role',
        hidden: true
    }];

    const defaultSorted = [{
        dataField: 'pandBRate',
        order: 'desc'
    }];
    return (
        <>
            <Navbar />
            <NavigationEsports />
            <ScrollArrow />

            <div className="tableContainer">
                <ToolkitProvider
                    bootstrap4
                    keyField="god"
                    data={godData}
                    columns={columns}
                    search
                >
                    {
                        props => (
                            <div>
                                <div className="d-flex mb-4 justify-content-between align-items-center">
                                    <SearchBar ref={searcBar} {...props.searchProps} />
                                    <ButtonGroup>
                                        <Button variant="light"><img onClick={searchFill} className="roleStatsIcon" alt="fill" src="https://i.imgur.com/d5q0DA7.png"></img></Button>
                                        <Button variant="light"><img onClick={searchSolo} className="roleStatsIcon" alt="solo" src="https://i.imgur.com/7G2OSFj.png"></img></Button>
                                        <Button variant="light"><img onClick={searchJung} className="roleStatsIcon" alt="jung" src="https://i.imgur.com/l1BUe0w.png"></img></Button>
                                        <Button variant="light"><img onClick={searchMid} className="roleStatsIcon" alt="mid" src="https://i.imgur.com/8LgQst7.png"></img></Button>
                                        <Button variant="light"><img onClick={searchAdc} className="roleStatsIcon" alt="adc" src="https://i.imgur.com/O6RRFBd.png"></img></Button>
                                        <Button variant="light"><img onClick={searchSupp} className="roleStatsIcon" alt="supp" src="https://i.imgur.com/FsktGB1.png"></img></Button>
                                    </ButtonGroup>
                                </div>
                                <BootstrapTable
                                    {...props.baseProps}
                                    defaultSorted={defaultSorted}

                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        </>
    )
}