import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/base.css';

const container = document.getElementById('root');
if (container) {
  const tree = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
  // Vorgerendertes HTML wird hydriert, sonst normal gemountet
  if (container.childNodes.length > 0) hydrateRoot(container, tree);
  else createRoot(container).render(tree);
}
