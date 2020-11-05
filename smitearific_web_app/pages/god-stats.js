import { useRouter } from 'next/router'
import Navbar from '../components/Navbar.js';
import ScrollArrow from '../components/scrollArrow.js';
import BootstrapTable from 'react-bootstrap-table-next';

export default function GodStats() {
    const { asPath } = useRouter()
    const products = [{
        "id": 1,
        "name": "Name 1",
        "price": 1.50,
    }, {
        "id": 2,
        "name": "Name 2",
        "price": 3.00,
    }, {
        "id": 3,
        "name": "Name 3",
        "price": 10.00,
    }, {
        "id": 4,
        "name": "Name 4",
        "price": 9.99,
    }]
    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
    }, {
        dataField: 'price',
        text: 'Product Price',
        sort: true
    }];

    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }];
    return (
        <>
            <Navbar />
            <ScrollArrow />
            <p>This is the {asPath} page</p>

            <BootstrapTable
                className="text-white"
                bootstrap4
                keyField="id"
                data={products}
                columns={columns}
                defaultSorted={defaultSorted}
            />
        </>
    )
}