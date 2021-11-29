import styles from './user.module.sass';
import * as React from 'react';
import {UserIcon} from './UserIcon/userIcon';

interface UserProps {
	name: string;
}

export const User: React.FC<UserProps> = ({name}) => {
	return (
		<div className={styles['container']}>
			<div className={styles['name']}>{name}</div>
			<UserIcon url={''}/>
		</div>
	);
};