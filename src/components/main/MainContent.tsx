import { useRender } from '../../hooks/useRender'
import InfoForm from '../step1/InfoForm'
import PickAddOns from '../step3/PickAddOns'
import SelectPlan from '../step2/SelectPlan'
import Summary from '../step4/Summary'
import { Finish } from '../step5/Finish'

const MainContent = () => {
	const { componentToShow } = useRender()

	return (
		<div className='main-content'>
			{componentToShow === 1 && <InfoForm />}
			{componentToShow === 2 && <SelectPlan />}
			{componentToShow === 3 && <PickAddOns />}
			{componentToShow === 4 && <Summary />}
			{componentToShow === 5 && <Finish />}
		</div>
	)
}

export default MainContent
