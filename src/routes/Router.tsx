import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from '@/components/layouts/MainLayout';
import Repositories from '@/screens/repositories/Repositories';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<Repositories />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
