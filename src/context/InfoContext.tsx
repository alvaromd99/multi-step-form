import { createContext } from 'react'
import { FormValuesState } from './InfoProvider'

interface InfoContextProps {
	formValues: FormValuesState
	handleFormSubmit: ({
		nameValue,
		emailValue,
		phoneValue,
	}: {
		nameValue: string
		emailValue: string
		phoneValue: string
	}) => void
}

export const InfoContext = createContext<InfoContextProps>(
	{} as InfoContextProps
)
