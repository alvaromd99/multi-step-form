import { ChangeEvent, useState } from 'react'

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
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value: inputValue, id } = event.target
		setValue(inputValue)

		if (id === 'name') {
			if (inputValue.length < 2 && inputValue !== '') {
				setError('Name should be at least 2 characters')
			} else {
				setError('')
			}
		} else if (id === 'email') {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

			if (!emailPattern.test(inputValue) && inputValue !== '') {
				setError('Invalid email')
			} else {
				setError('')
			}
		} else if (id === 'phoneNumber') {
			const phonePattern = /^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/

			if (!phonePattern.test(inputValue) && inputValue !== '') {
				setError('Use format: +12 234 567 890')
			} else {
				setError('')
			}
		} else {
			setError('')
		}
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
