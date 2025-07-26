import type { Repository } from '@/common/types/models/Repository';
import { RepoCard } from '@/components/molecules/RepoCard/RepoCard';
import { RepoCardSkeleton } from '@/components/molecules/RepoCard/RepoCardSkeleton';

interface GridContentProps {
	filteredData: Repository[] | undefined;
	isFetching: boolean;
	isSearching: boolean;
}

export const GridContent = ({
	filteredData,
	isFetching,
	isSearching,
}: GridContentProps) => {
	if (isFetching || isSearching)
		return Array.from({ length: 6 }).map((_, id) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: ArrayIndexKey is enough for this case
			<RepoCardSkeleton key={id} />
		));

	if (!filteredData?.length)
		return (
			<div className="col-span-full text-center text-neutral-400 py-8">
				No repositories found for your search.
			</div>
		);

	return filteredData?.map((repo) => (
		<RepoCard
			key={repo.id}
			repository={repo}
			isLoading={isFetching || isSearching}
		/>
	));
};
