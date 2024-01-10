import { useRender } from '../../hooks/useRender'
import './SideBar.css'

interface SideStepProps {
	order: number
	text: string
}

const SideStep = ({ order, text }: SideStepProps) => {
	const { componentToShow } = useRender()

	const className = order === componentToShow ? 'selected' : ''

	return (
		<div className={`side-step ${className}`}>
			<div className='side-step-number'>
				<p>{order}</p>
			</div>
			<div className='side-step-content'>
				<p>{`Step ${order}`}</p>
				<h2>{text}</h2>
			</div>
		</div>
	)
}

export default SideStep
