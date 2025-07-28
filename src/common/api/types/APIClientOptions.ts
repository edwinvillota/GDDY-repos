export type APIClientOptions<TBody> = {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	body?: TBody;
	search?: Record<string, unknown>;
	headers?: Headers;
};
