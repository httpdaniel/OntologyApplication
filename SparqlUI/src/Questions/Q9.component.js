
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

function Q9() {

    let [response, setResponse] = React.useState({});
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"+
        "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n"+
        "select  ?c ?mean  (SUM(xsd:integer(?nodegreesum))/SUM(xsd:integer(?degree_value)) as ?nodegree_perc) ?secSchoolValue ?averageEduEndValue where {\n"+
        "    ?s rdf:type <http://example.org/csv/MeanEarningRecord> .\n"+
        "    ?s <http://dbpedia.org/ontology/censusYear> \"2018\" .\n"+
        "    ?s <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?s <http://dbpedia.org/ontology/average> ?mean .\n"+
        "    \n"+
        "    ?secSchool <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?secSchool <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?secSchool <http://www.w3.org/2000/01/rdf-schema#label> \"Secondary schools\" .\n"+
        "    ?secSchool <http://rdf-vocabulary.ddialliance.org/discovery#statisticsCategory> \"Schools providing Second Level Education  (Number)\" .\n"+
        "    ?secSchool <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?secSchoolValue .\n"+
        "    \n"+
        "    ?averageEduEnd <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?averageEduEnd <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    ?averageEduEnd <http://rdf-vocabulary.ddialliance.org/discovery#statisticsCategory> \"Average_Age_Education_Ceased_(Number)\" .\n"+
        "    ?averageEduEnd <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?averageEduEndValue .\n"+
        "    \n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/county> ?c .\n"+
        "    ?bachelordegree <http://dbpedia.org/ontology#censusYear> \"2016\" .\n"+
        "    \n"+
        "    ?bachelordegree <http://purl.org/dc/terms#educationLevel>   ?degree.\n"+
        "	\n"+
        "    ?bachelordegree <http://dbpedia.org/ontology/sex> \"Both sexes\".\n"+
        "    ?bachelordegree <http://rdf-vocabulary.ddialliance.org/discovery#frequency> ?degree_value .\n"+
        "    \n"+
        "    BIND ( IF(?degree in (\"Doctorate (Ph.D.)\"), ?degree_value, 0 ) as ?nodegreesum )\n"+
        "   \n"+
        "    \n"+
        "}\n"+
        "GROUP BY ?c ?mean ?secSchoolValue ?averageEduEndValue\n"+
        "ORDER BY DESC(?nodegree_perc)\n"+
        "limit 10\n"+
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
                                Question 9
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="h4">
                                For the county with highest percentage of doctor degree holders, what is the mean earning, average age for ending education, and the number of secondary school
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p" align="right">
                                Dataset used: All
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


export default Q9;
