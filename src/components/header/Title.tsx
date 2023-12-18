interface TitleProps {
	title: string
	subtitle: string
}

const Title = ({ title, subtitle }: TitleProps) => {
	return (
		<div className='header'>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>
	)
}

export default Title
