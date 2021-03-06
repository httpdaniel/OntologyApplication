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

function Q2() {

    let [response, setResponse] = React.useState({});
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "select  (?c as ?CountyName) (?ageeduceased_value as ?AgeEducationCeased)  (SUM(xsd:integer(?degree_value)) as ?DegreeHolders) where {\n"+
        "    ?ageeduceased <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?ageeduceased <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?ageeduceased <http://rdf-vocabulary.ddialliance.org/discovery#statisticsCategory> \"Average_Age_Education_Ceased_(Number)\".\n"+
        "    ?ageeduceased <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?ageeduceased_value .\n"+
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
        "    ?bachelordegree <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?degree_value .\n"+
        "    ?bachelordegree <http://xmlns.com/foaf/0.1/#age> \"Total persons\" .\n"+
        "}\n"+
        "GROUP BY ?c ?mean ?ageeduceased_value\n"+
        "ORDER BY ASC(?degreeHolder_sum)\n"+
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
        <Container id="container">
            <br/>
            <br/>
            <br/>
            <Row>
                <Card id="card">
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
                                1. EZ073
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


export default Q2;
