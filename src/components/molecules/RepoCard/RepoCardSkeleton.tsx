export const RepoCardSkeleton = () => {
	return (
		<div className="bg-neutral-900/90 rounded-xl shadow-lg p-6 flex flex-col items-start border border-neutral-800 animate-pulse aspect-[16/11]">
			<div className="h-6 w-3/4 bg-neutral-700 rounded mb-2" />
			<div className="h-8 w-8 bg-neutral-700 rounded mb-2" />
			<div className="h-4 w-full bg-neutral-800 rounded mb-2" />
			<div className="h-4 w-2/3 bg-neutral-800 rounded mb-4" />
			<div className="mt-auto h-4 w-1/3 bg-lime-700 rounded" />
		</div>
	);
};
