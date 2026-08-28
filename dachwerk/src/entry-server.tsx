import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { App } from './App';
import { buildHead } from './lib/head';
import { routes } from './routes';
import './styles/base.css';

export function render(url: string): { html: string; head: string } {
  const meta = routes.find((r) => r.path === url);
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: meta ? buildHead(meta) : '' };
}

export { routes };
