import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter} from "react-router-dom/server";
import { HelmetProvider } from 'react-helmet-async';



export function render({path, fullUrl, data}) {
  const helmetContext = {};
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>

        <StaticRouter location={path}>
          <HelmetProvider context={helmetContext}>
          <App fullUrl={fullUrl} {...data}/>
          </HelmetProvider>
        </StaticRouter>

    </React.StrictMode>
  )
  const { helmet } = helmetContext;
  return { html, helmet }
}
