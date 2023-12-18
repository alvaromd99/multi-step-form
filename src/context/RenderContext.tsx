import { createContext } from 'react'

interface RenderContextProps {
	componentToShow: number
	changeComponentToShow: (newComp: number) => void
}

export const RenderContext = createContext<RenderContextProps>(
	{} as RenderContextProps
)
