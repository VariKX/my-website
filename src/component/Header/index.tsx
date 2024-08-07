'use client';

import React from 'react';
import style from './style.module.scss';
import cn from 'classnames';
import { headerRoutes } from './constants';
import Image from 'next/image';
import DarkLogo  from './assets/dark-logo.svg';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {

	const pathname = usePathname();

	return (
		<header className={style['header']}>
			<a href='info'>
				<Image src={DarkLogo} alt='logo' className={style['header__logo']}/>
			</a>
			<ul className={cn(style['header__nav'], style['nav'])}>
				{headerRoutes.map(element => (
					<li 
						className={cn(
							style['nav__element'],
							{[style['nav__element_active']]: pathname === element.path}
						)} 
						key={element.id}
					>
						<a href={element.path}>{element.name}</a>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;