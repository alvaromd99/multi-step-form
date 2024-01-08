import { createContext } from 'react'

interface PlansContextProps {
	isChecked: boolean
	handleToggleChange: () => void
}

export const PlansContext = createContext<PlansContextProps>(
	{} as PlansContextProps
)
