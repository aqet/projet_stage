/** @format */
'use client';

import React, { FormEvent, useEffect, useRef } from 'react';
import { useState } from 'react';

import Styles from '../../app/page.module.scss';
import router from 'next/router';
import { useRouter } from 'next/navigation';
import SwipeableViews from 'react-swipeable-views';
import Popup from './popup';

interface prop {
	uuid: string;
	job_nam: string;
	number_plac: string;
	specificit: string;
	qualificatio: string;
	hou: string;
	time: string;
}

export default function PopupEdit({
	uuid,
	job_nam,
	number_plac,
	specificit,
	qualificatio,
	hou,
	time,
}: prop) {
	const [selectedValue, setSelectedValue] = useState('');
	const [selectedOption, setSelectedOption] = useState(time);
	const [index, setIndex] = useState<number>(0);

	const handleOptionChange = (event: any) => {
		setSelectedOption(event.target.value);
	};

	const handleChange = (event: any) => {
		setSelectedValue(event.target.value);
	};

	const [jobName, setJobName] = useState(job_nam);
	const [number, setNumber] = useState(number_plac);
	const [heur, setHeur] = useState(hou);
	const [specifici, setSpecifici] = useState(specificit);
	const [qualificati, setQualificati] = useState(qualificatio);
	const [durre, setDurre] = useState(time);

	const job_name = useRef<HTMLInputElement>(null);
	const cdi = useRef<HTMLInputElement>(null);
	const number_place = useRef<HTMLInputElement>(null);
	const specificity = useRef<HTMLTextAreaElement>(null);
	const qualification = useRef<HTMLTextAreaElement>(null);
	const hour = useRef<HTMLInputElement>(null);

	const router = useRouter();

	async function edit(event: FormEvent) {
		event.preventDefault();
		await fetch('http://localhost:3000/api/edit', {
			method: 'POST',
			body: JSON.stringify({
				job_name: job_name?.current?.value,
				cdi: durre,
				number_place: number_place?.current?.value,
				specificity: specificity?.current?.value,
				qualification: qualification?.current?.value,
				hour: hour?.current?.value,
				uuid: uuid,
			}),
		}).then((res) => {
			if (res.status == 200) {
				router.push('/admin/listing');
				setOpen(!open);
			} else {
				alert({ uuid });
			}
		});
	}

	const [open, setOpen] = useState(false);
	const [isVisible, setVisible] = useState(false);
	useEffect(() => {
		if (selectedOption != 'cdi' && selectedOption != '') {
			setVisible(true);
		}
	}, []);

	return (
		<>
			<Popup
				setOpen={setOpen}
				open={open}
				children={
					<SwipeableViews
						index={index}
						onChangeIndex={(value: number) => {}}>
						<div className={Styles.div}>
							<input
								className={Styles.input}
								type="text"
								placeholder="nom du job"
								value={jobName}
								onChange={(event) =>
									setJobName(event?.target?.value)
								}
								ref={job_name}
							/>
							<div
								style={{ gap: '20px' }}
								className={Styles.radiobtn}>
								<div style={{ alignItems: 'center' }}>
									<label
										style={{ color: 'black' }}
										htmlFor="cdi">
										cdi
									</label>
									<input
										ref={cdi}
										onClick={() => {setVisible(false)
										setDurre('cdi')}}
										name="options"
										id="cdi"
										className={Styles.input}
										type="radio"
										value="cdi"
										checked={selectedOption == 'cdi'}
										onChange={handleOptionChange}
									/>
								</div>
								<div style={{ alignItems: 'center' }}>
									<label
										style={{ color: 'black' }}
										htmlFor="cdd">
										cdd
									</label>
									<input
										onClick={() => setVisible(true)}
										name="options"
										id="optio"
										className={Styles.input}
										type="radio"
										checked={
											selectedOption != 'cdi' &&
											selectedOption != ''
										}
										onChange={handleOptionChange}
									/>
								</div>
							</div>
							<input
								ref={cdi}
								style={{
									display: isVisible ? 'flex' : 'none',
								}}
								type="number"
								placeholder="dureer (en mois)"
								value={durre}
								onChange={(event) =>
									setDurre(event?.target?.value)
								}
							/>
							<input
								onChange={(event) =>
									setNumber(event?.target?.value)
								}
								value={number}
								className={Styles.input}
								type="number"
								ref={number_place}
								placeholder="number_place"
							/>
							<input
								value={heur}
								onChange={(event) =>
									setHeur(event?.target?.value)
								}
								className={Styles.input}
								type="number"
								ref={hour}
								placeholder="hour"
							/>
							<a
								className={Styles.submit}
								onClick={() => {
									setIndex(index + 1);
								}}>
								Suivant
							</a>
						</div>
						<div className={Styles.div}>
							<textarea
								style={{ height: '275px' }}
								value={specifici}
								onChange={(event) =>
									setSpecifici(event?.target?.value)
								}
								className={Styles.input}
								ref={specificity}
								placeholder="specificity"
							/>
							<a
								className={Styles.submit}
								onClick={() => {
									setIndex(index + 1);
								}}>
								Suivant
							</a>
						</div>
						<div className={Styles.div}>
							<textarea
								style={{ height: '280px' }}
								value={qualificati}
								onChange={(event) =>
									setQualificati(event?.target?.value)
								}
								className={Styles.input}
								ref={qualification}
								placeholder="qualification"
							/>
							<button className={Styles.submit} onClick={edit}>
								Enregistrer
							</button>
						</div>
					</SwipeableViews>
				}
			/>
			<a
				style={{
					backgroundColor: 'var(--white-color)',
					padding: '10px 20px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '35px',
					color: 'var(--background-color)',
					cursor: 'pointer',
					textDecoration: 'none',
				}}
				className={Styles.postuler}
				onClick={() => setOpen(!open)}>
				Editer
			</a>
		</>
	);
}
