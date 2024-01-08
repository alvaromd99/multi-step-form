import { createContext } from 'react'
import {
	AddOnsSelectedState,
	CheckboxesState,
	PlanSelectedState,
} from './PlansProvider'

interface PlansContextProps {
	isChecked: boolean
	planSelected: PlanSelectedState
	addOnsSelected: AddOnsSelectedState[]
	checkboxes: CheckboxesState
	handleToggleChange: () => void
	handlePlanClick: ({ name, typeOfPay, price }: PlanSelectedState) => void
	addAddOn: ({ name, price }: AddOnsSelectedState) => void
	removeAddOn: (id: string) => void
}

export const PlansContext = createContext<PlansContextProps>(
	{} as PlansContextProps
)
