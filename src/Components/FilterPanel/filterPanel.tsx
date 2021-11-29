import styles from './filterPanel.module.sass';
import * as React from 'react';
import {useState} from 'react';
import {cn} from 'src/Utils/cn';
import {DateEditor} from '../DateEditor/dateEditor';
import {MultiChooseEditor} from '../MultiChooseEditor/multiChooseEditor';
import {RowItemState} from '../Table/rowList';
import {getStateCaption} from '../Table/table';
import {Button, ButtonThemes} from '../Button/button';

interface FilterPanelProps {
	visible?: boolean;
	closeModal?: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({visible, closeModal}) => {
	const [companyValues, setCompanyValues] = useState<string[]>([]);
	const [partnerValues, setPartnerValues] = useState<string[]>([]);
	const [stageValues, setStageValues] = useState<string[]>([]);
	const [stateValues, setStateValues] = useState<string[]>([]);

	const renderCloseModal = () => {
		return (
			<div className={styles['close-btn']} onClick={closeModal}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17.6592 6.33093L6.34107 17.649" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round"
					      strokeLinejoin="round"/>
					<path d="M17.6655 17.6543L6.33667 6.32544" stroke="#200E32" strokeWidth="1.5"
					      strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
		);
	};

	const clearClick = () => {
		setCompanyValues([]);
		setPartnerValues([]);
		setStageValues([]);
		setStateValues([]);
	};

	return (
		<div
			onClick={closeModal}
			className={cn(styles['container'], visible && styles['_active'])}
		>
			<div
				className={styles['inner']}
				onClick={e => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<div className={styles['header']}>
					<span>Фильтр</span>
					{renderCloseModal()}
				</div>

				<div className={styles['input-box']}>
					<DateEditor label={'Период'}/>
					<MultiChooseEditor
						values={partnerValues}
						onChange={(values) => setPartnerValues(values)}
						data={[
							{id: '1', caption: 'Партнер 1'},
							{id: '2', caption: 'Партнер 2'},
							{id: '3', caption: 'Партнер 3'},
							{id: '4', caption: 'Партнер 4'},
						]}
						label={'Управляющий партнер'}
					/>
					<MultiChooseEditor
						values={companyValues}
						onChange={(values) => setCompanyValues(values)}
						data={[
							{id: '1', caption: 'Афк Система'},
							{id: '2', caption: 'Vipshop'},
							{id: '3', caption: 'Sberbank of Russia'},
							{id: '4', caption: 'Лензолото'},
							{id: '5', caption: 'Роснефть'},
							{id: '6', caption: 'АЛРОСА'},
							{id: '7', caption: 'АЛРОСА-Нюрба'},
							{id: '8', caption: 'Ростелеком'},
							{id: '9', caption: 'Энел Россия'},
						]}
						label={'Компания'}
					/>
					<MultiChooseEditor
						values={stageValues}
						onChange={(values) => setStageValues(values)}
						data={[{id: '1', caption: 'Индустрия'}]}
						label={'Стадия'}
					/>
					<MultiChooseEditor
						values={stateValues}
						onChange={(values) => setStateValues(values)}
						data={[
							{id: RowItemState.inReview, caption: getStateCaption(RowItemState.inReview)},
							{id: RowItemState.stopped, caption: getStateCaption(RowItemState.stopped)},
							{id: RowItemState.completed, caption: getStateCaption(RowItemState.completed)},
							{id: RowItemState.canceled, caption: getStateCaption(RowItemState.canceled)},
						]}
						label={'Статус'}
					/>
				</div>

				<div className={styles['action-box']}>
					<Button caption={'Очистить'} theme={ButtonThemes.transparent} onClick={clearClick}/>
					<Button caption={'Применить'} theme={ButtonThemes.default} onClick={closeModal}/>
				</div>
			</div>
		</div>
	);
};