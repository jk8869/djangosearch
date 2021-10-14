import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project from './page/Project';
import { Project as ProjectInterface, projectReducer } from './interface/Project';

type ProjectItemProps = {
  project: ProjectInterface;
}

const store = createStore(projectReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path="/project/:id"
            render={({ location }) => {
              const { state } = location;
              console.log((state as ProjectItemProps).project);
              return <Project project={(state as ProjectItemProps).project} />;
            }}
          />
        </Switch>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
