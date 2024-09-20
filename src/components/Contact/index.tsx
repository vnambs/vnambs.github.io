import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Magnetic from '../../common/Magnetic';
import Rounded from '../../common/RoundedButton';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Contact() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end'],
	});
	const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
	const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
	const currentYear = new Date().getFullYear();
	return (
		<>
			<motion.div
				style={{ y }}
				ref={container}
				className={`${styles.contact} sm:hidden`}>
				<div className={styles.body}>
					<div className={styles.title}>
						<span>
							<div className={styles.imageContainer}>
								<Image
									fill={true}
									alt={'image'}
									src={`/images/me.jpg`}
								/>
							</div>
							<h2>Let&lsquo;s work</h2>
						</span>
						<h2>together</h2>
						<motion.div
							style={{ x }}
							className={styles.buttonContainer}>
							<Rounded className={styles.button}>
								<p>Get in touch</p>
							</Rounded>
						</motion.div>
						<motion.svg
							style={{ rotate, scale: 2 }}
							width='9'
							height='9'
							viewBox='0 0 9 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
								fill='white'
							/>
						</motion.svg>
					</div>
					<div className={styles.nav}>
						<Rounded>
							<Link href='mailto:vnambs@gmail.com'>vnambs@gmail.com</Link>
						</Rounded>
						<Rounded>
							<Link href='callto:+261 329 252 93'>+261 329 252 937</Link>
						</Rounded>
					</div>
					<div className={styles.info}>
						<div>
							<span>
								<h3>Version</h3>
								<p>{currentYear} © Edition</p>
							</span>
						</div>
						<div>
							<span>
								<h3>Look at</h3>
								<Magnetic>
									<Link href='https://github.com/vnambs'>Github</Link>
								</Magnetic>
							</span>
							<Magnetic>
								<Link href='https://gitlab.com/vnambs'>Gitlab</Link>
							</Magnetic>
							<Magnetic>
								<Link href='https://www.instagram.com/vnambs/'>Instagram</Link>
							</Magnetic>
							<Magnetic>
								<Link href='https://www.linkedin.com/in/voary-nambinina-randrianandrasana-877b5a117/?lipi=urn%3Ali%3Apage%3Ad_flagship3_leia_search_appearances%3Bj0JuGZMhTcqLQaiA8B65aw%3D%3D'>
									LinkedIn
								</Link>
							</Magnetic>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div
				ref={container}
				className={`${styles.contact} !hidden sm:block`}>
				<div className={`${styles.body}`}>
					<div className={styles.title}>
						<span>
							<div className={styles.imageContainer}>
								<Image
									fill={true}
									alt={'image'}
									src={`/images/me.jpg`}
								/>
							</div>
							<h2>Let&lsquo;s work</h2>
						</span>
						<h2>together</h2>
						<motion.div
							style={{ x }}
							className={styles.buttonContainer}>
							<Rounded className={styles.button}>
								<p>Get in touch</p>
							</Rounded>
						</motion.div>
						<motion.svg
							style={{ rotate, scale: 2 }}
							width='9'
							height='9'
							viewBox='0 0 9 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
								fill='white'
							/>
						</motion.svg>
					</div>
					<div className={styles.nav}>
						<Rounded>
							<Link href='mailto:vnambs@gmail.com'>vnambs@gmail.com</Link>
						</Rounded>
						<Rounded>
							<Link href='callto:+261 329 252 93'>+261 329 252 937</Link>
						</Rounded>
					</div>
					<div className={styles.info}>
						<div>
							<span>
								<h3>Version</h3>
								<p>{currentYear} © Edition</p>
							</span>
						</div>
						<div>
							<span>
								<h3>Look at</h3>
								<Magnetic>
									<Link href='https://github.com/vnambs'>Github</Link>
								</Magnetic>
							</span>
							<Magnetic>
								<Link href='https://gitlab.com/vnambs'>Gitlab</Link>
							</Magnetic>
							<Magnetic>
								<Link href='https://www.instagram.com/vnambs/'>Instagram</Link>
							</Magnetic>
							<Magnetic>
								<Link href='https://www.linkedin.com/in/voary-nambinina-randrianandrasana-877b5a117/?lipi=urn%3Ali%3Apage%3Ad_flagship3_leia_search_appearances%3Bj0JuGZMhTcqLQaiA8B65aw%3D%3D'>
									LinkedIn
								</Link>
							</Magnetic>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}
