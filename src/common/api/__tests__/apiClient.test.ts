import { vi } from 'vitest';
import type { Repository } from '@/common/types/models/Repository';
import { APIClient } from '../clients/apiClient';

vi.mock('../utils/getServiceInfo', () => ({
	getServiceInfo: vi.fn().mockReturnValue({
		basePath: 'http://test-api',
	}),
}));

global.fetch = vi.fn();

function mockFetchResponse<TData>(data: TData) {
	return {
		ok: true,
		json: () => new Promise((resolve) => resolve(data)),
	};
}

describe('APIClient', () => {
	const TestClient = APIClient('repos');

	const getRequest = () =>
		TestClient<Repository[]>({
			url: '/repos',
		});

	it('should return data', async () => {
		(fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
			mockFetchResponse([]),
		);

		const response = await getRequest();

		expect(fetch).toHaveBeenCalledWith(
			'http://test-api/repos?',
			expect.objectContaining({
				method: 'GET',
				body: undefined,
			}),
		);
	});

	it('should send POST request with body and headers', async () => {
		(fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
			mockFetchResponse({ success: true }),
		);

		const body = { name: 'test' };
		const headers = { Authorization: 'Bearer token' } as any;

		await TestClient<{ success: boolean }, typeof body>({
			url: '/repos',
			method: 'POST',
			body,
			headers,
		});

		expect(fetch).toHaveBeenCalledWith(
			'http://test-api/repos?',
			expect.objectContaining({
				method: 'POST',
				body: JSON.stringify(body),
				headers: expect.any(Headers),
			}),
		);
	});

	it('should reject with APIError on fetch failure', async () => {
		(fetch as ReturnType<typeof vi.fn>).mockRejectedValue(
			new Error('Network error'),
		);

		await expect(
			TestClient<Repository[]>({
				url: '/repos',
			}),
		).rejects.toMatchObject({ message: 'Network error' });
	});
});
