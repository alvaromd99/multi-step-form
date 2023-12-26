interface PlanCardProps {
	title: string
	price: string
	svg: string
}

export default function PlanCard({ title, price, svg }: PlanCardProps) {
	return (
		<div className='plan-card'>
			<div className='card-img'>
				<img src={svg} alt={`${title} image`} />
			</div>
			<div className='card-text'>
				<h2>{title}</h2>
				<p>{`$${price}/mo`}</p>
			</div>
		</div>
	)
}
