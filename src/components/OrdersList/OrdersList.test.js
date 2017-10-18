import React from 'react';
import ReactDOM from 'react-dom';
import OrdersList from './OrdersList';

it('OrdersList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrdersList />, div);
});