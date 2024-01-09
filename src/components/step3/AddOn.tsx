import Check from '../../assets/check.svg'
import { usePlans } from '../../hooks/usePlans'

interface AddOnProps {
	title: string
	description: string
	priceMonth: number
	priceYear: number
	inputName: string
	isAddOnChecked: boolean
}

const AddOn = ({
	title,
	description,
	priceMonth,
	priceYear,
	inputName,
	isAddOnChecked,
}: AddOnProps) => {
	const { isChecked, addAddOn, removeAddOn } = usePlans()

	const typeOfPayment = isChecked ? 'yearly' : 'monthly'

	const handleClick = () => {
		if (isAddOnChecked) {
			removeAddOn(inputName)
		} else if (!isAddOnChecked) {
			const newAddOn = {
				id: inputName,
				name: title,
				price: typeOfPayment === 'monthly' ? priceMonth : priceYear,
			}
			addAddOn(newAddOn)
		}
	}

	return (
		<div className='add-on' onClick={handleClick}>
			<div className='add-on-first-part'>
				<label htmlFor={inputName} className='add-on-checkbox'>
					<input
						type='checkbox'
						name={inputName}
						id={inputName}
						className='checkbox'
						checked={isAddOnChecked}
						readOnly
					/>
					<img src={Check} alt='Check' />
				</label>
				<div className='add-on-title'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
			<p className='add-on-price'>
				{typeOfPayment === 'monthly'
					? `+ $${priceMonth}/mo`
					: `+ $${priceYear}/yr`}
			</p>
		</div>
	)
}

export default AddOn
