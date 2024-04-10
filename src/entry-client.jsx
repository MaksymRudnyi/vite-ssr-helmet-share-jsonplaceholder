import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const ssrdata = window.__INITIAL_DATA__;
delete window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>

      <BrowserRouter>
        <HelmetProvider>
        <App fullUrl={ssrdata.fullUrl} {...ssrdata.data}/>
        </HelmetProvider>
      </BrowserRouter>

  </React.StrictMode>
)
