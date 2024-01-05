import { useState } from 'react'
import { InfoContext } from './InfoContext'

interface InfoProviderProps {
	children: JSX.Element | JSX.Element[]
}

export interface FormValuesAndErrorsState {
	name: string
	email: string
	phone: string
}

const FormValuesInitialState = {
	name: '',
	email: '',
	phone: '',
}

const FormErrorsInitialState = {
	name: '',
	email: '',
	phone: '',
}

export const InfoProvider = ({ children }: InfoProviderProps) => {
	const [formValues, setFormValues] = useState<FormValuesAndErrorsState>(
		FormValuesInitialState
	)

	const [formErrors, setFormErrors] = useState<FormValuesAndErrorsState>(
		FormErrorsInitialState
	)

	const handleFormChange = ({
		property,
		value,
	}: {
		property: keyof FormValuesAndErrorsState
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
		property: keyof FormValuesAndErrorsState
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
