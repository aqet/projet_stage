// /** @format */
'use client';

import React, { FormEvent, useMemo, useRef } from 'react';
import styles from './authentification.module.scss';
import { useRouter } from 'next/navigation';
// import bcrypt from 'bcrypt'

export default function Authentification() {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const router = useRouter();

	async function connectUser(event: FormEvent) {
		// const hashPassword =  bcrypt.hashSync((password?.current?.value||''), 10)
		event.preventDefault();
		await fetch('http://localhost:3000/api/authentification', {
			method: 'POST',
			body: JSON.stringify({
				username: username?.current?.value,
				password: password?.current?.value||'',
			}),
		}).then((res) => {
			if(res.status == 200) {
				router.push('/listing')
			} else {
				alert("Vous n'avez pas acces a cette fonctionnalite")
			}
		});
	}

	return (
		<div className={styles.container}>
			<form className={styles.content} onSubmit={connectUser}>
				<div className={styles.nav}>authentification</div>
				<div className={styles.information}>
					<div className={styles.information2}>
						<div>
							<label htmlFor="username">UserName</label>
							<input ref={username} type="text" id="username" />
						</div>
						<div>
							<label htmlFor="password">PassWord</label>
							<input
								ref={password}
								type="password"
								id="password"
							/>
						</div>
					</div>
					<div>
						<button type="submit">Valider</button>
					</div>
				</div>
			</form>
		</div>
	);
}
