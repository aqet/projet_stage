/** @format */

'use client';

import React from 'react';
import { useState } from 'react';
import Styles from '../../app/page.module.scss';
import Popup from './popup';

interface Prop {
	buttonText: string;
	children: React.ReactNode;
}
export default function btnpopup({ buttonText, children }: Prop) {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div>
			<button
				style={{
					backgroundColor: 'var(--white-color)',
					padding: '10px 20px',
					width: '200px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '35px',
					color: 'var(--background-color)',
					cursor: 'pointer',
					textDecoration: 'none',
					border: 'none	',
				}}
				className={Styles.postuler}
				onClick={() => setOpen(!open)}>
				{buttonText}
			</button>
			<Popup setOpen={setOpen} open={open}>
				{children}
			</Popup>
		</div>
	);
}
