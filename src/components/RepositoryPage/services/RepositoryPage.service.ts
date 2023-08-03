import { useEffect } from 'react'
import { IResponseUser } from '../../../types/types'

export const RepositoryPageService = {
	GetCurrUserData(
		setCurrUserData: React.Dispatch<React.SetStateAction<IResponseUser[]>>
	) {
		useEffect(() => {
			const getDataCurrUserFromLS = localStorage.getItem('currUser')
			if (getDataCurrUserFromLS !== null) {
				const userDataParse = JSON.parse(getDataCurrUserFromLS)
				setCurrUserData([userDataParse])
			}
		}, [])
	},
}
