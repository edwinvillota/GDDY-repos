import type { FC } from 'react';
import { useParams } from 'react-router';
import { useGetRepositoryByName } from '@/services/repository/repositoryHooks';

const Repository: FC = () => {
	const { name } = useParams<{
		name: string;
	}>();

	const { data, isFetching } = useGetRepositoryByName(name);

	return (
		<div className="flex flex-col items-center py-12 animate-fade-in">
			<h1 className="text-4xl font-bold text-white mb-8 animate-slide-down drop-shadow-lg">
				<span className="bg-gradient-to-r from-lime-400 via-lime-500 to-lime-300 bg-clip-text text-transparent">
					Repository: {name}
				</span>
			</h1>
			{isFetching ? (
				<div className="text-gray-400 text-lg">Loading...</div>
			) : data ? (
				<div className="w-full max-w-2xl">
					<div className="mb-4">
						<h2 className="text-2xl font-semibold text-lime-400 mb-2">
							{data.fullname}
						</h2>
						<p className="text-gray-300">
							{data.description || 'No description provided.'}
						</p>
					</div>
					<div className="flex flex-wrap gap-6 mb-4">
						<div>
							<span className="font-medium text-gray-400">Subscribers:</span>
							<span className="ml-2 text-lime-300">
								{data.subscribers_count}
							</span>
						</div>
						<div>
							<span className="font-medium text-gray-400">Forks:</span>
							<span className="ml-2 text-lime-300">{data.forks}</span>
						</div>
						<div>
							<span className="font-medium text-gray-400">Issues:</span>
							<span className="ml-2 text-lime-300">{data.open_issues}</span>
						</div>
						<div>
							<span className="font-medium text-gray-400">Language:</span>
							<span className="ml-2 text-lime-300">
								{data.language || 'N/A'}
							</span>
						</div>
					</div>
					<div>
						<a
							href={data.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 transition"
						>
							View on GitHub
						</a>
					</div>
				</div>
			) : (
				<div className="text-red-400 text-lg">Repository not found.</div>
			)}
		</div>
	);
};

export default Repository;
