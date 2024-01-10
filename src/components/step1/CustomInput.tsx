import { ChangeEvent } from 'react'
import { useInfo } from '../../hooks/useInfo'
import { FormValuesAndErrorsState } from '../../context/InfoProvider'

interface CustomInputProps {
	id: keyof FormValuesAndErrorsState
	label: string
	type: string
	placeholder: string
}

export default function CustomInput({
	id,
	label,
	type,
	placeholder,
}: CustomInputProps) {
	const { formValues, formErrors, handleFormChange, handleFormErrorChange } =
		useInfo()

	const value = formValues[id]
	const error = formErrors[id]

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value: inputValue } = event.target

		let validationError = ''

		if (id === 'name') {
			if (inputValue.length < 2 && inputValue !== '') {
				validationError = 'Name should be at least 2 characters'
			}
		} else if (id === 'email') {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

			if (!emailPattern.test(inputValue) && inputValue !== '') {
				validationError = 'Invalid email'
			}
		} else if (id === 'phone') {
			const phonePattern = /^\d{3} \d{3} \d{3}$/

			if (!phonePattern.test(inputValue) && inputValue !== '') {
				validationError = 'Use format: 123 123 123'
			}
		}

		handleFormChange({
			property: id,
			value: inputValue,
		})

		handleFormErrorChange({
			property: id,
			value: validationError,
		})
	}

	return (
		<div className='custom-input'>
			<div className='custom-input-info'>
				<label htmlFor={id}>{label}</label>
				{error && <span style={{ color: 'red' }}>{error}</span>}
			</div>
			<input
				value={value}
				id={id}
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
				autoComplete='off'
			/>
		</div>
	)
}
