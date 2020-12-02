import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchSparQL from "../fetch.service";
import ResponseTableComponent from "../ResponseTable.Component";

import Form from "react-bootstrap/Form";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Query.scss"

function Q4() {

    let [response, setResponse] = React.useState({});
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "select * where {\n"+
        "    ?s rdf:type <http://example.org/csv/MeanEarningRecord> .\n"+
        "    ?s <http://dbpedia.org/ontology/censusYear> \"2018\" .\n"+
        "	?s <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?s <http://dbpedia.org/ontology/average> ?mean .\n"+
        "    \n"+
        "    ?secSchool <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?secSchool <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?secSchool <http://www.w3.org/2000/01/rdf-schema#label> \"Secondary schools\" .\n"+
        "    ?secSchool <http://rdf-vocabulary.ddialliance.org/discovery#statisticsCategory> \"Schools providing Second Level Education  (Number)\" .\n"+
        "    ?secSchool <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?secSchoolValue\n"+
        "    #Filter (?secSchoolValue !=  \"n/a\")\n"+
        "}\n"+
        "ORDER BY ASC(xsd:integer(?secSchoolValue))\n"+
        "limit 12\n"+
        "\n"+
        "\n";
    async function getResultList() {
        const response = await fetchSparQL(query);
        const myJson = await response.json();
        setResponse(myJson);
    }
    function resetResultList() {
        setResponse({});
    }

    return(
        <Container id="container">
            <br/>
            <br/>
            <br/>
            <Row>
                <Card id="card">
                    <Col>

                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                Question 4
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="h4">
                                For the county with the lowest number of secondary schools, how much does the population earn on average ?
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p" align="right">
                                Dataset used:
                                1. EDA69
                                2. NEA08
                            </Typography>
                        </CardContent>
                    </Col>
                    <Col id="buttons">
                        <Button id="btn" color="primary" class="btn btn-primary" variant="outlined" onClick={() => getResultList()}>Execute Query</Button>
                        <Button id="btn" color="primary" class="btn btn-outline-primary" variant="outlined" onClick={() => resetResultList()}>Reset Result</Button>
                    </Col>
                </Card>
            </Row>
            <br/>
            <br/>
            <Row id="query__row">
                <Form.Control defaultValue={query} as="textarea" disabled={true}  rows="8" />
            </Row>
            <br/>
            <br/>
            <Row id="response__row">
                <ResponseTableComponent response={response} />
            </Row>
            <br/>
            <br/>
        </Container>

    )
}


export default Q4;
