import React from 'react';
import ReactDOM from 'react-dom';
import PayPal from './PayPal';

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PayPal />, div);
});
