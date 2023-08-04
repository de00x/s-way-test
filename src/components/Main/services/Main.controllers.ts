import axios from 'axios'
import { useDebouncedCallback } from '../../../hooks'
import { IMainControllersProps } from '../../../types/types'

const MainControllers = ({
	setRepositoryData,
	setInputValue,
}: IMainControllersProps) => {
	const makeRequest = useDebouncedCallback((inputValue: string) => {
		if (inputValue.length !== 0) {
			axios
				.get(`https://api.github.com/search/repositories?q=${inputValue}`)
				.then((res) => setRepositoryData(res.data.items))
				.catch((err) => console.log(err))
		}
	}, 1000)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setInputValue(value)
		executeRequest(value)
	}

	const executeRequest = (inputValue: string) => {
		makeRequest(inputValue)
	}

	return { handleInputChange }
}

export default MainControllers
