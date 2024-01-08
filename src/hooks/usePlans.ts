import { useContext } from 'react'
import { PlansContext } from '../context/PlansContext'

export const usePlans = () => {
	const { isChecked, planSelected, handleToggleChange, handlePlanClick } =
		useContext(PlansContext)

	return { isChecked, planSelected, handleToggleChange, handlePlanClick }
}
