import { ICopyTextControllsProps } from '../../../types/types'

const CopyTextControllers = ({ ...props }: ICopyTextControllsProps) => {
	const editTextButton = () => {
		props.setTextButton('Copied')
		setTimeout(() => {
			props.setTextButton('Copy')
		}, 2000)
	}
	return { editTextButton }
}

export default CopyTextControllers
