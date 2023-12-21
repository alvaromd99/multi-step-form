interface PlanCardProps {
	title: string
	price: string
	svg: string
}

export default function PlanCard({ title, price, svg }: PlanCardProps) {
	return (
		<div className='plan-card'>
			<img src={svg} alt={`${title} image`} />
			<h2></h2>
			<p>{`$${price}/mo`}</p>
		</div>
	)
}
