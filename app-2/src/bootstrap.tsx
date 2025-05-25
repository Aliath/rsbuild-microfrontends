import React from 'react';
import reactDom from 'react-dom/client';
import { SharedApp } from './shared-app.tsx';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = reactDom.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <SharedApp />
    </React.StrictMode>,
  );
}
