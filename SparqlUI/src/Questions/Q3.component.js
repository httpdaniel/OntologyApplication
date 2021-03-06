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

function Q3() {

    let [response, setResponse] = React.useState({});
    let query = "# This query will combine the dataset from mean earning and education level.  \n"+
        "# For both dataset the latest available data is displayed, even if they are not entirely in the same timeframe. \n"+
        "# The eligible record for education level will be calculated before its related county will be matched against earning record. \n"+
        "\n"+
        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "\n"+
        "select (?c as ?CountyName) (?mean as ?MeanEarning) (?ageeduceased_value as ?AgeEducationCeased) where {\n"+
        "    ?s rdf:type <http://example.org/csv/MeanEarningRecord> .\n"+
        "    ?s <http://dbpedia.org/ontology/censusYear> \"2018\" .\n"+
        "    ?s <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?s <http://dbpedia.org/ontology/average> ?mean .\n"+
        "    \n"+
        "    ?ageeduceased <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?ageeduceased <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?ageeduceased <http://rdf-vocabulary.ddialliance.org/discovery#statisticsCategory> \"Average_Age_Education_Ceased_(Number)\".\n"+
        "    ?ageeduceased <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?ageeduceased_value\n"+
        "}\n"+
        "ORDER BY ASC(xsd:integer(?mean))\n"+
        "limit 10000\n"+
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
                                Question 3
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="h4">
                                What county has the lowest earning and what age on average does
                                their education cease?
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p" align="right">
                                Dataset used:
                                1. NEA08
                                2. EA033
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


export default Q3;
