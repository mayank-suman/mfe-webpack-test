import React from 'react';
import { createRoot } from 'react-dom/client';

export default function App() {
  const mountPoint = document.querySelector('.app');
  const root = createRoot(mountPoint);

  root.render(
    <div>
      <h1>Remote</h1>
      <p>Remote content</p>
    </div>
  );
}
