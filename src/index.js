import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopBar from './components/TopBar';
import About from './components/About';
import Price from './components/Price';
import Features from './components/Features';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopBar />
      <Switch>
        <Route exact path ="/" component={App} />
        <Route path="/info" component={About} />
        <Route path="/price" component={Price} />
        <Route path="/features" component={Features} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
