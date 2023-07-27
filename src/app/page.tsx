/** @format */

'use client';

import React, { useState } from 'react';
import Popup from '@/components/job/popup';
import Styles from '../app/page.module.scss';

export default function page() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className={Styles.container}>
			<button onClick={() => setOpen(!open)}>open</button>

			<Popup setOpen={setOpen} buttonText={'bouton de askdlasdkj'} open={open}>
				fhfhgfg hfhgf hg
			</Popup>
		</div>
	);
}
