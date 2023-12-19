import { useRender } from '../../hooks/useRender'

interface FooterProps {
	order: number
}

export default function Footer({ order }: FooterProps) {
	const { changeComponentToShow } = useRender()

	const isDisabled = order === 1

	return (
		<div
			className='footer'
			style={{ justifyContent: isDisabled ? 'flex-end' : 'space-between' }}>
			<button
				className='back-btn'
				onClick={() => changeComponentToShow(order + 1)}
				disabled={isDisabled}
				style={{ display: isDisabled ? 'none' : 'block' }}>
				Go Back
			</button>
			<button
				className='next-btn'
				onClick={() => changeComponentToShow(order + 1)}>
				Next Step
			</button>
		</div>
	)
}
