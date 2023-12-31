interface PlanCardProps {
	title: string
	priceMonth: string
	priceYear: string
	typeOfPrice: 'month' | 'year'
	svg: string
	handleClick: (plan: string) => void
	isSelected: boolean
}

export default function PlanCard({
	title,
	priceMonth,
	priceYear,
	typeOfPrice,
	svg,
	handleClick,
	isSelected,
}: PlanCardProps) {
	return (
		<div
			className={`plan-card ${isSelected ? 'selected' : ''}`}
			onClick={() => handleClick(title)}>
			<div className='card-img'>
				<img src={svg} alt={`${title} image`} />
			</div>
			<div className='card-text'>
				<h2>{title}</h2>
				<p>
					{typeOfPrice === 'month' ? `$ ${priceMonth}/mo` : `$ ${priceYear}/yr`}
				</p>
				{typeOfPrice === 'year' && <p className='free-months'>2 months free</p>}
			</div>
		</div>
	)
}
