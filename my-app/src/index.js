import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'normalize.css';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
// import reactRouterFetch from 'react-router-fetch'
// const routes = [
//   path: '/',
//   component: TripId,
//   fetchInitialData: () => fetchTripId()

// ]
const routing = (
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (module.hot) {
    module.hot.accept();
}

serviceWorker.unregister();