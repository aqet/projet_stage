/** @format */
'use client';

import React, { FormEvent, useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Styles from '../../app/page.module.scss';
import { useRouter } from 'next/navigation';
import SwipeableViews from 'react-swipeable-views';
import InputQuestion from '@/components/job/Inputquestion';
import Popup from './popup';

interface prop {
	buttonText: string;
}

export default function Popupcreate({ buttonText }: prop) {
	const [selectedValue, setSelectedValue] = useState('');
	const [index, setIndex] = useState<number>(0);
	const [values, setValues] = useState<string[]>(['']);

	const increaseSize = () => {
		setValues((prevArray: any) => [...prevArray, '']);
	};

	const handleChange = (event: any) => {
		setSelectedValue(event.target.value);
	};

	const job_name = useRef<HTMLInputElement>(null);
	const cdi = useRef<HTMLInputElement>(null);
	const number_place = useRef<HTMLInputElement>(null);
	const specificity = useRef<HTMLTextAreaElement>(null);
	const qualification = useRef<HTMLTextAreaElement>(null);
	const hour = useRef<HTMLInputElement>(null);

	const router = useRouter();
	const [open, setOpen] = useState<boolean>(false);
	async function addjob(event: FormEvent) {
		event.preventDefault();

		await fetch('http://localhost:3000/api/survey', {
			method: 'POST',
			body: JSON.stringify({
				survey_name: [...values]
			}),
		}).then((res) => {
			if (res.status == 200) {
				router.push('listing');
			} else {
				alert("Vous n'avez pas acces a cette fonctionnalite");
			}
		});

		await fetch('http://localhost:3000/api/job', {
			method: 'POST',
			body: JSON.stringify({
				job_name: job_name?.current?.value,
				cdi: selectedValue,
				number_place: number_place?.current?.value,
				specificity: specificity?.current?.value,
				qualification: qualification?.current?.value,
				hour: hour?.current?.value,
			}),
		}).then((res) => {
			if (res.status == 200) {
				router.push('listing');
				setOpen(!open);
			} else {
				alert("Vous n'avez pas acces a cette fonctionnalite");
			}
		});
	}

	const [isVisible, setVisible] = useState(false);

	return (
		<>
			<Popup
				setOpen={setOpen}
				open={open}
				children={
					<SwipeableViews
						onSubmit={addjob}
						index={index}
						onChangeIndex={(value: number) => {}}>
						<div className={Styles.div}>
							<input
								className={Styles.input}
								type="text"
								placeholder="nom du job"
								ref={job_name}
							/>
							<div
								style={{ gap: '20px' }}
								className={Styles.radiobtn}>
								<div>
									<label htmlFor="cdi">cdi</label>
									<input
										onClick={() => setVisible(false)}
										name="options"
										id="cdi"
										className={Styles.input}
										type="radio"
										value="cdi"
										ref={cdi}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor="cdd">cdd</label>
									<input
										onClick={() => setVisible(!isVisible)}
										name="options"
										id="cdd"
										className={Styles.input}
										type="radio"
									/>
								</div>
							</div>
							<input
								ref={cdi}
								onChange={handleChange}
								style={{
									display: isVisible ? 'flex' : 'none',
								}}
								type="number"
								placeholder="dureer (en mois)"
							/>
							<input
								className={Styles.input}
								type="number"
								ref={number_place}
								placeholder="number_place"
							/>
							<input
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
								style={{ height: '215px' }}
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
								style={{ height: '215px' }}
								className={Styles.input}
								ref={qualification}
								placeholder="qualification"
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
							<div
								className={Styles.div}
								id="text"
								style={{
									padding: '0',
									overflow: 'auto',
									height: '240px',
								}}>
								{values?.map((v, index) => (
									<InputQuestion
										key={'input_question_' + index}
										value={values[index]}
										onChange={(value) => {
											console.log('value: ', value)
											console.log('input value: ', values);
											console.log(index);
											
											setValues(values.map((e, i) => {
												return i == index ? value : e;
											}));
										}}
										number={(index + 1)}
									/>
								))}
							</div>
							<div
								onClick={increaseSize}
								style={{
									backgroundColor: 'var(--background-color)',
									color: 'var(--white-color)',
									padding: '10px',
									width: 'max-content',
									right: '0',
									borderRadius: '32px',
								}}>
								Ajouter une question
							</div>
							<button className={Styles.submit} onClick={addjob}>
								Ajouter un job
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
				{buttonText}
			</a>
		</>
	);
}
