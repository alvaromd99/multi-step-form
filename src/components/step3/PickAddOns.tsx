import { useState } from 'react'
import Footer from '../footer/Footer'
import Title from '../header/Title'
import AddOn from './AddOn'
import './PickAddOns.css'

export interface CheckboxesState {
	firstCheckbox: boolean
	secondCheckbox: boolean
	thirdCheckbox: boolean
}

const PickAddOns = () => {
	const [checkboxes, setCheckboxes] = useState<CheckboxesState>({
		firstCheckbox: false,
		secondCheckbox: false,
		thirdCheckbox: false,
	})

	const handleAddOnClick = (checkboxKey: keyof CheckboxesState) => {
		setCheckboxes({
			...checkboxes,
			[checkboxKey]: !checkboxes[checkboxKey],
		})
	}

	return (
		<div className='main-content-step step-three'>
			<Title
				title='Pick add-ons'
				subtitle='Add-ons help enhance your gaming experience'
			/>
			<div className='add-on-cont'>
				<AddOn
					title='Online service'
					description='Access to multiplayer games'
					price='1'
					inputName='firstCheckbox'
					isChecked={checkboxes.firstCheckbox}
					handleClick={() => handleAddOnClick('firstCheckbox')}
				/>
				<AddOn
					title='Larger storage'
					description='Extra 1TB of cloud storage'
					price='2'
					inputName='secondCheckbox'
					isChecked={checkboxes.secondCheckbox}
					handleClick={() => handleAddOnClick('secondCheckbox')}
				/>
				<AddOn
					title='Customizable profile'
					description='Custom theme on your profile'
					price='2'
					inputName='thirdCheckbox'
					isChecked={checkboxes.thirdCheckbox}
					handleClick={() => handleAddOnClick('thirdCheckbox')}
				/>
			</div>
			<Footer order={3} />
		</div>
	)
}

export default PickAddOns
