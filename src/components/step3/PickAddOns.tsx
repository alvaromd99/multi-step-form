import { ChangeEvent, useState } from 'react'
import Footer from '../footer/Footer'
import Title from '../header/Title'
import AddOn from './AddOn'
import './PickAddOns.css'

const PickAddOns = () => {
	const [checkboxes, setCheckboxes] = useState({
		firstCheckbox: false,
		secondCheckbox: false,
		thirdCheckbox: false,
	})

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target
		setCheckboxes({ ...checkboxes, [name]: checked })
	}

	console.log(checkboxes)

	return (
		<div className='main-content-step step-two'>
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
					handleChange={handleCheckboxChange}
				/>
				<AddOn
					title='Larger storage'
					description='Extra 1TB of cloud storage'
					price='2'
					inputName='secondCheckbox'
					isChecked={checkboxes.secondCheckbox}
					handleChange={handleCheckboxChange}
				/>
				<AddOn
					title='Customizable profile'
					description='Custom theme on your profile'
					price='2'
					inputName='thirdCheckbox'
					isChecked={checkboxes.thirdCheckbox}
					handleChange={handleCheckboxChange}
				/>
			</div>
			<Footer order={3} />
		</div>
	)
}

export default PickAddOns
