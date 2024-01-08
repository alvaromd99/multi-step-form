import { useState } from 'react'
import { PlansContext } from './PlansContext'

interface PlansProviderProps {
	children: JSX.Element | JSX.Element[]
}

export const PlansProvider = ({ children }: PlansProviderProps) => {
	const [isChecked, setIsChecked] = useState(false)

	const handleToggleChange = () => {
		setIsChecked(!isChecked)
	}

	return (
		<PlansContext.Provider value={{ isChecked, handleToggleChange }}>
			{children}
		</PlansContext.Provider>
	)
}
