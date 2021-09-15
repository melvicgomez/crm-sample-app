import React from 'react';
import ReactDOM from 'react-dom';
import HomePageContainer from './';


it('Render Home/Index Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePageContainer />, div); // render the page without crashing
});
