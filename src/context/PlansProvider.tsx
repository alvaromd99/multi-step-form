import { useState } from 'react'
import { PlansContext } from './PlansContext'

interface PlansProviderProps {
	children: JSX.Element | JSX.Element[]
}

export interface PlanSelectedState {
	name: string
	typeOfPay: 'monthly' | 'yearly'
	price: string
}

export const PlansProvider = ({ children }: PlansProviderProps) => {
	const [isChecked, setIsChecked] = useState(false)
	const [planSelected, setPlanSelected] = useState<PlanSelectedState>({
		name: '',
		typeOfPay: 'monthly',
		price: '',
	})
	/* const [addOnsSelected, setAddOnsSelected] = useState([]) */

	const handleToggleChange = () => {
		setIsChecked(!isChecked)
	}

	const handlePlanClick = ({ name, typeOfPay, price }: PlanSelectedState) => {
		const newPlan = {
			name,
			typeOfPay,
			price,
		}
		setPlanSelected(newPlan)
	}

	return (
		<PlansContext.Provider
			value={{ isChecked, planSelected, handleToggleChange, handlePlanClick }}>
			{children}
		</PlansContext.Provider>
	)
}
