import styles from './multiChooseEditor.module.sass';
import * as React from 'react';
import {useState} from 'react';

interface MultiChooseEditorProps {
	label?: string;
	data: {
		id: string;
		caption: string;
	}[];
	values: string[];
	onChange: (values: string[]) => void;
}

export interface DataItem {
	id: string;
	caption: string;
}

export const MultiChooseEditor: React.FC<MultiChooseEditorProps> = (
	{
		label,
		data,
		values,
		onChange,
	}) => {
	const [popup, setPopup] = useState(false);

	const renderClose = (id: string) => {
		return (
			<span
				onClick={(e) => {
					e.stopPropagation();
					e.preventDefault();
					onChange(values.filter(value => value !== id));
					setPopup(false);
				}}
				className={styles['close-btn']}
			>
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.17188 2.82104L2.8271 7.16582" stroke="#4B5234" strokeLinecap="round"
					      strokeLinejoin="round"/>
					<path d="M7.17408 7.16749L2.8252 2.8186" stroke="#4B5234" strokeLinecap="round"
					      strokeLinejoin="round"/>
				</svg>
			</span>
		);
	};

	const renderItem = (item: DataItem) => {
		if (!values.includes(item.id)) return null;
		return (
			<span className={styles['item']}>
				<span>{item.caption}</span>
				{renderClose(item.id)}
			</span>
		);
	};

	const renderPopupElements = (item: DataItem) => {
		if (values.includes(item.id)) return null;
		return (
			<span
				onClick={() => {
					onChange(values.concat([item.id]));
					setPopup(false);
				}}
				className={styles['popup-item']}
			>
				<span>{item.caption}</span>
			</span>
		);
	};

	return (
		<div className={styles['container']} onMouseLeave={() => setPopup(false)}>
			<div className={styles['label']}>{label}</div>

			<div
				className={styles['inner']}
				onClick={() => {
					if (!(data || []).filter(item => !values.includes(item.id)).length) return;
					setPopup(true);
				}}
			>
				<div className={styles['flex-wrap']}>
					{(data || []).map(renderItem)}
				</div>
			</div>
			{
				popup && data?.length &&
				<div className={styles['popup']}>
					<span>{(data || []).map(renderPopupElements)}</span>
				</div>
			}
		</div>
	);
};