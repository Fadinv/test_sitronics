import styles from './userIcon.module.sass';
import * as React from 'react';

interface UserIconProps {
	url?: string;
}

export const UserIcon: React.FC<UserIconProps> = ({url}) => {
	const renderImage = () => {
		if (!url) {
			return (
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.75439 7.03274C8.29371 7.03274 9.54158 5.78488 9.54158 4.24556C9.54158 2.70624 8.29371 1.45837 6.75439 1.45837C5.21507 1.45837 3.96721 2.70624 3.96721 4.24556C3.96721 5.78488 5.21507 7.03274 6.75439 7.03274Z" stroke="#FAFAFA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M2.33335 10.9091C2.33259 10.7132 2.37641 10.5197 2.46149 10.3431C2.72846 9.80921 3.48132 9.52623 4.10604 9.39808C4.55658 9.30194 5.01335 9.23766 5.47293 9.20587C6.3238 9.13108 7.17961 9.13108 8.03052 9.20587C8.49007 9.23807 8.94682 9.30229 9.39744 9.39808C10.0221 9.52623 10.775 9.78249 11.042 10.3431C11.2131 10.7029 11.2131 11.1207 11.042 11.4805C10.775 12.0411 10.0221 12.2974 9.39744 12.4202C8.9474 12.5203 8.49048 12.5863 8.03052 12.6177C7.33798 12.6765 6.64218 12.6871 5.94813 12.6498C5.78796 12.6498 5.63312 12.6498 5.47293 12.6177C5.0147 12.5868 4.55952 12.5207 4.11137 12.4202C3.48132 12.2974 2.7338 12.0411 2.46149 11.4805C2.37685 11.3019 2.33307 11.1067 2.33335 10.9091Z" stroke="#FAFAFA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			);
		}
		return <img src={url}/>
	};

	// url не поддерживается
	return (
		<div onClick={() => {}} className={styles['container']}>
			{renderImage()}
		</div>
	);
};