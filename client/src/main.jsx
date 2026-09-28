import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Fuentes autohospedadas: solo los pesos que realmente se usan (ver DESIGN.md).
import '@fontsource/syne/400.css';
import '@fontsource/syne/600.css';
import '@fontsource/syne/800.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
