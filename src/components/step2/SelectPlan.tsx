import Footer from '../footer/Footer'
import Title from '../header/Title'
import PlanCard from './PlanCard'

import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvanceIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'

const SelectPlan = () => {
	return (
		<div className='main-content-step step-two'>
			<Title
				title='Select your plan'
				subtitle='You have the option of monthly or yearly billing.'
			/>
			<div className='plan-content'>
				<PlanCard title='Arcade' price='9' svg={ArcadeIcon} />
				<PlanCard title='Advance' price='12' svg={AdvanceIcon} />
				<PlanCard title='Pro' price='15' svg={ProIcon} />
			</div>
			<label className='pay-plan-switch'>
				<input type='checkbox' />
				<span className='pay-plan-slider'></span>
			</label>
			<Footer order={2} />
		</div>
	)
}

export default SelectPlan
