import { useContext } from 'react'
import { InfoContext } from '../context/InfoContext'

export const useInfo = () => {
	const { formValues, formErrors, handleFormChange, handleFormErrorChange } =
		useContext(InfoContext)

	return { formValues, formErrors, handleFormChange, handleFormErrorChange }
}
