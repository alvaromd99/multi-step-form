import { useState } from 'react'
import { RenderContext } from './RenderContext'

const INITIAL_STATE = 1

interface RenderProviderProps {
	children: JSX.Element | JSX.Element[]
}

export const RenderProvider = ({ children }: RenderProviderProps) => {
	const [componentToShow, setComponentToShow] = useState(INITIAL_STATE)

	const changeComponentToShow = (newComp: number) => {
		setComponentToShow(newComp)
	}

	return (
		<RenderContext.Provider value={{ componentToShow, changeComponentToShow }}>
			{children}
		</RenderContext.Provider>
	)
}
