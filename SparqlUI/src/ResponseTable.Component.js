
import React from 'react';
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";

function ResponseTableComponent(props) {

    const headers = props.headerList ? props.headerList : (Object.keys(props.response).length >0 ? props.response.head.vars.map(ele => ele): []);

    const headersTag = Object.keys(props.response).length > 0 ? headers.map((ele, id) => <th key={id}>{ele}</th>) : null;

    const rowTag = Object.keys(props.response).length > 0 ? props.response.results.bindings.map((ele,id) => {return(
        <tr key={id}>
            <td>{id}</td>
            {headers.map((val,id) => <td key={id}>{ele[val].value}</td>)}
        </tr>
    )}):[];

    return(
        <React.Fragment>
            <br/>
            <Row>
                <h6>Showing {rowTag.length} results out of {rowTag.length}</h6>
            </Row>
            <br/>
            <Table responsive striped bordered hover>
                <thead>
                <tr>
                    {headersTag && <th>Sr</th>}
                    {headersTag}
                </tr>
                </thead>
                <tbody>
                {rowTag}
                </tbody>
            </Table>
        </React.Fragment>
    )
}


export default ResponseTableComponent;