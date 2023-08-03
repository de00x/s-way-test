import { FC, useState } from 'react'
import { CopyText } from '../CopyText'
import styles from './styles/Main.module.scss'
import { Repositories } from '../Repositories'
import { IResponseUser } from '../../types/types'
import MainControllers from './services/Main.controllers'

export const Main: FC = () => {
	const [inputValue, setInputValue] = useState('')
	const [repositoryData, setRepositoryData] = useState<IResponseUser[]>([])

	const { handleQueryChange } = MainControllers({
		setInputValue,
		setRepositoryData,
	})

	return (
		<div className={styles.mainContainer}>
			<div className={styles.headerConnectMeContainer}>
				<div>Search GitHub</div>
				<div>
					<a href="https://career.habr.com/de00x" target="_blank">
						by Denis Kartashov
					</a>
				</div>
			</div>
			<div className={styles.mainHeader}>
				<input
					type="text"
					placeholder="Search..."
					value={inputValue}
					onChange={(e) => handleQueryChange(e)}
				/>
				<CopyText inputValue={inputValue} />
			</div>
			<Repositories repositoryData={repositoryData} />
		</div>
	)
}
