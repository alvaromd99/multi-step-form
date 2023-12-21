import { useRender } from '../../hooks/useRender'

interface SideStepProps {
	order: number
	text: string
}

const SideStep = ({ order, text }: SideStepProps) => {
	const { componentToShow } = useRender()
	const { changeComponentToShow } = useRender()

	const className = order === componentToShow ? 'selected' : ''

	return (
		<div
			className={`side-step ${className}`}
			onClick={() => changeComponentToShow(order)}>
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
