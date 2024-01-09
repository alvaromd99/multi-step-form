import { inputDetails } from '../constants/constants'
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
				{inputDetails.map(({ id, label, type, placeholder }) => (
					<CustomInput
						key={id}
						id={id}
						label={label}
						type={type}
						placeholder={placeholder}
					/>
				))}
			</div>
			<Footer order={1} />
		</div>
	)
}

export default InfoForm
