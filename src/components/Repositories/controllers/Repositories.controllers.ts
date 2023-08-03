import { useNavigate } from 'react-router-dom'
import { IResponseUser } from '../../../types/types'

const RepositoriesControllers = () => {
	const navigate = useNavigate()

	const redirectToCurrUser = (repository: IResponseUser) => {
		return () => {
			localStorage.setItem('currUser', JSON.stringify(repository))
			navigate('/repositoryPage')
		}
	}
	return { redirectToCurrUser }
}

export default RepositoriesControllers
