import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export function initApp(container = document.getElementById('root')) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
initApp();