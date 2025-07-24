import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
	it('renders the main heading', () => {
		render(<Home />);
		expect(
			screen.getByRole('heading', {
				name: /React Vite TypeScript Biome Template/i,
			}),
		).toBeInTheDocument();
	});

	it('renders the Features section', () => {
		render(<Home />);
		expect(
			screen.getByRole('heading', { name: /Features/i }),
		).toBeInTheDocument();
		expect(screen.getByText(/Fast development with Vite/i)).toBeInTheDocument();
		expect(screen.getByText(/React 19\+/i)).toBeInTheDocument();
		expect(
			screen.getByText(/TypeScript for static typing/i),
		).toBeInTheDocument();
		expect(
			screen.getByText(/Biome for formatting and linting/i),
		).toBeInTheDocument();
		expect(
			screen.getByText(/Ready-to-use project structure/i),
		).toBeInTheDocument();
	});

	it('renders the Getting Started section', () => {
		render(<Home />);
		expect(
			screen.getByRole('heading', { name: /Getting Started/i }),
		).toBeInTheDocument();
		expect(screen.getByText(/Clone the repository/i)).toBeInTheDocument();
		expect(screen.getByText(/Install dependencies/i)).toBeInTheDocument();
		expect(screen.getAllByText(/Start the development server/i)).toHaveLength(
			2,
		);
	});

	it('renders the Scripts section', () => {
		render(<Home />);
		expect(
			screen.getByRole('heading', { name: /Scripts/i }),
		).toBeInTheDocument();
		expect(screen.getAllByText(/npm run dev/i)).toHaveLength(2);
		expect(screen.getByText(/npm run build/i)).toBeInTheDocument();
		expect(screen.getByText(/npm run preview/i)).toBeInTheDocument();
		expect(screen.getByText(/npm run format/i)).toBeInTheDocument();
		expect(screen.getByText(/npm run lint/i)).toBeInTheDocument();
	});

	it('renders the Project Structure section', () => {
		render(<Home />);
		expect(
			screen.getByRole('heading', { name: /Project Structure/i }),
		).toBeInTheDocument();
		expect(screen.getByText(/react-app-template/)).toBeInTheDocument();
		expect(screen.getByText(/src\//)).toBeInTheDocument();
		expect(screen.getByText(/vite\.config\.ts/)).toBeInTheDocument();
	});
});
