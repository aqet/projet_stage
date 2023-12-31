/** @format */

import styles from './layout.module.scss';
import { Inter } from 'next/font/google';
import './globals.scss';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Recrutement',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={[inter.className, styles.container].join(' ')}>
				<Navbar />
				<div className={styles.espace}></div>
				<div className={styles.children}>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
