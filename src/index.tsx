import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './features/gallery/Gallery';
import {Provider} from 'react-redux';
import {store} from './store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Gallery />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
