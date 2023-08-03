interface IOwner {
	avatar_url: string
}

interface IResponseUser {
	forks_count: number
	stargazers_count: number
	name: string
	url: string
	owner: IOwner
	id: number
}

interface IRepositoriesProps {
	repositoryData: IResponseUser[]
}

interface IMainControllersProps {
	setInputValue: React.Dispatch<React.SetStateAction<string>>
	setRepositoryData: React.Dispatch<React.SetStateAction<IResponseUser[]>>
}

interface ICopyTextProps {
	inputValue: string
}

interface ICopyTextControllsProps {
	setTextButton: React.Dispatch<React.SetStateAction<string>>
}

export type {
	IResponseUser,
	IRepositoriesProps,
	IMainControllersProps,
	ICopyTextProps,
	ICopyTextControllsProps,
}
