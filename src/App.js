// import './App.css';
// import NavBar from './components/NavBar';
// import News from './components/News';
// import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


// const App =()=>{
//    apiKey = "613806c14e584c29accd35b3bc801f12"
//   state = {
//     progress: 0
//   }
//   setProgress = (progress) => {
//     this.setState({ progress: progress })
//   }
  // render() {
  //   return (
  //     <Router>
  //       <div>
  //         <NavBar />
  //         <LoadingBar
  //           height={3}
  //           color='#f11946'
  //           progress={this.state.progress}
  //         />
  //       </div>
  //       <Routes>
  //         <Route exact path="/" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="general" pageSize={5} country="in" category="general" />} />
  //         <Route exact path="/general" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="general" pageSize={5} country="in" category="general" />} />
  //         <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
  //         <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="business" pageSize={5} country="in" category="business" />} />
  //         <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="health" pageSize={5} country="in" category="health" />} />
  //         <Route exact path="/science" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="science" pageSize={5} country="in" category="science" />} />
  //         <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="sports" pageSize={5} country="in" category="sports" />} />
  //         <Route exact path="/technology" element={<News setProgress={this.setProgress}  apiKey={this. apiKey} key="technology" pageSize={5} country="in" category="technology" />} />
  //       </Routes>
  //     </Router>
  //   )
//   }
// }
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
        </div>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  apiKey={ apiKey} key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/general" element={<News setProgress={setProgress}  apiKey={ apiKey} key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  apiKey={ apiKey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress}  apiKey={ apiKey} key="business" pageSize={5} country="in" category="business" />} />
          <Route exact path="/health" element={<News setProgress={setProgress}  apiKey={ apiKey} key="health" pageSize={5} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress}  apiKey={ apiKey} key="science" pageSize={5} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress}  apiKey={ apiKey} key="sports" pageSize={5} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress}  apiKey={ apiKey} key="technology" pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    )

}

export default App