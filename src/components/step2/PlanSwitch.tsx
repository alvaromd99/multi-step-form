import { usePlans } from '../../hooks/usePlans'

export const PlanSwitch = () => {
	const { isChecked, handleToggleChange } = usePlans()
	return (
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
	)
}
