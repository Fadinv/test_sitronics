import styles from './main.module.sass'
import {FC} from 'react';

export const Main: FC = ({children}) => {
	return (
		<div className={styles['container']}>
			{children}
		</div>
	);
};