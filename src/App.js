import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  const pageSize=15;
  // picking key from env,
  const apiKey=process.env.REACT_APP_API_KEY;
  return (
    <div>
        <Router>
          <Navbar/>
          <Switch>
            {/* key is used to force mounting the component again to load based on the apiKey={apiKey} category  */}
            <Route exact path="/">
              <NewsComp key="general" country="in" pageSize={pageSize} apiKey={apiKey} category="general"/>
            </Route>
            <Route exact path="/general">
              <NewsComp key="general" country="in" pageSize={pageSize} apiKey={apiKey} category="general"/>
            </Route>
            <Route exact path="/sports">
              <NewsComp key="sports" country="in" pageSize={pageSize} apiKey={apiKey} category="sports"/>
            </Route>
            <Route exact path="/science">
              <NewsComp key="science" country="in" pageSize={pageSize} apiKey={apiKey} category="science"/>
            </Route>
            <Route exact path="/technology">
              <NewsComp key="technology" country="in" pageSize={pageSize} apiKey={apiKey} category="technology"/>
            </Route>
            <Route exact path="/health">
              <NewsComp key="health" country="in" pageSize={pageSize} apiKey={apiKey} category="health"/>
            </Route>
            <Route exact path="/business">
              <NewsComp key="business" country="in" pageSize={pageSize} apiKey={apiKey} category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <NewsComp key="entertainment" country="in" pageSize={pageSize} apiKey={apiKey} category="entertainment"/>
            </Route>
          </Switch>
      </Router>
    </div>
  )
} 

export default App