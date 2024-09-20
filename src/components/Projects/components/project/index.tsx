'use client';
import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';
import { acidGroteskFonts } from '@/fonts';

interface IndexProps {
	index: number;
	title: string;
	link: string;
	description: string;
	manageModal: (
		isActive: boolean,
		index: number,
		clientX: number,
		clientY: number
	) => void;
}

export default function index({
	index,
	title,
	link,
	description,
	manageModal,
}: IndexProps) {
	return (
		<div
			onMouseEnter={e => {
				manageModal(true, index, e.clientX, e.clientY);
			}}
			onMouseLeave={e => {
				manageModal(false, index, e.clientX, e.clientY);
			}}
			className={styles.project}>
			<Link href={link}>
				<h2>{title}</h2>
				<p className={`${acidGroteskFonts.className}`}>{description}</p>
			</Link>
		</div>
	);
}
