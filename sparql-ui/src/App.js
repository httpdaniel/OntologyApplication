import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import { Select, FormControl, MenuItem, Card, CardContent } from "@material-ui/core";

function App() {

  // selected query
  const [query, setQuery] = useState("Test");

  // change query displayed in dropdown
  const selectQuery = async(e) => {
    const selectedQuery = e.target.value;
    setQuery(selectedQuery);
  }

  return (
    <div className="app">

      <div className="app__header"></div>

      <div className="app__body">
        <Card className="query__container">
          <CardContent>
            <h3>Select Query: </h3>
            <FormControl className="query__dropdown">
              <Select variant="outlined" onChange={selectQuery} value={query}>
                <MenuItem value="query1">
                  query1
                </MenuItem>
                <MenuItem value="query2">
                  query2
                </MenuItem>
                <MenuItem value="query3">
                  query3
                </MenuItem>
              </Select>
            </FormControl>
            <Card className="query__result">
              <CardContent>
                <h3>Query Result:</h3>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default App;