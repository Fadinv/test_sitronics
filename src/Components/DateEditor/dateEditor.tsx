import styles from './dateEditor.module.sass';
import * as React from 'react';

interface DateEditorProps {
	label?: string;
}

export const DateEditor: React.FC<DateEditorProps> = ({label}) => {
	const renderIcon = () => {
		return (
			<span className={styles['icon']}>
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.31958 7.05322H15.6875" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M12.3315 9.9823H12.3392" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M9.00342 9.9823H9.01117" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M5.66846 9.9823H5.67617" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M12.3315 12.8971H12.3392" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M9.00342 12.8971H9.01117" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M5.66846 12.8971H5.67617" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M12.0327 1.5V3.96809" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path d="M5.97412 1.5V3.96809" stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M12.1787 2.68445H5.82822C3.6257 2.68445 2.25 3.9114 2.25 6.16672V12.954C2.25 15.2447 3.6257 16.5001 5.82822 16.5001H12.1718C14.3813 16.5001 15.75 15.266 15.75 13.0107V6.16672C15.7569 3.9114 14.3882 2.68445 12.1787 2.68445Z"
				      stroke="#A1A1A1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</span>
		);
	};

	return (
		<div className={styles['container']}>
			<div className={styles['label']}>{label}</div>
			<div className={styles['inner']}>
				<div className={styles['from']}>
					<span>??</span>
					{renderIcon()}
				</div>
				<div className={styles['to']}>
					<span>????</span>
					{renderIcon()}
				</div>
			</div>
		</div>
	);
};