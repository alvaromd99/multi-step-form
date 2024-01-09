import { usePlans } from '../../hooks/usePlans'
import Footer from '../footer/Footer'
import Title from '../header/Title'
import './Summary.css'

const Summary = () => {
	const { planSelected, addOnsSelected } = usePlans()

	const total = addOnsSelected.reduce((acc, addOn) => {
		return acc + addOn.price
	}, planSelected.price)

	console.log(total)

	return (
		<div className='main-content-step step-three'>
			<Title
				title='Finishing up'
				subtitle='Double-check everything is OK before confirming'
			/>
			<div className='summary-info-cont'>
				<div className='summary-plan-info'>
					<div className='plan-name'>
						<h3>{`${planSelected.name} (${planSelected.typeOfPay})`}</h3>
						<button>change</button>
					</div>
					<div className='plan-price'>
						<h3>{`$${planSelected.price}/${
							planSelected.typeOfPay === 'monthly' ? 'mo' : 'yr'
						}`}</h3>
					</div>
				</div>
				<hr />
				<div className='summary-addon-info'>
					{addOnsSelected.map((addOn) => (
						<div className='summary-addon-name' key={addOn.id}>
							<p>{addOn.name}</p>
							<p>{`+$${addOn.price}/${
								planSelected.typeOfPay === 'monthly' ? 'mo' : 'yr'
							}`}</p>
						</div>
					))}
				</div>
			</div>
			<div className='summary-total'>
				<p>{`Total ${
					planSelected.typeOfPay === 'monthly' ? '(per month)' : '(per year)'
				}`}</p>
				<p>{`+$${total}/${
					planSelected.typeOfPay === 'monthly' ? 'mo' : 'yr'
				}`}</p>
			</div>
			<Footer order={4} />
		</div>
	)
}

export default Summary
