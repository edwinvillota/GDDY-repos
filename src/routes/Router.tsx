import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '@/screens/Home';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
