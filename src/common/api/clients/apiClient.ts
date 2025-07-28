import type { ServiceName } from '../../constants/services';
import type { APIClientOptions } from '../types/APIClientOptions';
import APIError from '../utils/apiError';
import { getServiceInfo } from '../utils/getServiceInfo';

export const APIClient =
	(service: ServiceName) =>
	async <TResponse, TBody = unknown>({
		url,
		method = 'GET',
		body,
		search,
		headers,
	}: APIClientOptions<TBody>) => {
		const serviceInfo = getServiceInfo(service);

		return new Promise<TResponse>((resolve, reject) => {
			async function execute() {
				try {
					const trimmedSearch =
						search &&
						Object.entries(search).reduce(
							(reduced: Record<string, unknown>, [key, value]) => {
								if (value !== undefined) {
									reduced[key] = value;
								}
								return reduced;
							},
							{},
						);

					const response = await fetch(
						`${serviceInfo.basePath}${url}?${new URLSearchParams(
							trimmedSearch as unknown as string[][],
						).toString()}`,
						{
							method,
							body: JSON.stringify(body),
							headers: new Headers([
								...Object.entries({
									...headers,
									...(method.toUpperCase() !== 'GET' && {
										'Content-Type': 'application/json',
									}),
								}),
							] as HeadersInit),
						},
					);
					if (response.ok) {
						const data = await response.json();

						return resolve(data);
					} else {
						reject(new APIError(500, 'Internal server error'));
					}
				} catch (error) {
					if (error instanceof Error) {
						reject(new APIError(500, error.message));
					}
					reject(new APIError(500, 'Internal server error'));
				}
			}

			execute();
		});
	};
