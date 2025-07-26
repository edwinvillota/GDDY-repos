import type { FC } from 'react';
import { RepositoriesGrid } from './components/RepositoriesGrid/RepositoriesGrid';

const Repositories: FC = () => {
	return (
		<div className="flex flex-col items-center py-12 animate-fade-in">
			<h1 className="text-4xl font-bold text-white mb-8 animate-slide-down drop-shadow-lg">
				<span className="bg-gradient-to-r from-lime-400 via-lime-500 to-lime-300 bg-clip-text text-transparent">
					GoDaddy repositories
				</span>
			</h1>

			<RepositoriesGrid />
		</div>
	);
};

export default Repositories;
