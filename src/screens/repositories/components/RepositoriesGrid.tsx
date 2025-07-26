import type { FC } from 'react';
import { RepoCard } from '@/components/molecules/RepoCard/RepoCard';
import { RepoCardSkeleton } from '@/components/molecules/RepoCard/RepoCardSkeleton';
import { useGetAllRepositories } from '@/services/repository/repositoryHooks';

export const RepositoriesGrid: FC = () => {
	const { data, isFetching } = useGetAllRepositories();

	return (
		<div className="flex flex-col gap-4 w-full self-stretch">
			<div className="w-full max-w-2xl mx-auto mb-4">
				<input
					type="text"
					placeholder="Search repositories..."
					className="w-full px-4 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:border-lime-400 transition-colors duration-200"
				/>
			</div>
			<div className="w-full max-w-5xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{data
					? data.map((repo) => (
							<RepoCard
								key={repo.id}
								repository={repo}
								isLoading={isFetching}
							/>
						))
					: Array(6).map((id) => <RepoCardSkeleton key={id} />)}
			</div>
		</div>
	);
};
