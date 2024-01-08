import { createContext } from 'react'
import { PlanSelectedState } from './PlansProvider'

interface PlansContextProps {
	isChecked: boolean
	planSelected: PlanSelectedState
	handleToggleChange: () => void
	handlePlanClick: ({ name, typeOfPay, price }: PlanSelectedState) => void
}

export const PlansContext = createContext<PlansContextProps>(
	{} as PlansContextProps
)
