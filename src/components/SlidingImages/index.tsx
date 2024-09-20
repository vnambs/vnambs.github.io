import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './style.module.scss';

const slider1 = [
	{
		color: '#e3e5e7',
		src: 'docu.png',
	},
	{
		color: '#d6d7dc',
		src: 'sda.png',
	},
	{
		color: '#e3e3e3',
		src: 'skiillz.png',
	},
	{
		color: '#21242b',
		src: 'strapi.png',
	},
];

const slider2 = [
	{
		color: '#d4e3ec',
		src: 'wp-restore.png',
	},
	{
		color: '#e5e0e1',
		src: 'sda.png',
	},
	{
		color: '#d7d4cf',
		src: 'docu.png',
	},
	{
		color: '#e1dad6',
		src: 'skiillz.png',
	},
];

export default function SlidingImages() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
	const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

	return (
		<div
			ref={container}
			className={styles.slidingImages}>
			<motion.div
				style={{ x: x1 }}
				className={styles.slider}>
				{slider1.map((project, index) => {
					return (
						<div
							key={index}
							className={styles.project}
							style={{ backgroundColor: project.color }}>
							<div className={styles.imageContainer}>
								<Image
									fill={true}
									alt={'image'}
									src={`/images/project/${project.src}`}
								/>
							</div>
						</div>
					);
				})}
			</motion.div>
			<motion.div
				style={{ x: x2 }}
				className={styles.slider}>
				{slider2.map((project, index) => {
					return (
						<div
							key={index}
							className={styles.project}
							style={{ backgroundColor: project.color }}>
							<div
								key={index}
								className={styles.imageContainer}>
								<Image
									fill={true}
									alt={'image'}
									src={`/images/project/${project.src}`}
								/>
							</div>
						</div>
					);
				})}
			</motion.div>
			<motion.div
				style={{ height }}
				className={styles.circleContainer}>
				<div className={styles.circle}></div>
			</motion.div>
		</div>
	);
}
