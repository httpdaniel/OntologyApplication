
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

function Q5() {

    let [response, setResponse] = React.useState({});
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "select * where {\n"+
        "   \n"+
        "    ?secSchool <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?secSchool <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?secSchool <http://www.w3.org/2000/01/rdf-schema#label> \"Secondary schools\" .\n"+
        "    ?secSchool <http://rdf-vocabulary.ddialliance.org/discovery#statisticsCategory> \"Schools providing Second Level Education  (Number)\" .\n"+
        "    ?secSchool <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?secSchoolValue .\n"+
        "    \n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?bachelordegree <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?bachelordegree <http://purl.org/dc/terms#educationLevel> \"Ordinary bachelor degree/professional qualification or both\" .\n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/sex> \"Both sexes\".\n"+
        "    ?bachelordegree <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?bachelordegree_value .\n"+
        "    ?bachelordegree <http://xmlns.com/foaf/0.1/#age> \"Total persons\" .\n"+
        "	\n"+
        "\n"+
        "\n"+
        "}\n"+
        "ORDER BY ASC(xsd:integer(?bachelordegree_value))\n"+
        "limit 120\n"+
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
                                Question 5
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="h4">
                                For the county with the lowest number of bachelor’s degrees, how many schools there are providing secondary level education?
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p" align="right">
                                Dataset used:
                                1. EZ073
                                2. EDA69
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


export default Q5;
