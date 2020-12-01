
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

function Q6() {

    let [response, setResponse] = React.useState({});
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "select * where {\n"+
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
        "ORDER BY ASC(xsd:integer(?ageeduceased_value))\n"+
        "limit 10000\n"+
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
                                Question 6
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="h4">
                                Does the county with the lowest average age education ceased earn
                                the least?
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p" align="right">
                                Dataset used:
                                1. EA033
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


export default Q6;
