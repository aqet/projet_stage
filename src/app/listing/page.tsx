/** @format */

import { PrismaClient } from '@prisma/client';
import styles from '../page.module.scss';

const prisma = new PrismaClient();

export default async function ListingPage() {
	const jobs = await prisma.job.findMany({});

	return (
		<div className={styles.container}>
			<p className={styles.number}>
				{jobs.length} Offres d'emplois disponible
			</p>
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
										<span>Kevmax </span>
									</div>
									<div>
										<img src="/place.svg" alt="" />
										<span>
											{user.number_place} Place available
										</span>
									</div>
									<div>
										<img src="/durree.svg" alt="" />
										<span>{user.cdi}</span>
									</div>
									<div>
										<img src="/time.svg" alt="" />
										<span>{user.hour} Hour per week</span>
									</div>
								</div>
							</div>
							<div>
								<a href={`/listing/${user.uuid}`}>Afficher</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
