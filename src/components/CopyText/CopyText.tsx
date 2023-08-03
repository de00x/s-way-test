import { FC, useState } from 'react'
import styles from './styles/CopyText.module.scss'
import { ICopyTextProps } from '../../types/types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CopyTextControllers from './controllers/CopyText.controllers'

export const CopyText: FC<ICopyTextProps> = ({ ...props }) => {
	const [textButton, setTextButton] = useState('Copy')

	const { editTextButton } = CopyTextControllers({ setTextButton })

	return (
		<div className={styles.copyTextContainer}>
			<CopyToClipboard text={props.inputValue}>
				<button onClick={() => editTextButton()} type="button">
					{textButton}
				</button>
			</CopyToClipboard>
		</div>
	)
}
