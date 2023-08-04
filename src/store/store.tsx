import { makeAutoObservable } from 'mobx'
import { IResponseUser } from '../types/types'

class Store {
	state: IResponseUser[] = []

	constructor() {
		makeAutoObservable(this)
	}

	addRepository = (repository: IResponseUser) => {
		const isDuplicate = this.checkDuplicate(repository.id)
		if (!isDuplicate) {
			this.state.push(repository)
		} else {
			alert(`Пользователь ${repository.name} уже есть в данном списке!`)
		}
	}

	private checkDuplicate = (id: number): boolean => {
		return this.state.some((el) => el.id === id)
	}
}

export default new Store()
