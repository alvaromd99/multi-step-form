import { ChangeEvent } from 'react'
import { FormErrorsState, FormValuesState } from '../../context/InfoProvider'
import { useInfo } from '../../hooks/useInfo'

interface CustomInputProps {
	id: string
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

	const value = formValues[id as keyof FormValuesState]
	const error = formErrors[id as keyof FormErrorsState]

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
			const phonePattern = /^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/

			if (!phonePattern.test(inputValue) && inputValue !== '') {
				validationError = 'Use format: +12 234 567 890'
			}
		}

		handleFormChange({
			property: id as keyof FormValuesState,
			value: inputValue,
		})

		handleFormErrorChange({
			property: id as keyof FormErrorsState,
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
