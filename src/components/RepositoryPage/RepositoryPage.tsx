import { FC, useState } from 'react'
import styles from './styles/RepPage.module.scss'
import { IResponseUser } from '../../types/types'
import { RepositoryPageService } from './services/RepositoryPage.service'

export const RepositoryPage: FC = () => {
	const [currUserData, setCurrUserData] = useState<IResponseUser[]>([])

	RepositoryPageService.GetCurrUserData(setCurrUserData)

	return (
		<div className={styles.repositoryPageContainer}>
			{currUserData.map((currUser: IResponseUser) => (
				<div className={styles.currUserContainer} key={currUser.id}>
					<div className={styles.currUserLogo}>
						<img src={currUser.owner.avatar_url} alt="currUserLogo" />
					</div>
					<div className={styles.currUserCounter}>
						User stargazers count: {currUser.stargazers_count}
					</div>
					<div className={styles.currUserCounter}>
						User forks count: {currUser.forks_count}
					</div>
					<div className={styles.currUserName}>Username: {currUser.name}</div>
					<div className={styles.currUserID}>UserID: {currUser.id}</div>
					<div className={styles.currUserLink}>
						<a href={currUser.url} target="_blank">
							Страница полной информации
						</a>
					</div>
				</div>
			))}
		</div>
	)
}
