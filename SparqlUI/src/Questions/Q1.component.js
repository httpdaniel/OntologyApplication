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

function Q1() {

    let [response, setResponse] = React.useState({});
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "select * where {\n"+
        "    ?s rdf:type <http://example.org/csv/MeanEarningRecord> .\n"+
        "    ?s <http://dbpedia.org/ontology/censusYear> \"2018\" .\n"+
        "    ?s <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?s <http://dbpedia.org/ontology/average> ?mean .\n"+
        "    \n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?bachelordegree <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?bachelordegree <http://purl.org/dc/terms#educationLevel> \"Ordinary bachelor degree/professional qualification or both\" .\n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/sex> \"Both sexes\".\n"+
        "    ?bachelordegree <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?bachelordegree_value\n"+
        "}\n"+
        "ORDER BY DESC(xsd:integer(?bachelordegree_value))\n"+
        "limit 10\n"+
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

    return (
        <Container>
            <br/>
            <br/>
            <br/>
            <Row>
                <Card>
                <Col>

                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                Question 1
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="h4">
                                Out of the county with the highest number of bachelor degrees,
                                what is the mean earnings?
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p" align="right">
                                Dataset used:
                                1. EZ073
                                2. NEA08
                            </Typography>
                        </CardContent>
                </Col>
                <Col>
                    <Button color="primary" variant="outlined" onClick={() => getResultList()}>Execute Query</Button>
                    <Button color="primary" variant="outlined" onClick={() => resetResultList()}>Reset Result</Button>
                </Col>
            </Card>
            </Row>
            <br/>
            <br/>
            <Row>
                <h6>SPARQL Query:</h6>
                <Form.Control defaultValue={query} as="textarea" disabled={true} rows="8"/>
            </Row>
            <br/>
            <br/>
            <Row>
                <ResponseTableComponent response={response}/>
            </Row>
            <br/>
            <br/>
        </Container>

    )
}


export default Q1;
