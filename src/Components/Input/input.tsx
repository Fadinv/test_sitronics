import styles from './input.module.sass';
import * as React from 'react';
import {ChangeEvent, HTMLInputTypeAttribute} from 'react';

interface InputProps {
	placeHolder?: string;
	type?: HTMLInputTypeAttribute;
	onChange?: (value: string) => void;
	value?: string;
	icon?: () => React.ReactNode;
}

export const Input: React.FC<InputProps> = (
	{
		value,
		type,
		placeHolder,
		onChange,
		icon,
	},
) => {
	const inputRef = React.createRef<HTMLInputElement>();

	const doChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

	return (
		<div className={styles['container']}>
			{
				!value &&
				<div className={styles['placeholder']}>
					{placeHolder}
				</div>
			}
			<input
				ref={inputRef}
				className={styles['input']}
				onChange={doChange}
				type={type}
				value={value}
			/>
			<div onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				inputRef.current?.focus();
			}} className={styles['icon']}>
				{icon?.()}
			</div>
		</div>
	);
};