import Title from '../header/Title'
import CustomInput from './CustomInput'

const InfoForm = () => {
	return (
		<div className='step1'>
			<Title
				title='Personal Info'
				subtitle='Please provide your name, email address and phone number.'
			/>
			<div className='form-content'>
				<CustomInput
					id='name'
					label='Name'
					type='text'
					placeholder='e.g. Stephen King'
				/>
				<CustomInput
					id='email'
					label='Email Address'
					type='email'
					placeholder='e.g. stephen@example.com'
				/>
				<CustomInput
					id='phoneNumber'
					label='Phone Number'
					type='text'
					placeholder='e.g. +1 234 567 890'
				/>
			</div>
		</div>
	)
}

export default InfoForm
