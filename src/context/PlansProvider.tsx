import { useMemo, useState } from 'react'
import { PlansContext } from './PlansContext'

interface PlansProviderProps {
	children: JSX.Element | JSX.Element[]
}

export interface PlanSelectedState {
	name: string
	typeOfPay: 'monthly' | 'yearly'
	price: number
}

export interface AddOnsSelectedState {
	id: string
	name: string
	price: number
}

export interface CheckboxesState {
	firstCheckbox: boolean
	secondCheckbox: boolean
	thirdCheckbox: boolean
}

export const PlansProvider = ({ children }: PlansProviderProps) => {
	const [isChecked, setIsChecked] = useState(false)
	const [planSelected, setPlanSelected] = useState<PlanSelectedState>({
		name: '',
		typeOfPay: 'monthly',
		price: 0,
	})
	const [addOnsSelected, setAddOnsSelected] = useState<AddOnsSelectedState[]>(
		[]
	)

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

	const addAddOn = ({ id, name, price }: AddOnsSelectedState) => {
		const newAddOn = {
			id,
			name,
			price,
		}
		setAddOnsSelected([...addOnsSelected, newAddOn])
	}

	const removeAddOn = (id: string) => {
		const updatedAddOns = addOnsSelected.filter((addOn) => addOn.id !== id)

		setAddOnsSelected(updatedAddOns)
	}

	const checkboxes = useMemo(() => {
		return {
			firstCheckbox: addOnsSelected.some((item) => item.id === 'firstCheckbox'),
			secondCheckbox: addOnsSelected.some(
				(item) => item.id === 'secondCheckbox'
			),
			thirdCheckbox: addOnsSelected.some((item) => item.id === 'thirdCheckbox'),
		}
	}, [addOnsSelected])

	return (
		<PlansContext.Provider
			value={{
				isChecked,
				planSelected,
				addOnsSelected,
				checkboxes,
				handleToggleChange,
				handlePlanClick,
				addAddOn,
				removeAddOn,
			}}>
			{children}
		</PlansContext.Provider>
	)
}
