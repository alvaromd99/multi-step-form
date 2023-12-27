import Footer from '../footer/Footer'
import Title from '../header/Title'
import PlanCard from './PlanCard'
import { useState } from 'react'
import './SelectPlan.css'

import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvanceIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'

const SelectPlan = () => {
	const [isChecked, setIsChecked] = useState(false)

	const handleToggleChange = () => {
		setIsChecked(!isChecked)
	}

	return (
		<div className='main-content-step step-two'>
			<Title
				title='Select your plan'
				subtitle='You have the option of monthly or yearly billing.'
			/>
			<div className='plan-content'>
				<PlanCard
					title='Arcade'
					priceMonth='9'
					priceYear=''
					typeOfPrice={isChecked ? 'year' : 'month'}
					svg={ArcadeIcon}
				/>
				<PlanCard
					title='Advance'
					priceMonth='12'
					priceYear=''
					typeOfPrice={isChecked ? 'year' : 'month'}
					svg={AdvanceIcon}
				/>
				<PlanCard
					title='Pro'
					priceMonth='15'
					priceYear=''
					typeOfPrice={isChecked ? 'year' : 'month'}
					svg={ProIcon}
				/>
			</div>
			<div className='pay-plan'>
				<label className='pay-plan-switch'>
					<input
						type='checkbox'
						id='pay-plan-checkbox'
						checked={isChecked}
						onChange={handleToggleChange}
					/>
					<span className='left-text'>Monthly</span>
					<span className='pay-plan-slider'></span>
					<span className='right-text'>Yearly</span>
				</label>
			</div>
			<Footer order={2} />
		</div>
	)
}

export default SelectPlan
