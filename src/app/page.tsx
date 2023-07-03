/** @format */

'use client'

import { PrismaClient } from '@prisma/client';
import { useEffect, useState, useCallback } from 'react';
import fs from 'fs';

export default function HomePage() {
	const [data, setData] = useState();

	//modififer status
	// const prisma = new PrismaClient();

	// async function updateStatus() {
	// 	const updatedRows = await prisma.candidature.updateMany({
	// 		where: {
	// 			test_note:{
	// 				not: null
	// 			}
	// 		},
	// 		data: {
	// 			status: 'deja tester'
	// 		},
	// 	});
	// }

	// updateStatus()
	// .catch(error => {
	// 	console.error(error);
	// })

	//

	// ajouter un fichier
	const [base64Data, setBase64Data] = useState<string>('');
	const [base64Data2, setBase64Data2] = useState<string>('');

  	const convertToBase64 = useCallback((file: File): Promise<string> => {
    	return new Promise((resolve, reject) => {
      		const reader = new FileReader();
      		reader.onload = (event) => {
        	if (event.target?.result) {
          		resolve(event.target.result.toString());
        	} else {
          		reject(new Error('Error reading file'));
        	}
      	};
      	reader.onerror = (event) => {
        	reject(event.target?.error || new Error('Error reading file'));
      	};
      	reader.readAsDataURL(file);
    	});
  	}, []);

  	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    	const file = event.target.files;
		console.log('file: ', file)
		// if (file && file.length >= 2) {
		// 	setBase64Data(file[0]);
		// 	setBase64Data2(file[1]);
		// }


		if(file?.length == 2) {
			const [cv, coverLetter] =  await Promise.all([convertToBase64(file[0]), convertToBase64(file[1])]);
			console.log('cv: ', cv);
			console.log('coverLetter: ', coverLetter)
		} else if (file) {
      		convertToBase64(file[0])
        	.then((data) => {
				fetchData(data)
				return setBase64Data(data);
			})
        	.catch((error) => console.error(error));
			
    	}	
  	};

// ajouter une candidature

  	const fetchData = async (base64: string) => {
		const dt = await (
			await fetch(`http://localhost:3000/api/candidature`, {
				method: "POST",
				body: JSON.stringify({
					name: "avec cv",
					test_note: "be",
					cv: base64,
					cover_letter: base64,
				})
			})
		).json();
		setData(dt);
		
	};

	// useEffect(()=>{
	// 	fetchData()
	// }, [])


	console.log(base64Data)

	// ajouter un questionnaire

	// const fetchData = async () => {
	// 	const dt = await (
	// 		await fetch(`http://localhost:3000/api/survey`, {
	// 			method: "POST",
	// 			body: JSON.stringify({
	// 				job_name: "Bonjour",
	// 				survey_name: "Test"
	// 			})
	// 		})
	// 	).json();
	// 	setData(dt);

	// };

	// useEffect(() => {
	// fetchData()
	// }, [])

	//ajouter un job

	// const fetchData = async () => {
	// 	const dt = await (
	// 		await fetch(`http://localhost:3000/api/job`, {
	// 			method: "POST",
	// 			body: JSON.stringify({
	// 				job_name: "Bonjour",
	// 				specificit: "Test"
	// 			})
	// 		})
	// 	).json();
	// 	setData(dt);

	// };

	// useEffect(() => {
	// 	fetchData()
	// }, [])

	//lister les candidature

	// const prisma: PrismaClient = new PrismaClient();
	// let param = 'Igor'
	// const filteredcandidature = await prisma.candidature.findMany({
	// 	where:{
	// 		name:param,
	// 	}
	// });

	//lister les job

	// const prisma: PrismaClient = new PrismaClient()
	// const filteredjob = await prisma.job.findMany()

	

  	return (
    	<div>
      		<input type="file" multiple onChange={handleFileChange} />
      		{base64Data}
    	</div>
  	);
}