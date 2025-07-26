import type { Repository } from '@/common/types/models/Repository';
import { APIClient } from './apiClient';

const ReposApi = APIClient('repos');

const getAllRepos = () =>
	ReposApi<Repository[]>({
		url: '/orgs/godaddy/repos',
	});

const getRepoByName = (name: string) =>
	ReposApi<Repository>({
		url: `/repos/godaddy/${name}`,
	});

export default {
	getAllRepos,
	getRepoByName,
};
