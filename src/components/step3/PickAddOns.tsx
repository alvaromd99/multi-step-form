import Footer from '../footer/Footer'
import Title from '../header/Title'
import AddOn from './AddOn'
import './PickAddOns.css'
import { usePlans } from '../../hooks/usePlans'
import { checkboxesDetails } from '../constants/constants'
import { CheckboxesState } from '../../context/PlansProvider'

const PickAddOns = () => {
	const { checkboxes } = usePlans()

	return (
		<div className='main-content-step step-three'>
			<Title
				title='Pick add-ons'
				subtitle='Add-ons help enhance your gaming experience'
			/>
			<div className='add-on-cont'>
				{checkboxesDetails.map(
					({ title, description, inputName, priceMonth, priceYear }) => (
						<AddOn
							key={inputName}
							title={title}
							description={description}
							priceMonth={priceMonth}
							priceYear={priceYear}
							inputName={inputName}
							isAddOnChecked={checkboxes[inputName as keyof CheckboxesState]}
						/>
					)
				)}
			</div>
			<Footer order={3} />
		</div>
	)
}

export default PickAddOns
