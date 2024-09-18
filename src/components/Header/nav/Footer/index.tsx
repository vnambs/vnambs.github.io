import Link from 'next/link';
import styles from './style.module.scss';

export default function index() {
	return (
		<div className={styles.footer}>
			<Link href='https://github.com/vnambs'>Github</Link>
			<Link href='https://gitlab.com/vnambs'>Gitlab</Link>
			<Link href='https://www.instagram.com/vnambs/'>Instagram</Link>
			<Link href='https://www.linkedin.com/in/voary-nambinina-randrianandrasana-877b5a117/?lipi=urn%3Ali%3Apage%3Ad_flagship3_leia_search_appearances%3Bj0JuGZMhTcqLQaiA8B65aw%3D%3D'>
				LinkedIn
			</Link>
		</div>
	);
}
