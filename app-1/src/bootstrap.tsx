import React from 'react';
// biome-ignore lint/style/useNamingConvention: _
import ReactDOM from 'react-dom/client';

const App = React.lazy(() =>
  import('./app').then(({ App }) => ({ default: App })),
);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <React.Suspense>
        <App />
      </React.Suspense>
    </React.StrictMode>,
  );
}
