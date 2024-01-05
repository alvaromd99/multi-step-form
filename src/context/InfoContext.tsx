import { createContext } from 'react'
import { FormValuesAndErrorsState } from './InfoProvider'

interface InfoContextProps {
	formValues: FormValuesAndErrorsState
	handleFormChange: ({
		property,
		value,
	}: {
		property: keyof FormValuesAndErrorsState
		value: string
	}) => void
	formErrors: FormValuesAndErrorsState
	handleFormErrorChange: ({
		property,
		value,
	}: {
		property: keyof FormValuesAndErrorsState
		value: string
	}) => void
}

export const InfoContext = createContext<InfoContextProps>(
	{} as InfoContextProps
)
