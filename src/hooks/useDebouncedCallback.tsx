import { useEffect, useRef, useCallback } from 'react'

type CallbackFunction = (...args: any[]) => void

function useDebouncedCallback<T extends CallbackFunction>(
	callback: T,
	delay: number
): T {
	const timeoutRef = useRef<number>()

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current)
	}, [])

	const debouncedCallback = useCallback(
		(...args: Parameters<T>) => {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = setTimeout(() => {
				callback(...args)
			}, delay)
		},
		[callback, delay]
	)

	return debouncedCallback as T
}

export default useDebouncedCallback
