import { FC } from 'react'
import store from '../../store/store'
import { observer } from 'mobx-react-lite'
import styles from './styles/Repositories.module.scss'
import { IRepositoriesProps } from '../../types/types'
import RepositoriesControllers from './controllers/Repositories.controllers'

export const Repositories: FC<IRepositoriesProps> = observer(({ ...props }) => {
	const { state, addRepository } = store

	const { redirectToCurrUser } = RepositoriesControllers()

	return (
		<div className={styles.repositoriesContainer}>
			<div className={styles.repositoriesSearch}>
				<div className={styles.repositoriesHeader}>Список репозиториев:</div>
				{props.repositoryData.map((repository) => (
					<div key={repository.id}>
						<div
							className={styles.repositoryContainer}
							onClick={() => addRepository(repository)}
						>
							<div className={styles.repositoryImg}>
								<img src={repository.owner.avatar_url} />
							</div>
							<div>Stargazers: {repository.stargazers_count}</div>
							<div>Forks: {repository.forks_count}</div>
						</div>
						<div className={styles.repositoryLink}>
							<button onClick={redirectToCurrUser(repository)}>
								Для перехода на страницу подробнее ↑
							</button>
						</div>
					</div>
				))}
			</div>
			<div className={styles.favoritesRepositeries}>
				<div className={styles.repositoriesHeader}>
					Список с избранными репозиториями:
				</div>
				{state.map((favRepository) => (
					<div key={favRepository.id}>
						<div className={styles.favRepositoryContainer}>
							<div className={styles.repositoryImg}>
								<img src={favRepository.owner.avatar_url} />
							</div>
							<div>Stargazers: {favRepository.stargazers_count}</div>
							<div>Forks: {favRepository.forks_count}</div>
						</div>
						<div className={styles.repositoryLink}>
							<button onClick={redirectToCurrUser(favRepository)}>
								Для перехода на страницу подробнее ↑
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
})
