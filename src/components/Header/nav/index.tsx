import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { menuSlide } from '../animation';
import Curve from './Curve';
import Footer from './Footer';
import Link from './Link';
import styles from './style.module.scss';
import { testTiemposFonts } from '@/fonts';

const navItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Work',
		href: '/docu/project/',
	},
	{
		title: 'About',
		href: '/docu/about',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
	{
		title: 'Blog',
		href: '/docu',
	},
];

export default function Nav() {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<motion.div
			variants={menuSlide}
			initial='initial'
			animate='enter'
			exit='exit'
			className={styles.menu}>
			<div className={styles.body}>
				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname);
					}}
					className={styles.nav}>
					<div className={styles.header}>
						<p className={`${testTiemposFonts.className} font-thin`}>
							Navigation
						</p>
					</div>
					{navItems.map((data, index) => {
						return (
							<Link
								key={index}
								data={{ ...data, index }}
								isActive={selectedIndicator == data.href}
								setSelectedIndicator={setSelectedIndicator}></Link>
						);
					})}
				</div>
				<Footer />
			</div>
			<Curve />
		</motion.div>
	);
}
