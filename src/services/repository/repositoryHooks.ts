import { useQuery } from '@tanstack/react-query';
import RepositoryClient from '@/common/api/clients/reposClient';

export const useGetAllRepositories = () =>
	useQuery({
		queryKey: ['repos', 'allRepos'],
		queryFn: RepositoryClient.getAllRepos,
	});

export const useGetRepositoryByName = (name: string | undefined) =>
	useQuery({
		queryKey: ['repos', 'repoByName', name],
		enabled: Boolean(name),
		// biome-ignore lint/style/noNonNullAssertion: name validate by the enable property
		queryFn: () => RepositoryClient.getRepoByName(name!),
	});
