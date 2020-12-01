import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Q1 from "./Questions/Q1.component";
import Q2 from "./Questions/Q2.component";
import Q3 from "./Questions/Q3.component";
import Q4 from "./Questions/Q4.component";
import Q5 from "./Questions/Q5.component";
import Q6 from "./Questions/Q6.component";
import Q7 from "./Questions/Q7.component";
import Q8 from "./Questions/Q8.component";
import Q9 from "./Questions/Q9.component";
import Q10 from "./Questions/Q10.component";

function App() {
    return (
        <div className="App">

            <Tabs defaultActiveKey="Question1" id="uncontrolled-tab-example">

                <Tab eventKey="Question1" title="Question1">
                    <Q1/>
                </Tab>
                <Tab eventKey="Question2" title="Question2">
                    <Q2/>
                </Tab>
                <Tab eventKey="Question3" title="Question3">
                    <Q3/>
                </Tab>
                <Tab eventKey="Questio4" title="Question4">
                    <Q4/>
                </Tab>
                <Tab eventKey="Question5" title="Question5">
                    <Q5/>
                </Tab>
                <Tab eventKey="Question6" title="Question6">
                    <Q6/>
                </Tab>
                <Tab eventKey="Question7" title="Question7">
                    <Q7/>
                </Tab>
                <Tab eventKey="Question8" title="Question8">
                    <Q8/>
                </Tab>
                <Tab eventKey="Question9" title="Question9">
                    <Q9/>
                </Tab>
                <Tab eventKey="Question10" title="Question10">
                    <Q10/>
                </Tab>

            </Tabs>

        </div>
    );
}

export default App;
