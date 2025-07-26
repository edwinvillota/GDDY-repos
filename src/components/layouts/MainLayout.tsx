import type { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';

export const MainLayout: FC<PropsWithChildren> = () => {
	return (
		<main className="min-h-screen max-w-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 flex flex-col items-center  ">
			<Outlet />
		</main>
	);
};
