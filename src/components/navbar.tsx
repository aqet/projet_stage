/** @format */

import Link from 'next/link';
import './navbar.css';
export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<img
						src="https://www.kevmax.com/images/logo_kevmax_white.svg"
						width="133"
						height="46.27"
						decoding="async"
						data-nimg="1"
						loading="lazy"
						/>
				</li>
				<div className='div'>
					<li>
						<Link href="/">Accueil</Link>
					</li>
					<li>
						<Link href="/page/aboutPage">À propos</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}
