import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
        </div>
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={5} country="in" category="business" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={5} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={5} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={5} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    )
  }
}
