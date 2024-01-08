import { useContext } from 'react'
import { PlansContext } from '../context/PlansContext'

export const usePlans = () => {
	const {
		isChecked,
		planSelected,
		addOnsSelected,
		checkboxes,
		handleToggleChange,
		handlePlanClick,
		addAddOn,
		removeAddOn,
	} = useContext(PlansContext)

	return {
		isChecked,
		planSelected,
		addOnsSelected,
		checkboxes,
		handleToggleChange,
		handlePlanClick,
		addAddOn,
		removeAddOn,
	}
}
