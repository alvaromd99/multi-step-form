import Footer from '../footer/Footer'
import Title from '../header/Title'

const Summary = () => {
	return (
		<div className='main-content-step step-three'>
			<Title
				title='Finishing up'
				subtitle='Double-check everything is OK before confirming'
			/>
			<Footer order={4} />
		</div>
	)
}

export default Summary
