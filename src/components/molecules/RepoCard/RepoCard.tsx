import type { FC } from 'react';
import type { Repository } from '@/common/types/models/Repository';
import { RepositoryLanguageIcon } from '@/components/atoms/RepositoryLanguageIcon/RepositoryLanguageIcon';
import { RepoCardSkeleton } from './RepoCardSkeleton';

interface RepoCardProps {
	isLoading?: boolean;
	repository: Repository;
}

export const RepoCard: FC<RepoCardProps> = ({
	isLoading = false,
	repository,
}) => {
	if (isLoading) return <RepoCardSkeleton />;

	return (
		<div
			className="
				bg-neutral-900/90 backdrop-blur rounded-xl shadow-lg p-6 flex flex-col items-start border border-neutral-800
				hover:scale-105 hover:shadow-2xl hover:border-lime-400 transition-all duration-300
				group relative overflow-hidden animate-fade-in-up
			"
		>
			<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<div className="absolute -inset-1 bg-gradient-to-br from-lime-400/20 via-lime-500/10 to-lime-300/20 blur-2xl rounded-xl animate-pulse" />
			</div>
			<h4 className="text-lg font-semibold text-white mb-2 break-words line-clamp-2 w-full transition-colors duration-300 group-hover:text-lime-300">
				{repository.name}
			</h4>
			<div className="flex items-center gap-2 mb-2">
				<span className="flex items-center gap-1 text-sm text-neutral-300 group-hover:text-lime-300 transition-colors duration-300">
					<RepositoryLanguageIcon language={repository.language} size={32} />
				</span>
			</div>
			<p className="text-sm text-neutral-300 mb-2 line-clamp-3 transition-all duration-300 group-hover:text-white">
				{repository.description}
			</p>
			<a
				href={repository.html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-auto text-lime-400 hover:underline text-sm transition-colors duration-200 hover:text-lime-300"
			>
				View on GitHub
			</a>
		</div>
	);
};
