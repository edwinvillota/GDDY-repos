import { vi } from 'vitest';
import { getServiceInfo } from '../utils/getServiceInfo';

vi.mock('@/common/constants/services', () => ({
	default: {
		repos: { basePath: 'https://api.example.com/repos' },
	},
}));

describe('getServiceInfo tests', () => {
	it('should return the service info if exists', () => {
		const result = getServiceInfo('repos');

		expect(result).toStrictEqual({
			basePath: 'https://api.example.com/repos',
		});
	});

	it("should throw an error if the service doesn't exist", () => {
		expect(() => {
			// @ts-expect-error
			getServiceInfo('test');
		}).toThrowError(
			new Error(
				'Service information could not be retrieved. Please check your configuration and environment variables.',
			),
		);
	});
});
