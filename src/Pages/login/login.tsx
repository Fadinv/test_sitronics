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
	return (
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
						/>
						<Input
							onChange={setPassword}
							value={password}
							placeHolder={'Пароль'}
							type={'password'}
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
	);
};