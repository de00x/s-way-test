import { makeAutoObservable } from 'mobx'
import { IResponseUser } from '../types/types'
import { duplicateRepository } from '../helpers/store.helper'

class Store {
	state: IResponseUser[] = []

	constructor() {
		makeAutoObservable(this)
	}

	addRepository = (repository: IResponseUser) => {
		if (!duplicateRepository(this.state, repository.id)) {
			this.state.push(repository)
		} else {
			alert(`Пользователь ${repository.name} уже есть в данном списке!`)
		}
	}
}

export default new Store()
