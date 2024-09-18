import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Rounded from '../../common/RoundedButton';
import { opacity, slideUp } from './animation';
import styles from './style.module.scss';
export default function Description() {
	const phrase =
		'I help your projects stand out in the digital era by shaping the future together. Direct in approach and always pushing boundaries, I am committed to exploring new possibilities.';
	const description = useRef(null);
	const isInView = useInView(description);
	return (
		<div
			ref={description}
			className={styles.description}>
			<div className={styles.body}>
				<p>
					{phrase.split(' ').map((word, index) => {
						return (
							<span
								key={index}
								className={styles.mask}>
								<motion.span
									variants={slideUp}
									custom={index}
									animate={isInView ? 'open' : 'closed'}
									key={index}>
									{word}
								</motion.span>
							</span>
						);
					})}
				</p>
				<motion.p
					variants={opacity}
					animate={isInView ? 'open' : 'closed'}
					data-scroll
					data-scroll-speed={0.1}>
					I will leverage my enthusiasm for design, coding, and interaction to
					bring a unique blend of experiences, creating engaging and distinctive
					web projects that give me a strong advantage in the digital design
					world.
				</motion.p>
				<div
					data-scroll
					data-scroll-speed={0.1}>
					<Rounded className={`${styles.button} mt-9`}>
						<p>About me</p>
					</Rounded>
				</div>
			</div>
		</div>
	);
}
