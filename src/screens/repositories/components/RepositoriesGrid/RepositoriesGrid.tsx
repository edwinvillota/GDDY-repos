import type { ChangeEvent, FC } from 'react';
import { useSearch } from '@/hooks/useSearch';
import { useGetAllRepositories } from '@/services/repository/repositoryHooks';
import { GridContent } from './GridContent';

export const RepositoriesGrid: FC = () => {
	const { data, isFetching } = useGetAllRepositories();
	const { filteredData, setQuery, query, isSearching } = useSearch(data, [
		'language',
		'name',
		'fullname',
		'description',
	]);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<div className="flex flex-col gap-4 w-full self-stretch">
			<div className="w-full max-w-2xl mx-auto mb-4">
				<input
					type="text"
					placeholder="Search repositories..."
					className="w-full px-4 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:border-lime-400 transition-colors duration-200"
					value={query}
					onChange={handleSearch}
				/>
			</div>
			<div className="w-full max-w-5xl min-w-5xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<GridContent
					filteredData={filteredData}
					isFetching={isFetching}
					isSearching={isSearching}
				/>
			</div>
		</div>
	);
};
