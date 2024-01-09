import Footer from '../footer/Footer'
import Title from '../header/Title'
import PlanCard from './PlanCard'
import './SelectPlan.css'
import { plansDetails } from '../constants/constants'
import { PlanSwitch } from './PlanSwitch'

const SelectPlan = () => {
	return (
		<div className='main-content-step step-two'>
			<Title
				title='Select your plan'
				subtitle='You have the option of monthly or yearly billing.'
			/>
			<div className='plan-content'>
				{plansDetails.map(({ id, title, priceMonth, priceYear, svg }) => (
					<PlanCard
						key={id}
						title={title}
						priceMonth={priceMonth}
						priceYear={priceYear}
						svg={svg}
					/>
				))}
			</div>
			<PlanSwitch />
			<Footer order={2} />
		</div>
	)
}

export default SelectPlan
