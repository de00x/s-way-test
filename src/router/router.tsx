import { Main } from '../components/Main'
import { ErrorPage } from '../components/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import { RepositoryPage } from '../components/RepositoryPage'

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: 'repositoryPage',
				element: <RepositoryPage />,
			},
		],
	},
])
