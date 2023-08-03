import axios from 'axios'
import { useCallback } from 'react'
import { debounce } from 'lodash-es'
import { IMainControllersProps } from '../../../types/types'

const MainControllers = ({ ...props }: IMainControllersProps) => {
	const makeRequest = useCallback(
		debounce((inputValue: string) => {
			axios
				.get(`https://api.github.com/search/repositories?q=${inputValue}`)
				.then((res) => props.setRepositoryData(res.data.items))
				.catch((err) => console.log(err))
		}, 1000),
		[]
	)

	const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		makeRequest(value)
		props.setInputValue(value)
	}

	return { handleQueryChange }
}

export default MainControllers

/// debounce ///

// function debounce(cb, delay) {
// 	let timeout

// 	return (...args) => {
// 		clearTimeout(timeout)
// 		timeout = setTimeout(() => {
// 			cb(...args)
// 		}, delay)
// 	}
// }

/// debounce ///

/// throttling ///

// function throttle(cb, delay) {
// 	let shouldWait = false
// 	let waitingArgs
// 	const timeoutFunc = () => {
// 		if (waitingArgs == null) {
// 			shouldWait = false
// 		} else {
// 			cb(...waitingArgs)
// 			waitingArgs = null
// 			setTimeout(timeoutFunc, delay)
// 		}
// 	}
// }

/// throttling ///
