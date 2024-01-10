import TyIcon from '../../assets/images/icon-thank-you.svg'

export const Finish = () => {
	return (
		<div className='main-content-step step-five finish-cont'>
			<img src={TyIcon} alt='Thank you Icon' />
			<h3>Thank you!</h3>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	)
}
