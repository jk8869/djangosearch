import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project from './page/Project';
import { Project as ProjectInterface } from './interface/Project';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="project/:id">
          render=
          {(project : ProjectInterface) => (
            <Project
              project={project}
            />
          )}
        </Route>
      </Switch>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
