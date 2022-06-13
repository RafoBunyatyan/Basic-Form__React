import React, { useState } from 'react'

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredNameTouched, setEnteredNameTouched] = useState(false)

	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

	const enteredNameIsValid = enteredName.trim() !== ''
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

	const enteredEmailIsValid = enteredEmail.includes('@')
	const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched

	let formIsValid = false

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true
	}

	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value)
	}

	const emailInputChangeHandler = event => {
		setEnteredEmail(event.target.value)
	}

	const nameInputBlurHandler = event => {
		setEnteredNameTouched(true)
	}

	const emailInputBlurHandler = event => {
		setEnteredEmailTouched(true)
	}

	const formSubmitionHandler = event => {
		event.preventDefault()

		setEnteredNameTouched(true)

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);

		// nameInputRef.current.value = '' // NOT IDEAL, DON`T MANIPULATE THE DOM
		setEnteredName('')
		setEnteredNameTouched(false)

		setEnteredEmail('')
		setEnteredEmailTouched(false)
	}

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = enteredEmailIsInValid
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmitionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>Name moust not be empty.</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your E-Mail</label>
				<input
					type='email'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInValid && (
					<p className='error-text'>Please enter a valid email.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;