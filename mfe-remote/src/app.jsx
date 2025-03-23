import React from 'react';
import { createRoot } from 'react-dom/client';
const Button = React.lazy(() => import('mfe_host/Button'));

export default function App() {
  const mountPoint = document.querySelector('.app');
  const root = createRoot(mountPoint);

  root.render(
    <div>
      <h1>Remote</h1>
      <React.Suspense fallback="Loading Button">
        <Button />
      </React.Suspense>
    </div>
  );
}
