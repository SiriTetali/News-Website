import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey="6e0c0e3bd43d4be0b1ffab6aec804bfa"
  //process.env.REACT_APP_NEWS_API 

  render() {
    return (
      <div>
        {/*
         <Router>
          <Navbar />

         <Routes>
            <Route path="/business">
              <News apiKey={this.apiKey}   pageSize={6} country="us" category="business" />
            </Route>

            <Route path="/entertainment">
              <News apiKey={this.apiKey}   pageSize={6} country="us" category="entertainment" />
            </Route>

            <Route path="/general">
              <News apiKey={this.apiKey}   pageSize={6} country="us" category="general" />
            </Route>
            <Route path="/health">
              <News apiKey={this.apiKey}   pageSize={6} country="us" category="health" />
            </Route>
            <Route path="/science">
              <News apiKey={this.apiKey}   pageSize={6} country="us" category="science" />
            </Route>
            <Route path="/sports">
              <News apiKey={this.apiKey}   pageSize={6} country="us" category="sports" />
            </Route>
            <Route path="/technology">
              <News apiKey={this.apiKey}   pageSize={6} country="us" category="technology" />
            </Route>
          </Routes>
        </Router>*/}
        <Router>
          <Navbar />
          
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News apiKey={this.apiKey}  
                  key="business"
                  pageSize={6}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey={this.apiKey}  
                  key="entertainment"
                  pageSize={6}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News apiKey={this.apiKey}  
                  key="general"
                  pageSize={6}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News apiKey={this.apiKey}  
                  key="health"
                  pageSize={6}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News apiKey={this.apiKey}  
                  key="science"
                  pageSize={6}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={this.apiKey}  
                  key="sports"
                  pageSize={6}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News apiKey={this.apiKey}  
                  key="technology"
                  pageSize={6}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
