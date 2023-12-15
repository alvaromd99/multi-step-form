interface SideStepProps {
	order: number
	text: string
}

const SideStep = ({ order, text }: SideStepProps) => {
	return (
		<div className='step'>
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
