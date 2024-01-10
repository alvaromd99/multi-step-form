import { useState } from 'react'
import { FormValuesAndErrorsState } from '../../context/InfoProvider'
import { useInfo } from '../../hooks/useInfo'
import { useRender } from '../../hooks/useRender'
import { usePlans } from '../../hooks/usePlans'

interface FooterProps {
	order: number
}

export default function Footer({ order }: FooterProps) {
	const [error, setError] = useState('')

	const { changeComponentToShow } = useRender()
	const { formValues } = useInfo()
	const { planSelected } = usePlans()

	const isDisabled = order === 1
	const isLast = order === 4

	function allPropertiesEmpty(obj: FormValuesAndErrorsState) {
		return Object.values(obj).every((prop) => prop === '')
	}

	const handleComponentChange = () => {
		if (order === 1) {
			if (!allPropertiesEmpty(formValues)) {
				changeComponentToShow(order + 1)
			} else {
				setError('Please fill in all required fields.')
			}
		}

		if (order === 2) {
			if (planSelected.name !== '') {
				changeComponentToShow(order + 1)
			} else {
				setError('Please chose a plan.')
			}
		}

		if (order === 3) {
			console.log('3')
		}
	}

	return (
		<div
			className='footer'
			style={{ justifyContent: isDisabled ? 'flex-end' : 'space-between' }}>
			<button
				className='back-btn'
				onClick={() => changeComponentToShow(order - 1)}
				disabled={isDisabled}
				style={{ display: isDisabled ? 'none' : 'block' }}>
				Go Back
			</button>
			<div>
				{error !== '' && <p className='footer-error-msg'>{error}</p>}
				<button
					className={`next-btn ${isLast ? 'last' : ''}`}
					onClick={() => handleComponentChange()}>
					{isLast ? 'Confirm' : 'Next'}
				</button>
			</div>
		</div>
	)
}
