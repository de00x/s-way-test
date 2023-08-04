import { useCallback } from 'react'
import { ICopyTextControllsProps } from '../../../types/types'

const CopyTextControllers = ({ setTextButton }: ICopyTextControllsProps) => {
	const editTextButton = useCallback(() => {
		setTextButton((prevTextButton) => (prevTextButton = 'Copied'))
		setTimeout(() => {
			setTextButton((prevTextButton) => (prevTextButton = 'Copy'))
		}, 2000)
	}, [setTextButton])

	return { editTextButton }
}

export default CopyTextControllers
