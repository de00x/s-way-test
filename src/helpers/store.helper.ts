import { IResponseUser } from '../types/types'

export const duplicateRepository = (state: IResponseUser[], id: number) => {
	return state.find((el) => el.id === id)
}
