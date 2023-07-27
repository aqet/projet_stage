/** @format */

// 'use client'

import Styles from '../../page.module.scss';
import { PrismaClient } from '@prisma/client';
import JobInformations from '@/components/job/JobInformations';
import Btntime from '@/components/job/btntime';
import Popupuser from '@/components/job/popupuser';
import Btnpopup from '../../../components/job/btnpopup'
import Error from '../../not-found';
const prisma = new PrismaClient();

export default async function productDetail({
	params,
}: {
	params: { id: string };
}) {

	const { id } = params;
	const job = await prisma.job.findFirst({ where: { uuid: id } });

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
						height: '80px',
						zIndex: '100',
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
					<Popupuser buttonText={'postuler maintenant'} uuid={job.uuid}  nom={job.job_name}/>
					</div>
				</div>
				<div className={Styles.shemin}>
					Accueil
					<div>
						<img src="/superieur.svg" alt="" />
					</div>
					offres
					<div>
						<img src="/superieur.svg" alt="" />
					</div>
					<span>{job?.job_name}</span>
				</div>
			</div>
			<div className={Styles.container}>
				<h1>Detail de l'offre:</h1>
				<div className={Styles.tags}>
					<span>Tags:</span>
					<Btntime cdi={job?.cdi || ''} />
				</div>
				<JobInformations
					informations={<pre>{job?.qualification}</pre>}
					title="specificity"
				/>
				<JobInformations
					informations={<pre>{job?.qualification}</pre>}
					title="qualification"
				/>
				<div className={Styles.autre}>
					<a href="/listing">Voir les autres offres d'emploi</a>
				</div>
			</div>
		</>
	);
}
