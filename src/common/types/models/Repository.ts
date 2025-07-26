import type { Owner } from './Owner';
import type { RepositoryLanguage } from './RepositoryLanguage';

export interface Repository {
	id: number;
	name: string;
	fullname: string;
	owner: Owner;
	private: boolean;
	description: string;
	updated_at: string;
	clone_url: string;
	open_issues: number;
	html_url: string;
	language: RepositoryLanguage;
	forks: number;
	subscribers_count: number;
}
