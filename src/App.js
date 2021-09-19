import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  // picking key from env,
  apiKey=process.env.REACT_APP_API_KEY;
  render() {
    return (
      <div>
         <Router>
            <Navbar/>
            <Switch>
              {/* key is used to force mounting the component again to load based on the apiKey={this.apiKey} category  */}
              <Route exact path="/">
                <NewsComp key="general" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="general"/>
              </Route>
              <Route exact path="/general">
                <NewsComp key="general" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="general"/>
              </Route>
              <Route exact path="/sports">
                <NewsComp key="sports" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="sports"/>
              </Route>
              <Route exact path="/science">
                <NewsComp key="science" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="science"/>
              </Route>
              <Route exact path="/technology">
                <NewsComp key="technology" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="technology"/>
              </Route>
              <Route exact path="/health">
                <NewsComp key="health" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="health"/>
              </Route>
              <Route exact path="/business">
                <NewsComp key="business" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="business"/>
              </Route>
              <Route exact path="/entertainment">
                <NewsComp key="entertainment" country="in" pageSize={this.pageSize} apiKey={this.apiKey} category="entertainment"/>
              </Route>
            </Switch>
        </Router>
      </div>
    )
  }
} 