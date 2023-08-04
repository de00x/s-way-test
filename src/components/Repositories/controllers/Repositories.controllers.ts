import { useNavigate } from 'react-router-dom'
import { IResponseUser } from '../../../types/types'

const RepositoriesControllers = () => {
	const navigate = useNavigate()

	const redirectToCurrUser = (repository: IResponseUser) => {
		return () => {
			const repositoryString = JSON.stringify(repository)
			localStorage.setItem('currUser', repositoryString)
			navigate('/repositoryPage')
		}
	}
	return { redirectToCurrUser }
}

export default RepositoriesControllers
