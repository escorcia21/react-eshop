import React from 'react';
import '@styles/RecoveryPass.scss';
import yard from '@logos/logo_yard_sale.svg';

const RecoveryPass = () => {
	return (
		<div className="RecoveryPass">
			<div className="RecoveryPass-container">
				<img src={yard} alt="logo" className="logo-yard" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default RecoveryPass;
