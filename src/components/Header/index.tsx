'use client';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Magnetic from '../../common/Magnetic';
import Rounded from '../../common/RoundedButton';
import Nav from './nav';
import styles from './style.module.scss';

import { acidGroteskFonts } from '@/fonts';

export default function Header() {
	const header = useRef<HTMLDivElement | null>(null);
	const [isActive, setIsActive] = useState<boolean>(false);
	const pathname = usePathname();
	const button = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(button.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				onLeave: () => {
					gsap.to(button.current, {
						scale: 1,
						duration: 0.25,
						ease: 'power1.out',
					});
				},
				onEnterBack: () => {
					gsap.to(button.current, {
						scale: 0,
						duration: 0.25,
						ease: 'power1.out',
					});
					setIsActive(false);
				},
			},
		});
	}, []);

	return (
		<>
			<div className={`${acidGroteskFonts.className} tracking-wide`}>
				<div
					ref={header}
					className={styles.header}>
					<div className={styles.logo}>
						<p className={styles.copyright}>©</p>
						<div className={styles.name}>
							<p className={styles.codeBy}>Code by</p>
							<p className={styles.voary}>Voary</p>
							<p className={styles.nambinina}>Nambinina</p>
						</div>
					</div>
					<div className={styles.nav}>
						<Magnetic>
							<div className={styles.el}>
								<Link href='/docu/project/'>Work</Link>
								<div className={styles.indicator}></div>
							</div>
						</Magnetic>
						<Magnetic>
							<div className={styles.el}>
								<Link href='/docu/about'>About</Link>
								<div className={styles.indicator}></div>
							</div>
						</Magnetic>
						<Magnetic>
							<div className={styles.el}>
								<Link href='/contact'>Contact</Link>
								<div className={styles.indicator}></div>
							</div>
						</Magnetic>
					</div>
				</div>
			</div>
			{/* {<div ref={header}>{isActive ? '' : <StylishedHeader />}</div>} */}
			<div
				ref={button}
				className={styles.headerButtonContainer}>
				<Rounded
					onClick={() => {
						setIsActive(!isActive);
					}}
					className={`${styles.button}`}>
					<div
						className={`${styles.burger}${
							isActive ? styles.burgerActive : ''
						}`}></div>
				</Rounded>
			</div>
			<AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
		</>
	);
}
