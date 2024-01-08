import { usePlans } from '../../hooks/usePlans'

interface PlanCardProps {
	title: string
	priceMonth: string
	priceYear: string
	svg: string
}

export default function PlanCard({
	title,
	priceMonth,
	priceYear,
	svg,
}: PlanCardProps) {
	const { isChecked, planSelected, handlePlanClick } = usePlans()

	const typeOfPayment = isChecked ? 'yearly' : 'monthly'
	const isSelected = planSelected.name === title

	return (
		<div
			className={`plan-card ${isSelected ? 'selected' : ''}`}
			onClick={() =>
				handlePlanClick({
					name: title,
					typeOfPay: typeOfPayment,
					price: typeOfPayment === 'monthly' ? priceMonth : priceYear,
				})
			}>
			<div className='card-img'>
				<img src={svg} alt={`${title} image`} />
			</div>
			<div className='card-text'>
				<h2>{title}</h2>
				<p>
					{typeOfPayment === 'monthly'
						? `$ ${priceMonth}/mo`
						: `$ ${priceYear}/yr`}
				</p>
				{typeOfPayment === 'yearly' && (
					<p className='free-months'>2 months free</p>
				)}
			</div>
		</div>
	)
}
