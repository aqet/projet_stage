/** @format */

// 'use client'

import Styles from '../../../page.module.scss';
import React from 'react';
import { PrismaClient } from '@prisma/client';
import JobInformations from '@/components/job/JobInformations';
import Btntime from '@/components/job/btntime';
import Popupeditjob from '@/components/job/popupeditjob';
import Error from '../../../not-found';
const prisma = new PrismaClient();

export default async function productDetail({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const job = await prisma.job.findFirst({ where: { uuid: id } });
	const user = await prisma.candidature.findMany({
		where: { job_name: job?.job_name },
	});

	if (job == null) {
		return <Error />;
	}
	return (
		<>
			<div>
				<div
					style={{
						backgroundColor: 'rgba(5, 30, 36)',
						color: 'var(--white-color)',
						position: 'fixed',
						display: 'flex',
						padding: '10px 10px 10px 40px',
						justifyContent: 'space-between',
						top: '0',
						left: '0',
						width: '100%',
						zIndex: '101',
					}}>
					<div>
						<div
							style={{
								fontSize: '36px',
								fontWeight: '700',
								lineHeight: '35px',
								marginBottom: '10px',
							}}>
							{job?.job_name}
						</div>
						<div style={{ display: 'flex' }}>
							<img src="/entreprise.svg" alt="" />
							<p> Kevmax SARL</p>
						</div>
					</div>
					<div>
						<Popupeditjob
							uuid={job.uuid}
							job_nam={job.job_name}
							number_plac={job.number_place}
							specificit={job.specificity}
							qualificatio={job.qualification}
							hou={job.hour}
							time={job.cdi}
						/>
					</div>
				</div>
				<div className={Styles.shemin}>
					<a
						style={{ color: 'black', textDecoration: 'none' }}
						href="/admin/listing">
						offres
					</a>
					<div>
						<img src="/superieur.svg" alt="" />
					</div>
					<span>{job?.job_name}</span>
				</div>
			</div>
			<div className={Styles.container}>
				<div style={{ display: 'flex', textAlign: 'center' }}>
					{user.length} personne(s) a(ont) postulé(s) a cette offre{' '}
					<a href="../user" style={{ padding: '10px 30px' }}>
						voir
					</a>
				</div>
				<h1>Detail de l'offre:</h1>
				<div className={Styles.tags}>
					<span>Tags:</span>
					<Btntime cdi={job?.cdi || ''} />
				</div>
				<JobInformations
					informations={<pre>{job?.specificity}</pre>}
					title="specificity"
				/>
				<JobInformations
					informations={<pre>{job?.qualification}</pre>}
					title="qualification"
				/>
				<div className={Styles.autre}>
					<a href="/admin/listing">Voir les autres offres d'emploi</a>
				</div>
			</div>
		</>
	);
}
