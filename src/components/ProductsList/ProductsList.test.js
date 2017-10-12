import React from 'react';
import ReactDOM from 'react-dom';
import ProductsList from './UserFeed';

it('ProductsList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductsList />, div);
});