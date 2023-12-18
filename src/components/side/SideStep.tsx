import { useRender } from '../../hooks/useRender'

interface SideStepProps {
	order: number
	text: string
}

const SideStep = ({ order, text }: SideStepProps) => {
	const { componentToShow } = useRender()

	const className = order === componentToShow ? 'selected' : ''

	return (
		<div className={`step ${className}`}>
			<div className='step-number'>
				<p>{order}</p>
			</div>
			<div className='step-content'>
				<p>{`Step ${order}`}</p>
				<h2>{text}</h2>
			</div>
		</div>
	)
}

export default SideStep
