import { useQuery } from '@tanstack/react-query';
import RepositoryClient from '@/common/api/clients/reposClient';

export const useGetAllRepositories = () =>
	useQuery({
		queryKey: ['repos', 'allRepos'],
		queryFn: RepositoryClient.getAllRepos,
	});
