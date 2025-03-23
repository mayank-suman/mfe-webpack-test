import Button from 'components/button.jsx';
import React from 'react';
import { createRoot } from 'react-dom/client';

export default function App() {
  const mountPoint = document.querySelector('.app');
  const root = createRoot(mountPoint);

  root.render(
    <div>
      <h1>Host</h1>
      <p>Host content</p>
      <Button />
    </div>
  );
}
