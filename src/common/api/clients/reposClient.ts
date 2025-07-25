import type { Repository } from '@/common/types/models/Repository';
import { APIClient } from './apiClient';

const ReposApi = APIClient('repos');

const getAllRepos = () =>
	ReposApi<Repository[]>({
		url: '/repos',
	});

export default {
	getAllRepos,
};
