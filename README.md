# Ontology Application

An interactive ontology-driven application

## Overview

For this project we used a linked-data approach to model the state of education and economic status in Ireland, on a county-by-county level and individual level.

We first aggregated 4 open datasets, and they were as follows:

Level of education per county - [link](https://data.gov.ie/dataset/er-by-highest-level-of-education-completed-county-and-city-censusyear-sex-and-age-at-which-full-time)<br/>
Average age of ending full-time education - [link](https://data.gov.ie/dataset/ceased-of-population-aged-15-years-and-over-2011-to-2016-by-county-and-city-censusyear-and-statistic)<br/>
Secondary schools in Ireland - [link](https://data.gov.ie/dataset/second-level-schools-and-pupils-by-year-county-type-of-school-and-statistic)<br/>
Earning data per county - [link](https://data.gov.ie/dataset/nea08-mean-and-median-annual-earnings-by-county-sex-year-and-statistic)<br/>

Using these datasets, we created a full-scale RDF knowledge graph covering our domain. This graph is a direct representation of how the entities in our datasets relate to one another along with their properties.

An interface was built using React and Apache Jena that allows users to query our knowledge graph and gain insights that would not typically be possible using one dataset alone.

