import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project from './page/Project';
import { projectReducer } from './redux/reducers';
import ProjectList from './page/ProjectList';
import Navbar from './component/Navbar';
import ProjectForm from './component/ProjectForm';

const store = createStore(projectReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/projectForm"
            component={ProjectForm}
          />
          <Route
            exact
            path="/project/:id"
            component={Project}
          />
          <Route
            exact
            path="/projects"
            component={ProjectList}
          />
          <Route
            exact
            path="/"
            component={ProjectList}
          />
          <App />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
