import { useContext } from 'react'
import { RenderContext } from '../context/RenderContext'

export const useRender = () => {
	const { componentToShow, changeComponentToShow } = useContext(RenderContext)

	return { componentToShow, changeComponentToShow }
}
