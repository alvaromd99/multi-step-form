import Footer from '../footer/Footer'
import Title from '../header/Title'
import CustomInput from './CustomInput'
import './InfoForm.css'

const InfoForm = () => {
	return (
		<div className='main-content-step step-one'>
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
					id='phone'
					label='Phone Number'
					type='text'
					placeholder='e.g. +1 234 567 890'
				/>
			</div>
			<Footer order={1} />
		</div>
	)
}

export default InfoForm
