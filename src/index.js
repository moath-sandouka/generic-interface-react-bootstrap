import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
			<App />
		</Router>
    </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
