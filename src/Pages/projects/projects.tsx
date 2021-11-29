import styles from './projects.module.sass';
import * as React from 'react';
import {Logo} from '../login/logo';
import {User} from '../../Components/User/user';
import {Table} from '../../Components/Table/table';
import {Search} from '../../Components/Search/search';
import {Filter} from '../../Components/Filter/filter';
import {useState} from 'react';
import {FilterPanel} from '../../Components/FilterPanel/filterPanel';

export const Projects: React.FC = () => {
	const [filterPanelIsOpen, setFilterPanelIsOpen] = useState(false);
	const openModal = () => setFilterPanelIsOpen(true);
	const closeModal = () => setFilterPanelIsOpen(false);

	return (
		<div className={styles['container']}>
			<div className={styles['header']}>
				<div className={styles['header__info']}>
					<Logo/>
					<User name={'Владимир'}/>
				</div>

				<div className={styles['header__caption']}>Инвестиционные проекты</div>

				<div className={styles['header__action-panel']}>
					<Search placeholder={'Поиск по проектам...'}/>
					<Filter openModal={openModal}/>
				</div>
			</div>

			<Table/>

			<FilterPanel closeModal={closeModal} visible={filterPanelIsOpen}/>
		</div>
	);
};