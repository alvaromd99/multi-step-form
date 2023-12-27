interface PlanCardProps {
	title: string
	priceMonth: string
	priceYear: string
	typeOfPrice: 'month' | 'year'
	svg: string
}

export default function PlanCard({
	title,
	priceMonth,
	priceYear,
	typeOfPrice,
	svg,
}: PlanCardProps) {
	return (
		<div className='plan-card'>
			<div className='card-img'>
				<img src={svg} alt={`${title} image`} />
			</div>
			<div className='card-text'>
				<h2>{title}</h2>
				<p>
					{typeOfPrice === 'month' ? `$ ${priceMonth}/mo` : `$ ${priceYear}/yr`}
				</p>
				{typeOfPrice === 'year' && <p>2 months free</p>}
			</div>
		</div>
	)
}
