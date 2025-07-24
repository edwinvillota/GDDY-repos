import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './common/styles/base.css';
import Router from './routes/Router';

// biome-ignore lint: lint/style/noNonNullAssertion
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>,
);
