/** @format */

import Styles from './page.module.scss';

export default function Error() {
	return (
		<div className={Styles.container}>
			<div className={Styles.error}>
				<div>
					<img src="/404.svg" alt="" />
				</div>
				<div className={Styles.text}>Oups ! <br />
				
					le contenu que vous avez demandé n’est pas disponible ou
					alors n’existe plus
				</div>
				<div>
					<a href="/listing">afficher les offres disponible</a>
				</div>
			</div>
		</div>
	);
}
