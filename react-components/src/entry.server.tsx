import { App } from './App';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const render = (url: string, opts: RenderToPipeableStreamOptions) => {
  return ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
};
