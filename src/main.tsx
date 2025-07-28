import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './common/styles/base.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes/Router';

const queryClient = new QueryClient();

// biome-ignore lint: lint/style/noNonNullAssertion
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</StrictMode>,
);
