import { useRender } from '../../hooks/useRender'
import InfoForm from '../steps/InfoForm'
import PickAddOns from '../steps/PickAddOns'
import SelectPlan from '../steps/SelectPlan'
import Summary from '../steps/Summary'

export default function MainContent() {
	const { componentToShow } = useRender()

	return (
		<div className='main-content'>
			{componentToShow === 1 && <InfoForm />}
			{componentToShow === 2 && <SelectPlan />}
			{componentToShow === 3 && <PickAddOns />}
			{componentToShow === 4 && <Summary />}
		</div>
	)
}
