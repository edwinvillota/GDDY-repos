import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ComponentProps } from 'react';
import { BrowserRouter } from 'react-router';
import type { Repository } from '@/common/types/models/Repository';
import { RepoCard } from '@/components/molecules/RepoCard/RepoCard';

describe('RepoCard tests', () => {
	const mockedRepository = {
		id: 1,
		name: 'test-name',
		fullname: 'test-full-name',
		description: 'test-description',
		html_url: 'https://test.com/test-name',
		language: 'JavaScript',
	} as Repository;

	const renderComponent = (props: ComponentProps<typeof RepoCard>) => {
		render(
			<BrowserRouter>
				<RepoCard {...props} />
			</BrowserRouter>,
		);
	};

	it('should render the the component', async () => {
		renderComponent({
			repository: mockedRepository,
		});

		expect(
			screen.getByRole('heading', {
				level: 4,
				name: /test-name/,
			}),
		).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByTestId('icon-JavaScript')).toBeInTheDocument();
		});

		expect(screen.getByText(mockedRepository.description)).toBeInTheDocument();

		const viewButton = screen.getByRole('link');
		expect(viewButton).toHaveAttribute('href', '/repository/test-name');
	});

	it('should render skeleton if it is loading', () => {
		renderComponent({
			repository: mockedRepository,
			isLoading: true,
		});

		expect(screen.getByRole('progressbar')).toBeInTheDocument();
	});
});
