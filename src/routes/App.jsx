import React, {useEffect, useState,useRef} from 'react';
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
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

// function initialState() {
// 	let initialValue = "hola";
// 	console.log(initialValue);
// 	return initialValue;
// }


const App = () => {
	// const [estado,setState] = useState(true);
	
	// const clickhandler = () => {
	// 	setState(!estado);
	// }

	return (
		<AppContext.Provider value={useInitialState()}>
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
		</AppContext.Provider>
		
		// <>
		// 	<button onClick={clickhandler}>
		// 		{estado ? 'eliminar' : 'montar'}
		// 	</button>
		// 	{estado && <Componente1 />}
		// </>
	);

	// function Componente1() {
	// 	const [mensaje,setMensaje] = useState(4)
	// 	const mensajeAnterior = useRef()
	
	// 	useEffect(() => {
	// 		mensajeAnterior.current = mensaje
			
	// 		// console.log(`Mensaje actual: ${mensaje}`)
	// 		// console.log(`Mensaje anterior: ${mensajeAnterior.current}`)
			
	// 		return () => {
	// 			console.log(`El componente se ha desmontado`);
	// 		}
	// 	},[])
	
	// 	return (
	// 		<>
	// 			<h1>El mensaje es: {mensaje}</h1>
	// 			<h1>El mensaje anterior fue: {mensajeAnterior.current}</h1>
	// 			<input type="text" onChange={(e) => setMensaje(e.target.value)}/>
	// 		</>
	// 	);
	// }
}

export default App;