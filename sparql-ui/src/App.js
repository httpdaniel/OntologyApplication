import React from 'react';
import './styles/App.scss';
import { Card,CardContent } from "@material-ui/core";

function App() {
  return (
    <div className="app">

      <div className="app__header"></div>

      <div className="app__body">
        <Card className="query__container"></Card>
      </div>

    </div>
  )
}

export default App;