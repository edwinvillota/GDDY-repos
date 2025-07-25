import { useGetAllRepositories } from '@/services/repository/repositoryHooks';

const Home = () => {
	const { data, isError } = useGetAllRepositories();

	if (isError) return <p>Data fetching error</p>;

	return (
		<main>
			{data?.map((repository) => (
				<div key={repository.name}>
					<h4>{repository.name}</h4>
				</div>
			))}
		</main>
	);
};

export default Home;
