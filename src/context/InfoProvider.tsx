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

export interface FormErrorsState {
	nameError: string
	emailError: string
	phoneError: string
}

const FormValuesInitialState = {
	name: '',
	email: '',
	phone: '',
}

export const InfoProvider = ({ children }: InfoProviderProps) => {
	const [formValues, setFormValues] = useState<FormValuesState>(
		FormValuesInitialState
	)

	const [formErrors, setFormErrors] = useState<FormErrorsState>({
		nameError: '',
		emailError: '',
		phoneError: '',
	})

	const handleFormChange = ({
		property,
		value,
	}: {
		property: keyof FormValuesState
		value: string
	}) => {
		setFormValues((prevState) => ({
			...prevState,
			[property]: value,
		}))
	}

	const handleFormErrorChange = ({
		property,
		value,
	}: {
		property: keyof FormErrorsState
		value: string
	}) => {
		setFormErrors((prevState) => ({
			...prevState,
			[property]: value,
		}))
	}

	return (
		<InfoContext.Provider
			value={{
				formValues,
				handleFormChange,
				formErrors,
				handleFormErrorChange,
			}}>
			{children}
		</InfoContext.Provider>
	)
}
