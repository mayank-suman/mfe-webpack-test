import React from 'react';
const Button = React.lazy(() => import('mfe_host/Button'));

export default function App() {
  return (
    <div>
      <h1>Remote</h1>
      <React.Suspense fallback="Loading Button">
        <Button />
      </React.Suspense>
    </div>
  );
}
