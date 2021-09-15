import React from 'react';
import ReactDOM from 'react-dom';
import PageNotFoundContainer from './';

it('Render Home/Index Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageNotFoundContainer />, div); // render the page without crashing
});
