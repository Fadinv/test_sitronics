import styles from './login.module.sass';
import * as React from 'react';
import {Logo} from './logo';
import {Input} from '../../Components/Input/input';
import {cn} from '../../Utils/cn';
import {useState} from 'react';
import {Link} from '../../Components/Link/link';

export const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');

	const renderEmailIcon = () => {
		return (
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.2905 19.0254C8.06111 19.0254 6.2691 18.3269 4.91452 16.93C3.57405 15.5331 2.90381 13.7834 2.90381 11.681C2.90381 9.32461 3.71515 7.37739 5.33783 5.83938C6.97462 4.30136 8.90772 3.53235 11.1371 3.53235C13.2113 3.53235 14.9257 4.14614 16.2803 5.37374C17.649 6.60133 18.3334 8.21695 18.3334 10.2206C18.3334 11.9279 17.9665 13.2261 17.2328 14.115C16.5131 15.004 15.6242 15.4485 14.5659 15.4485C13.4371 15.4485 12.6963 15.0252 12.3436 14.1785C12.0755 14.5454 11.6874 14.8488 11.1795 15.0886C10.6715 15.3144 10.1565 15.4273 9.6344 15.4273C8.70312 15.4273 7.92706 15.0957 7.30621 14.4325C6.68536 13.7693 6.37493 12.8804 6.37493 11.7657C6.37493 10.4534 6.79118 9.35988 7.62369 8.48505C8.45619 7.5961 9.46508 7.15163 10.6503 7.15163C11.2571 7.15163 11.7792 7.29979 12.2166 7.5961C12.654 7.89242 12.9433 8.24517 13.0844 8.65437L13.3383 7.34212H14.9469L13.8886 12.3795C13.6629 13.4942 13.938 14.0515 14.7141 14.0515C15.3773 14.0515 15.8994 13.727 16.2803 13.0779C16.6613 12.4289 16.8518 11.4623 16.8518 10.1783C16.8518 8.59793 16.3085 7.32801 15.2221 6.36851C14.1497 5.3949 12.781 4.9081 11.116 4.9081C9.28164 4.9081 7.70129 5.53601 6.37493 6.79182C5.06268 8.04763 4.40655 9.67736 4.40655 11.681C4.40655 13.4448 4.93568 14.884 5.99395 15.9988C7.06633 17.0994 8.49852 17.6497 10.2905 17.6497C11.7721 17.6497 13.0702 17.3745 14.185 16.8242V18.3269C12.9856 18.7926 11.6874 19.0254 10.2905 19.0254ZM9.86722 13.988C10.5304 13.988 11.1089 13.7623 11.6028 13.3108C12.1107 12.8451 12.4282 12.2666 12.5552 11.5752C12.6963 10.7286 12.5905 10.0231 12.2377 9.45865C11.8991 8.88013 11.377 8.59087 10.6715 8.59087C10.0083 8.59087 9.4298 8.82369 8.93594 9.28933C8.44208 9.74086 8.13166 10.3123 8.00466 11.0037C7.86356 11.8503 7.96939 12.5629 8.32215 13.1414C8.6749 13.7058 9.18993 13.988 9.86722 13.988Z"
					fill="#7D8CCC"/>
			</svg>
		);
	};

	const renderPasswordIcon = () => {
		return (
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.0983 8.61966V6.64974C15.0699 4.34066 13.1742 2.49266 10.866 2.52108C8.60455 2.54949 6.7758 4.36999 6.7373 6.63141V8.61966"
					stroke="#7D8CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M10.9175 12.9763V15.0122" stroke="#7D8CCC" strokeWidth="1.5" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M10.9176 8.08887C5.65141 8.08887 3.896 9.52618 3.896 13.8373C3.896 18.1493 5.65141 19.5866 10.9176 19.5866C16.1839 19.5866 17.9402 18.1493 17.9402 13.8373C17.9402 9.52618 16.1839 8.08887 10.9176 8.08887Z"
				      stroke="#7D8CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		);
	};

	const togglePasswordType = (e: React.MouseEvent<SVGElement>) => {
		setPasswordType(prev => prev === 'password' ? 'text' : 'password');
	}

	const renderEyeIcon = () => {
		if (passwordType === 'text') {
			return (
				<svg onClick={togglePasswordType} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.88492 16.2523C3.84075 14.914 2.52075 12.8973 2.52075 11.1282C2.52075 8.12152 6.31575 4.43652 10.9999 4.43652C12.9158 4.43652 14.6941 5.05069 16.1241 6.00402"
						stroke="#E3E5EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					<path
						d="M18.1956 7.89282C19.0123 8.92866 19.4881 10.0745 19.4881 11.1287C19.4881 14.1354 15.6839 17.8204 10.9997 17.8204C10.1656 17.8204 9.35066 17.7012 8.58887 17.4904"
						stroke="#E3E5EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					<path
						d="M8.95194 13.1698C8.40652 12.6299 8.10127 11.8938 8.10402 11.1266C8.10036 9.52697 9.39467 8.22712 10.9952 8.22437C11.7652 8.22254 12.504 8.52779 13.0485 9.07229"
						stroke="#E3E5EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M13.8502 11.6409C13.6357 12.8252 12.709 13.7538 11.5247 13.971" stroke="#E3E5EF"
					      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M18.2339 3.89575L3.77441 18.3553" stroke="#E3E5EF" strokeWidth="1.5" strokeLinecap="round"
					      strokeLinejoin="round"/>
				</svg>

			);
		}

		return (
			<svg onClick={togglePasswordType} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M13.9005 11.0477C13.9005 12.6482 12.6025 13.9462 11.002 13.9462C9.40149 13.9462 8.10352 12.6482 8.10352 11.0477C8.10352 9.44626 9.40149 8.14917 11.002 8.14917C12.6025 8.14917 13.9005 9.44626 13.9005 11.0477Z"
				      stroke="#7D8CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M2.521 11.0477C2.521 14.0544 6.31783 17.7412 11.002 17.7412C15.6852 17.7412 19.483 14.0572 19.483 11.0477C19.483 8.03833 15.6852 4.35425 11.002 4.35425C6.31783 4.35425 2.521 8.04108 2.521 11.0477Z"
				      stroke="#7D8CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		);
	};

	return (
		<div className={styles['scroll']}>
			<div className={styles['container']}>
				<div className={styles['left-side']}>
					<Logo mt25/>
					<div className={styles['auth-form']}>
						<div className={styles['auth-form__header']}>Авторизация</div>
						<div className={styles['auth-form__input-box']}>
							<Input
								onChange={setEmail}
								value={email}
								placeHolder={'Логин'}
								type={'email'}
								icon={email ? undefined : renderEmailIcon}
							/>
							<Input
								onChange={setPassword}
								value={password}
								placeHolder={'Пароль'}
								type={passwordType}
								icon={password ? renderEyeIcon : renderPasswordIcon}
							/>
						</div>
						<div
							onClick={() => {
								if (!email || !password) return;
								window.location.href = '/projects';
							}}
							className={cn(styles['auth-form__btn'], email && password && styles['_active'])}
						>
							Войти
						</div>
					</div>
					<div className={styles['helpers']}>
						<span>Не получается войти в систему?</span>
						<Link url={''} caption={'Написать в тех поддержку'}/>
					</div>
				</div>
				<img src={'/1.png'} className={styles['right-side']}/>
			</div>
		</div>
	);
};