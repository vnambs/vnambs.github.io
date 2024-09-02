import { motion } from 'framer-motion';
import Link from 'next/link';
import { scale, slide } from '../../animation';
import styles from './style.module.scss';

interface IndexProps {
	data: {
		title: string;
		href: string;
		index: number;
	};
	isActive: boolean;
	setSelectedIndicator: (href: string) => void;
}

export default function Index({
	data,
	isActive,
	setSelectedIndicator,
}: IndexProps) {
	const { title, href, index } = data;

	return (
		<motion.div
			className={styles.link}
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial='initial'
			animate='enter'
			exit='exit'>
			<motion.div
				variants={scale}
				animate={isActive ? 'open' : 'closed'}
				className={styles.indicator}></motion.div>
			<Link href={href}>{title}</Link>
		</motion.div>
	);
}
