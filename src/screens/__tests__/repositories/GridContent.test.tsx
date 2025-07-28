import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import type { Repository } from '@/common/types/models/Repository';
import { GridContent } from '@/screens/repositories/components/RepositoriesGrid/GridContent';

describe('GridContent tests', () => {
	it('should render skeletons when is loading', () => {
		render(<GridContent filteredData={[]} isSearching isFetching />);

		expect(screen.getAllByRole('progressbar')).toHaveLength(6);
	});

	it('should render a message if data is empty', () => {
		render(<GridContent filteredData={[]} />);

		expect(screen.getByText(/No repositories found/));
	});

	it('should render repo cards', () => {
		const MOCKED_REPOS = [
			{
				id: 1,
				name: 'test-one',
			},
			{
				id: 2,
				name: 'test-two',
			},
		] as Repository[];

		render(
			<BrowserRouter>
				<GridContent filteredData={MOCKED_REPOS} />
			</BrowserRouter>,
		);

		expect(screen.getAllByTestId(/repocard-*/)).toHaveLength(2);
	});
});
