import { createContext } from 'react'
import { FormErrorsState, FormValuesState } from './InfoProvider'

interface InfoContextProps {
	formValues: FormValuesState
	handleFormChange: ({
		property,
		value,
	}: {
		property: keyof FormValuesState
		value: string
	}) => void
	formErrors: FormErrorsState
	handleFormErrorChange: ({
		property,
		value,
	}: {
		property: keyof FormErrorsState
		value: string
	}) => void
}

export const InfoContext = createContext<InfoContextProps>(
	{} as InfoContextProps
)
