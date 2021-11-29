import styles from './link.module.sass';
import * as React from 'react';

interface LinkProps {
	url?: string;
	caption?: string;
}

export const Link: React.FC<LinkProps> = ({url, caption}) => {
	return (
		<a
			href={url}
			className={styles['container']}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
			}}
		>
			{caption}
		</a>
	);
};