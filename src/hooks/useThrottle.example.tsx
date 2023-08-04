import { useEffect, useRef, useCallback } from 'react'

type CallbackFunction = (...args: any[]) => void

function useThrottle<T extends CallbackFunction>(
	callback: T,
	delay: number
): T {
	const timeoutRef = useRef<number | null>(null)
	const lastExecTime = useRef<number>(0)

	useEffect(() => {
		return () => {
			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	const throttledCallback = useCallback(
		(...args: Parameters<T>) => {
			const now = Date.now()
			const timeElapsed = now - lastExecTime.current

			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current)
			}

			if (timeElapsed >= delay) {
				lastExecTime.current = now
				callback(...args)
			} else {
				timeoutRef.current = setTimeout(() => {
					lastExecTime.current = Date.now()
					callback(...args)
				}, delay - timeElapsed)
			}
		},
		[callback, delay]
	)

	return throttledCallback as T
}

export default useThrottle
