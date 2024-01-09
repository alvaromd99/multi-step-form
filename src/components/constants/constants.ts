import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvanceIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'
import { FormValuesAndErrorsState } from '../../context/InfoProvider'

interface InputDetails {
	id: keyof FormValuesAndErrorsState
	label: string
	type: string
	placeholder: string
}

export const inputDetails: InputDetails[] = [
	{ id: 'name', label: 'Name', type: 'text', placeholder: 'e.g. Stephen King' },
	{
		id: 'email',
		label: 'Email Address',
		type: 'email',
		placeholder: 'e.g. stephen@example.com',
	},
	{
		id: 'phone',
		label: 'Phone Number',
		type: 'text',
		placeholder: 'e.g. +1 234 567 890',
	},
]

export const plansDetails = [
	{ id: '1', title: 'Arcade', priceMonth: 9, priceYear: 90, svg: ArcadeIcon },
	{
		id: '2',
		title: 'Advance',
		priceMonth: 12,
		priceYear: 120,
		svg: AdvanceIcon,
	},
	{ id: '3', title: 'Pro', priceMonth: 15, priceYear: 150, svg: ProIcon },
]

export const checkboxesDetails = [
	{
		title: 'Online service',
		description: 'Access to multiplayer games',
		priceMonth: 1,
		priceYear: 10,
		inputName: 'firstCheckbox',
	},
	{
		title: 'Larger storage',
		description: 'Extra 1TB of cloud storage',
		priceMonth: 2,
		priceYear: 20,
		inputName: 'secondCheckbox',
	},
	{
		title: 'Customizable profile',
		description: 'Custom theme on your profile',
		priceMonth: 2,
		priceYear: 20,
		inputName: 'thirdCheckbox',
	},
]
