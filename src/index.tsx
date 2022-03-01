import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from 'react-router-dom';

import './locales';
import App from './components/app_index';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import Authors from './components/routes/authors/Authors';

function About() {
	return <h2>About</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        
		<Routes>
		<Route path='/' element={<App/>}/>
		<Route path='/app/authors' element={<Authors/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
