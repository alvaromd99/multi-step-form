import { useState } from 'react'
import { InfoContext } from './InfoContext'

interface InfoProviderProps {
	children: JSX.Element | JSX.Element[]
}

export interface FormValuesState {
	name: string
	email: string
	phone: string
}

export const InfoProvider = ({ children }: InfoProviderProps) => {
	const [formValues, setFormValues] = useState<FormValuesState>({
		name: '',
		email: '',
		phone: '',
	})

	const handleFormSubmit = ({
		nameValue,
		emailValue,
		phoneValue,
	}: {
		nameValue: string
		emailValue: string
		phoneValue: string
	}) => {
		setFormValues((prevState) => ({
			...prevState,
			name: nameValue,
			email: emailValue,
			phone: phoneValue,
		}))
	}

	return (
		<InfoContext.Provider value={{ formValues, handleFormSubmit }}>
			{children}
		</InfoContext.Provider>
	)
}
