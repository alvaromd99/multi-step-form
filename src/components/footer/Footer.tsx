import { useCallback } from 'react'
import { FormValuesAndErrorsState } from '../../context/InfoProvider'
import { useInfo } from '../../hooks/useInfo'
import { useRender } from '../../hooks/useRender'

interface FooterProps {
	order: number
}

export default function Footer({ order }: FooterProps) {
	const { changeComponentToShow } = useRender()
	const { formValues, formErrors, handleFormErrorChange } = useInfo()

	const isDisabled = order === 1
	const isLast = order === 4

	const allPropertiesEmpty = useCallback((obj: FormValuesAndErrorsState) => {
		return Object.values(obj).every((prop) => prop === '')
	}, [])

	const handleComponentChange = () => {
		if (order === 1) {
			let newFormError
			Object.keys(formValues).forEach((key) => {
				if (formValues[key as keyof FormValuesAndErrorsState] === '') {
					newFormError = {
						property: key as keyof FormValuesAndErrorsState,
						value: 'This field is required.',
					}
					handleFormErrorChange(newFormError)
				}
			})
			if (newFormError === undefined && allPropertiesEmpty(formErrors)) {
				changeComponentToShow(order + 1)
			}
		} else {
			changeComponentToShow(order + 1)
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
			<button
				className={`next-btn ${isLast ? 'last' : ''}`}
				onClick={handleComponentChange}>
				{isLast ? 'Confirm' : 'Next'}
			</button>
		</div>
	)
}
