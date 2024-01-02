import { ChangeEvent } from 'react'
import Check from '../../assets/check.svg'

interface AddOnProps {
	title: string
	description: string
	price: string
	inputName: string
	isChecked: boolean
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const AddOn = ({
	title,
	description,
	price,
	inputName,
	isChecked,
	handleChange,
}: AddOnProps) => {
	return (
		<div className='add-on'>
			<div className='add-on-first-part'>
				<label htmlFor={inputName} className='add-on-checkbox'>
					<input
						type='checkbox'
						name={inputName}
						id={inputName}
						className='checkbox'
						checked={isChecked}
						onChange={handleChange}
					/>
					<img src={Check} alt='Check' />
				</label>
				<div className='add-on-title'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
			<p className='add-on-price'>{price}</p>
		</div>
	)
}

export default AddOn
