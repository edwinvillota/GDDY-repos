import type { Owner } from './Owner';

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
}
