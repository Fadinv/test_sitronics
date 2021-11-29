import styles from './table.module.sass';
import * as React from 'react';
import {cn} from '../../Utils/cn';
import {RowItemState, rowList} from './rowList';
import {useState} from 'react';

interface TableProps {}

enum TableColumns {
	project,
	company,
	industry,
	stage,
	state,
	createdAt,
}

export const getStateCaption = (state: RowItemState) => {
	switch (state) {
		case RowItemState.canceled:
			return 'Отменен';
		case RowItemState.completed:
			return 'Завершен';
		case RowItemState.inReview:
			return 'В работе';
		case RowItemState.stopped:
			return 'Приостановлен';
		default:
			return '-';
	}
};

export const getStateClassName = (state: RowItemState) => {
	switch (state) {
		case RowItemState.canceled:
			return styles['canceled'];
		case RowItemState.completed:
			return styles['completed'];
		case RowItemState.inReview:
			return styles['in-review'];
		case RowItemState.stopped:
			return styles['stopped'];
		default:
			return undefined;
	}
};

const TableNameById = new Map<TableColumns, string>([
	[TableColumns.project, 'Проект'],
	[TableColumns.company, 'Компания'],
	[TableColumns.industry, 'Индустрия'],
	[TableColumns.stage, 'Стадия'],
	[TableColumns.state, 'Статус'],
	[TableColumns.createdAt, 'Дата создания'],
]);

const TableWidthById = new Map<TableColumns, number>([
	[TableColumns.project, 182],
	[TableColumns.company, 182],
	[TableColumns.industry, 182],
	[TableColumns.stage, 182],
	[TableColumns.state, 182],
	[TableColumns.createdAt, 182],
]);

const headerList = [
	{id: TableColumns.project},
	{id: TableColumns.company},
	{id: TableColumns.industry},
	{id: TableColumns.stage},
	{id: TableColumns.state},
	{id: TableColumns.createdAt},
];

export const Table: React.FC<TableProps> = () => {
	const [page, setPage] = useState(1);

	const renderHeaderCell = (item: { id: TableColumns }, index: number) => {
		return (
			<span
				key={index}
				className={cn(styles['header-cell'], index === headerList.length - 1 && styles['_last'])}
				style={{width: TableWidthById.get(item.id)}}
			>
				{TableNameById.get(item.id)}
			</span>
		);
	};

	const renderRowCell = (name: string, index: number) => {
		if (index === TableColumns.state) {
			return (
				<span
					className={cn(styles['row-cell'])}
					style={{width: TableWidthById.get(index) ?? 0}}
				>
					<span className={getStateClassName(name as RowItemState)}>
						{getStateCaption(name as RowItemState)}
					</span>
				</span>
			);
		}

		return (
			<span
				className={cn(styles['row-cell'], index === headerList.length - 1 && styles['_last'])}
				style={{width: TableWidthById.get(index) ?? 0}}
			>
				{name}
			</span>
		);
	};

	const renderRow = (cells: string[], index: number) => {
		if (index < 25 * (page - 1) || index >= Math.min(25 * page, rowList.length)) return null;
		return (
			<div key={index} className={styles['row']}>
				{cells.map(renderRowCell)}
			</div>
		);
	};

	const next = () => {
		setPage(prev => {
			const newState = prev + 1;
			if (newState > Math.ceil(rowList.length / 25)) return prev;
			return newState;
		});
	};

	const back = () => {
		setPage(prev => {
			const newState = prev - 1;
			if (newState < 1) return prev;
			return newState;
		});
	};

	const renderRightArrow = () => {
		return (
			<div className={styles['right']} onClick={next}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.4583 9.77148H3.95834" stroke="#202020" strokeWidth="1.2" strokeLinecap="round"
					      strokeLinejoin="round"/>
					<path d="M11.4168 4.75122L16.4585 9.77121L11.4168 14.792" stroke="#202020" strokeWidth="1.2"
					      strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
		);
	};


	const renderLeftArrow = () => {
		return (
			<div className={styles['left']} onClick={back}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.4583 9.77148H3.95834" stroke="#202020" strokeWidth="1.2" strokeLinecap="round"
					      strokeLinejoin="round"/>
					<path d="M11.4168 4.75122L16.4585 9.77121L11.4168 14.792" stroke="#202020" strokeWidth="1.2"
					      strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
		);
	};

	const hasPagination = rowList.length >= 25;

	return (
		<div className={styles['container']}>
			<div className={styles['padding-wrap']}>
				<div className={styles['inner']}>
					<div className={styles['header']}>
						{headerList.map(renderHeaderCell)}
					</div>

					<div className={styles['scrollable']}>
						{rowList.map(renderRow)}
					</div>
					{
						hasPagination &&
						<div className={styles['pagination']}>
							<span>{1 + 25 * (page - 1)} - {Math.min(25 * page, rowList.length)} из {rowList.length}</span>
							<span className={styles['page-status']}>
								{renderLeftArrow()}
								<span>{page} из {Math.ceil(rowList.length / 25)}</span>
								{renderRightArrow()}
							</span>
						</div>
					}
				</div>

			</div>
		</div>
	);
};