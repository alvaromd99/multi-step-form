import SideStep from './SideStep'

const SideBar = () => {
	return (
		<aside className='side-bar'>
			<div className='steps-cont'>
				<SideStep order={1} text='your info' />
				<SideStep order={2} text='select plan' />
				<SideStep order={3} text='add-ons' />
				<SideStep order={4} text='summary' />
			</div>
		</aside>
	)
}

export default SideBar
