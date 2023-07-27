/** @format */
'use client';

import React, { FormEvent, useRef } from 'react';
import { useState } from 'react';

import Styles from '../../app/page.module.scss';
import router from 'next/router';
import { useRouter } from 'next/navigation';
import Popup from './popup';

interface Props {
	nom: string;
	uuid: string;
	buttonText: string;
}

export default function Popupuser({ nom, uuid, buttonText }: Props) {
	const [open, setOpen] = useState<boolean>(false);

	const name = useRef<HTMLInputElement>(null);
	const mail = useRef<HTMLInputElement>(null);
	const cv = useRef<HTMLInputElement>(null);
	const cover_letter = useRef<HTMLInputElement>(null);

	let [base64Data, setBase64Data] = useState<string>();
	let [base64Data2, setBase64Data2] = useState<string>();

	let [namecv, setNamecv] = useState<string>(
		'Importer votre doccument ou glisser deposer'
	);
	let [nameletter, setNameletter] = useState<string>(
		'Importer votre doccument ou glisser deposer'
	);

	const router = useRouter();

	
	const handleFilecv = (event: any) => {
		const selectedFile = event?.target?.files?.[0];
		setNamecv(selectedFile?.name || '');
		alert('bonjour');
		if (selectedFile) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setBase64Data(reader.result as string);
				console.log(base64Data);
			};

			reader.readAsDataURL(selectedFile);
		}
	}

	const handleFileletter = (event: any) => {
		const selectedFile = event?.target.files?.[0];
		setNameletter(selectedFile?.name || '');

		if (selectedFile) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setBase64Data2(reader.result as string);
				console.log(base64Data2);
			};

			reader.readAsDataURL(selectedFile);
		}
	};

	async function adduser(event: FormEvent) {
		event.preventDefault();
		await fetch('http://localhost:3000/api/candidature', {
			method: 'POST',
			body: JSON.stringify({
				name: name?.current?.value,
				mail: mail?.current?.value,
				job_name: nom,
				job_id: uuid,
				cv: base64Data,
				cover_letter: base64Data2,
			}), 
		}).then((res) => {
			if (res.status == 200) {
				router.push('/listing');
			} else {
				alert("Vous n'avez pas acces a cette fonctionnalite");
			}
		});
	}


	return (
		<>

			<Popup
				open={open}
				setOpen={setOpen}
				children={
					<div className={Styles.div}>
						<input
							className={Styles.input}
							type="text"
							placeholder="Nom complet"
							ref={name}
						/>
						<input
							className={Styles.input}
							type="text"
							placeholder="Address E-mail"
							ref={mail}
						/>
						<label htmlFor="cv" className={Styles.file}>
							<label htmlFor="cv">
								<span style={{ cursor: 'pointer' }}>
									cv (Telecharger)
								</span>
								<img src="/telecharger.svg" alt="" />
							</label>
							<label style={{ cursor: 'pointer' }} htmlFor="cv">
								{namecv}
							</label>
							<input
								style={{ display: 'none' }}
								id="cv"
								type="file"
								placeholder="test"
								ref={cv}
								onChange={handleFilecv}
							/>
						</label>
						<label
							style={{ cursor: 'pointer' }}
							htmlFor="letter"
							className={Styles.file}>
							<label
								style={{ cursor: 'pointer' }}
								htmlFor="letter">
								<span style={{ cursor: 'pointer' }}>
									Lettre de presentation(Telecharger)
								</span>
								<img src="/telecharger.svg" alt="" />
							</label>
							<label
								style={{ cursor: 'pointer' }}
								htmlFor="letter">
								{nameletter}
							</label>
							<input
								style={{ display: 'none' }}
								id="letter"
								type="file"
								placeholder="test"
								ref={cover_letter}
								title="test"
								onChange={handleFileletter}
							/>
						</label>
						<button onClick={adduser} className={Styles.submit}>
							Postuler maintenant
						</button>
					</div>
				}
			/>
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
				onClick={() => {
					setOpen(!open);
				}}>
				{buttonText}
			</button>
		</>
	);
}
