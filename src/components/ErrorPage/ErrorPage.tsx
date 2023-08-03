import { FC } from 'react'
import pageNotFoundImg from '../../assets/page_not_found.avif'

const bgdStyles = {
	width: '100%',
	heigth: '100%',
	display: 'flex',
	justifyContent: 'center',
}

export const ErrorPage: FC = () => {
	return (
		<div style={bgdStyles}>
			<img src={pageNotFoundImg} />
		</div>
	)
}
