import React from 'react';

export const Checkout = (props) =>{
	return(
		<div className="container">
		<h1>Checkout</h1>
		<p>Please enter your details.</p>
		<hr />
		<div className="form">
		  
		<div className="fields fields--2">
		  <label className="field" htmlFor="name">
			<span className="field__label">First name</span>
			<input className="field__input" type="text" id="firstname" />
		  </label>
		  <label className="field" htmlFor="name">
			<span className="field__label" >Last name</span>
			<input className="field__input" type="text" id="lastname" />
		  </label>
		</div>
		<label className="field" htmlFor="street">
		  <span className="field__label" >Address</span>
		  <input className="field__input" type="text" id="address" />
		</label>
		<label className="field" htmlFor="country">
		  <span className="field__label">Country</span>
		  <select className="field__input" id="country">
			<option value=""></option>
			<option value="unitedstates">United States</option>
			<option value="unitedstates">Bangladesh</option>
			<option value="unitedstates">Italy</option>
		  </select>
		</label>
		<div className="fields fields--3">
		  <label className="field" htmlFor="zipcode">
			<span className="field__label" >Zip code</span>
			<input className="field__input" type="text" id="zipcode" />
		  </label>
		  <label className="field" htmlFor="city">
			<span className="field__label">City</span>
			<input className="field__input" type="text" id="city" />
		  </label>
		</div>
		</div>
		<hr/>
		<button className="button">Continue</button>
	  </div>
	
		);
};