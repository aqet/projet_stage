/** @format */
'use client'

import Styles from '../../app/page.module.scss';
import { useState } from 'react';


interface Props {
    title: string,
    informations: React.JSX.Element,
}


export default function JobInformations({title, informations}: Props) {
	const [isDivVisible, setDivVisible] = useState(false);
	return (
		<div className={Styles.detail}>
			<div>
				<div style={{position: 'relative'}}
					className={Styles.click}
					onClick={() => setDivVisible(!isDivVisible)}>
					<p>{title}</p>
				</div>
				<div id='container' style={{display: isDivVisible ? 'block' : 'none' }}>
					{informations}
				</div>
			</div>
		</div>
	);
}
