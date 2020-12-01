
import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import fetchSparQL from "../fetch.service";
import ResponseTableComponent from "../ResponseTable.Component";

import Form from "react-bootstrap/Form";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

function Q2() {

    let [response, setResponse] = React.useState({});
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "select  ?c ?mean  (SUM(xsd:integer(?degree_value)) as ?degree_sum) where {\n"+
        "    ?s rdf:type <http://example.org/csv/MeanEarningRecord> .\n"+
        "    ?s <http://dbpedia.org/ontology/censusYear> \"2018\" .\n"+
        "    ?s <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?s <http://dbpedia.org/ontology/average> ?mean .\n"+
        "    \n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?bachelordegree <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    \n"+
        "    ?bachelordegree <http://purl.org/dc/terms#educationLevel>   ?degree.\n"+
        "            \n"+
        "    FILTER (\n"+
        "            ?degree in (\"Ordinary bachelor degree/professional qualification or both\",\"Honours bachelor degree/professional qualification or both\",\"Postgraduate diploma or degree\",\"Doctorate (Ph.D.)\")\n"+
        "    )\n"+
        "    \n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/sex> \"Both sexes\".\n"+
        "    ?bachelordegree <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?degree_value\n"+
        "}\n"+
        "GROUP BY ?c ?mean\n"+
        "ORDER BY DESC(?degree_sum)\n"+
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

    return(
        <Container>
            <br/>
            <br/>
            <br/>
            <Row>
                <Card>
                    <Col>

                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                Question 2
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="h4">
                                What county has the lowest number of third level degrees and what
                                age on average does their education cease?
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p" align="right">
                                Dataset used:
                                1. EZ273
                                2. EA033
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
                <Form.Control defaultValue={query} as="textarea" disabled={true}  rows="8" />
            </Row>
            <br/>
            <br/>
            <Row>
                <ResponseTableComponent response={response} />
            </Row>
            <br/>
            <br/>
        </Container>

    )
}


export default Q2;
