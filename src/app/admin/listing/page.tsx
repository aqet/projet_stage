/** @format */

import { PrismaClient } from '@prisma/client';
import styles from '../../page.module.scss';
import PopupcreateJob from '@/components/job/popupcreatejob';

const prisma = new PrismaClient();

export default async function ListingPage() {
	const jobs = await prisma.job.findMany({});

	return (
		<div className={styles.container}>
			<div className={styles.linehead}>
				<p className={styles.number}>
				{jobs.length} Offres d'emplois disponible
				</p>
				<PopupcreateJob buttonText='ajouter un job' />

			</div>
			<div className={styles.listing}>
				{jobs.map((user: any) => (
					<div className={styles.list}>
						<div className={styles.head}>
							<div>
								<span className={styles.name}>
									{user.job_name}
								</span>
								<div>
									<div>
										<img src="/entreprise.svg" alt="" />
										<span>Kevmax</span>
									</div>
									<div>
										<img src="/place.svg" alt="" />
										<span>
											{user.number_place} Place disponible
										</span>
									</div>
									<div>
										<img src="/durree.svg" alt="" />
										<span>{user.cdi} mois</span>
									</div>
									<div>
										<img src="/time.svg" alt="" />
										<span>{user.hour} Heur par semaine</span>
									</div>
								</div>
							</div>
							<div>
								<a href={`listing/${user.uuid}`}>Afficher</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
