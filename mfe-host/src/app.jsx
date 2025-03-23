import React from 'react';
import { render } from 'react-dom';

export default function App() {
  const mountPoint = document.querySelector('.app');
  render(<>React app is runing</>, mountPoint);
}
