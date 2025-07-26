import type { FC, PropsWithChildren } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Outlet, useNavigate } from 'react-router';

export const PageLayout: FC<PropsWithChildren> = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate('/', {
			viewTransition: true,
		});
	};
	return (
		<>
			<button
				type="button"
				className="absolute top-8 left-8 cursor-pointer"
				onClick={handleGoBack}
			>
				<IoArrowBack className="text-white" size={28} />
			</button>
			<Outlet />
		</>
	);
};
