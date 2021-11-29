import styles from './input.module.sass';
import * as React from 'react';
import {ChangeEvent, HTMLInputTypeAttribute} from 'react';

interface InputProps {
	placeHolder?: string;
	type?: HTMLInputTypeAttribute;
	onChange?: (value: string) => void;
	value?: string;
	theme?: InputThemes;
	label?: string;
}

enum InputThemes {
	default = '_default',
	white = '_white',
}

export const Input: React.FC<InputProps> = (
	{
		value,
		type,
		placeHolder,
		onChange,
		theme,
		label,
	},
) => {
	const doChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);
	return (
		<div className={styles['container']}>
			<input
				className={styles['input']}
				onChange={doChange}
				type={type}
				placeholder={placeHolder}
				value={value}
			/>
		</div>
	);
};