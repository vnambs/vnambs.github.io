'use client';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Rounded from '../../common/RoundedButton';
import Project from './components/project';
import styles from './style.module.scss';

interface ProjectData {
	title: string;
	src: string;
	color: string;
}

const projects: ProjectData[] = [
	{
		title: 'C2 Montreal',
		src: 'c2montreal.png',
		color: '#000000',
	},
	{
		title: 'Office Studio',
		src: 'officestudio.png',
		color: '#8C8C8C',
	},
	{
		title: 'Locomotive',
		src: 'locomotive.png',
		color: '#EFE8D3',
	},
	{
		title: 'Silencio',
		src: 'silencio.png',
		color: '#706D63',
	},
];

const scaleAnimation = {
	initial: { scale: 0, x: '-50%', y: '-50%' },
	enter: {
		scale: 1,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	closed: {
		scale: 0,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
};

export default function Home() {
	const [modal, setModal] = useState<{ active: boolean; index: number }>({
		active: false,
		index: 0,
	});
	const { active, index } = modal;

	const modalContainer = useRef<HTMLDivElement | null>(null);
	const cursor = useRef<HTMLDivElement | null>(null);
	const cursorLabel = useRef<HTMLDivElement | null>(null);

	const xMoveContainer = useRef<(x: number) => void>(() => {});
	const yMoveContainer = useRef<(y: number) => void>(() => {});
	const xMoveCursor = useRef<(x: number) => void>(() => {});
	const yMoveCursor = useRef<(y: number) => void>(() => {});
	const xMoveCursorLabel = useRef<(x: number) => void>(() => {});
	const yMoveCursorLabel = useRef<(y: number) => void>(() => {});

	useEffect(() => {
		// Move Container
		if (modalContainer.current) {
			xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
				duration: 0.8,
				ease: 'power3',
			});
			yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
				duration: 0.8,
				ease: 'power3',
			});
		}

		// Move cursor
		if (cursor.current) {
			xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
				duration: 0.5,
				ease: 'power3',
			});
			yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
				duration: 0.5,
				ease: 'power3',
			});
		}

		// Move cursor label
		if (cursorLabel.current) {
			xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
				duration: 0.45,
				ease: 'power3',
			});
			yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
				duration: 0.45,
				ease: 'power3',
			});
		}
	}, []);

	const moveItems = (x: number, y: number) => {
		xMoveContainer.current(x);
		yMoveContainer.current(y);
		xMoveCursor.current(x);
		yMoveCursor.current(y);
		xMoveCursorLabel.current(x);
		yMoveCursorLabel.current(y);
	};

	const manageModal = (
		active: boolean,
		index: number,
		x: number,
		y: number
	) => {
		moveItems(x, y);
		setModal({ active, index });
	};

	return (
		<main
			onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
				moveItems(e.clientX, e.clientY);
			}}
			className={styles.projects}>
			<div className={styles.body}>
				{projects.map((project, index) => (
					<Project
						index={index}
						title={project.title}
						manageModal={manageModal}
						key={index}
					/>
				))}
			</div>
			<Rounded>
				<p>More work</p>
			</Rounded>
			<>
				<motion.div
					ref={modalContainer}
					variants={scaleAnimation}
					initial='initial'
					animate={active ? 'enter' : 'closed'}
					className={styles.modalContainer}>
					<div
						style={{ top: index * -100 + '%' }}
						className={styles.modalSlider}>
						{projects.map((project, index) => {
							const { src, color } = project;
							return (
								<div
									className={styles.modal}
									style={{ backgroundColor: color }}
									key={`modal_${index}`}>
									<Image
										src={`/images/${src}`}
										width={300}
										height={0}
										alt='image'
									/>
								</div>
							);
						})}
					</div>
				</motion.div>
				<motion.div
					ref={cursor}
					className={styles.cursor}
					variants={scaleAnimation}
					initial='initial'
					animate={active ? 'enter' : 'closed'}></motion.div>
				<motion.div
					ref={cursorLabel}
					className={styles.cursorLabel}
					variants={scaleAnimation}
					initial='initial'
					animate={active ? 'enter' : 'closed'}>
					View
				</motion.div>
			</>
		</main>
	);
}
