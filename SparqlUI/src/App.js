import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import "./App.css"
import "./styles/App.scss"
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

            <div className='app__header'>
                <h2 id="title">Education Ontology</h2>
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" width="458.79" height="294.56" viewBox="0 0 458.79 294.56">
  <defs>
  </defs>
  <title>icon</title>
  <path class="cls-1" d="M456.22,330.59a33.19,33.19,0,0,0-17.92-17.92V196.44a20,20,0,0,0,3.08-7.68,13.85,13.85,0,0,0-7.68-12.29L225.82,83.29a11.79,11.79,0,0,0-10.24,0L7.71,176.47A12.3,12.3,0,0,0,0,188.76,11.79,11.79,0,0,0,8.74,200L79.9,224.6v92.16A12.8,12.8,0,0,0,85,327a12.31,12.31,0,0,0,11.78,1.54,354.33,354.33,0,0,1,247.3,0l4.6,1a12.28,12.28,0,0,0,7.17-2.56,11.76,11.76,0,0,0,5.63-10.24V224.09l51.2-16.9V312.67a33.28,33.28,0,1,0,43.52,17.92Z" transform="translate(0 -82.12)"/>
</svg>
            </div>

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
