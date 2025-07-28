import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from '@/components/layouts/MainLayout';
import { PageLayout } from '@/components/layouts/PageLayout';
import Repositories from '@/screens/repositories/Repositories';
import Repository from '@/screens/repository/Repository';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<Repositories />} />
					<Route element={<PageLayout />}>
						<Route path="/repository/:name" element={<Repository />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
