import ENV from './env';

const SERVICES = {
	repos: {
		basePath: ENV.REPOS_URL,
	},
} as const;

export type ServiceName = Lowercase<keyof typeof SERVICES>;

export default SERVICES;
