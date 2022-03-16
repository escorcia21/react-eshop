import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPass from '../containers/RecoveryPass';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import '../styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{/* <Layout> */}
					<Route exact path='/' element={<Home/>} />
					<Route exact path='/login' element={<Login/>} />
					<Route exact path='/recovery' element={<RecoveryPass/>} />
					<Route path='*' element={<NotFound/>} />
					{/* </Layout> */}
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;