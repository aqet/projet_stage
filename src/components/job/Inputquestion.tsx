/** @format */

import React, { useState } from 'react';
import Styles from '../../app/page.module.scss';

interface Props {
	number: number;
	onChange: (value: string) => void;
	value: string;
}

export default function Inputquestion({ number, value, onChange }: Props) {
	const [inputValue, setInputValue] = useState<any>([]);

	return (
		<div className={Styles.question}>
			<span>{number}.</span>
			<input
				value={value}
				onChange={(event) => onChange(event.target.value)}
				type="text"
			/>
		</div>
	);
}
