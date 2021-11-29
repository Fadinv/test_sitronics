import styles from './search.module.sass'
import * as React from 'react';

interface SearchProps {
	placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({placeholder}) => {
	return (
		<input placeholder={placeholder} className={styles['container']}>

		</input>
	);
};