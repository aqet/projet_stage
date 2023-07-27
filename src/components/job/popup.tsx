/** @format */

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Styles from '../../app/page.module.scss';
import { useState } from 'react';

interface PopupProps {
	children: React.ReactNode;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({
	children,
	setOpen: setOpen,
	open,
}: PopupProps) {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [open]);

	return (
		<>
			{open && (
				<div className={Styles.popup}>
					<div className={Styles.content}>
						<p className={Styles.nav}>
							<img
								src="https://www.kevmax.com/images/logo_kevmax_white.svg"
								width="133"
								height="46.27"
								decoding="async"
								data-nimg="1"
								loading="lazy"
							/>
							<img onClick={() => setOpen(false)} src="/ferme.svg" alt="" />
						</p>
						<div>{children}</div>
					</div>
				</div>
			)}
			
		</>
	);
}
