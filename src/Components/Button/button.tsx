import styles from './button.module.sass';
import * as React from 'react';
import {cn} from '../../Utils/cn';

interface ButtonProps {
	theme?: ButtonThemes;
	caption?: string;
	onClick?: () => void;
}

export enum ButtonThemes {
	default = '_default',
	transparent = '_transparent',
}

export const Button: React.FC<ButtonProps> = ({theme, caption, onClick}) => {
	return (
		<div onClick={onClick} className={cn(styles['container'], styles[theme ?? ButtonThemes.default])}>
			{caption || 'ок'}
		</div>
	);
};