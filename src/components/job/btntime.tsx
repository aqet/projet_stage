import styles from '../../app/page.module.scss';
import React from 'react';

interface Props {
	cdi: string;
}

export default function Btntime({ cdi }: Props) {
	return (
			<a>
				<img src="/durree.svg" alt="" />
				<span>{cdi} mois</span>
			</a>
	);
}
