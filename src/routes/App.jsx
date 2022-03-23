import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPass from '@pages/RecoveryPass';
import SendEmail from '@pages/SendEmail';
import NewPass from '@pages/NewPass';
import MyAccount from '@pages/MyAccount';
import Register from '@pages/Register';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import '@styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/recovery' element={<RecoveryPass />} />
					<Route exact path="/send-email" element={<SendEmail />} />
					<Route exact path="/new-password" element={<NewPass />} />
					<Route exact path="/account" element={<MyAccount />} />
					<Route exact path="/signup" element={<Register />} />
					<Route exact path="/checkout" element={<Checkout />} />
					<Route exact path="/orders" element={<Orders />} />
					<Route path='*' element={<NotFound/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;