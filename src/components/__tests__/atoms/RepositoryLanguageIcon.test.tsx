import { render, screen, waitFor } from '@testing-library/react';
import { RepositoryLanguageIcon } from '@/components/atoms/RepositoryLanguageIcon/RepositoryLanguageIcon';

describe('RepositoryLanguageIcon tests', () => {
	it('should render the icon', async () => {
		render(<RepositoryLanguageIcon language="JavaScript" />);

		expect(screen.getByRole('progressbar')).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByTestId('icon-JavaScript')).toBeInTheDocument();
		});
	});

	it('should render the default icon if the language is not in the supported list', () => {
		// @ts-expect-error
		render(<RepositoryLanguageIcon language="invalid-language" />);

		expect(screen.getByTestId('default-icon')).toBeInTheDocument();
	});
});
