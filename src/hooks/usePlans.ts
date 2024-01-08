import { useContext } from 'react'
import { PlansContext } from '../context/PlansContext'

export const usePlans = () => {
	const { isChecked, handleToggleChange } = useContext(PlansContext)

	return { isChecked, handleToggleChange }
}
