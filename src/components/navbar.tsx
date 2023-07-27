/** @format */

'use client';
import React from 'react';
import Link from 'next/link';
import './navbar.css';
export default function Navbar() {
	return (
		<nav>
			<img
				src="https://www.kevmax.com/images/logo_kevmax_white.svg"
				width="133"
				height="46.27"
				decoding="async"
				data-nimg="1"
				loading="lazy"
			/>

			<ul>
				<li>
					<Link  href="/">
						Accueil
					</Link>
				</li>
				<li>
					<Link  href="/about">
						À propos
					</Link>
				</li>
				<li>
					<Link  href="contact">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
