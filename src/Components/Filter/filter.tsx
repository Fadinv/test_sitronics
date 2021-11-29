import styles from './filter.module.sass';
import * as React from 'react';

interface FilterProps {
	caption?: string;
	openModal: () => void;
}

export const Filter: React.FC<FilterProps> = ({caption, openModal}) => {
	const renderIcon = () => {
		return (
			<div className={styles['icon']}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M7.74439 18.3333L11.7246 16.4599V11.5502L17.966 5.22043C18.2013 4.98325 18.3333 4.65773 18.3333 4.31685V2.93124C18.3333 2.2322 17.7847 1.66663 17.1079 1.66663H2.89203C2.21518 1.66663 1.66663 2.2322 1.66663 2.93124V4.34854C1.66663 4.67022 1.7847 4.97941 1.99762 5.21371L7.74439 11.5502V18.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					<path opacity="0.4" d="M9.16663 5H17.9166" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
		);
	};

	return (
		<span onClick={openModal} className={styles['container']}>
			{renderIcon()}
			<span>{caption || 'Фильтр'}</span>
		</span>
	);
};