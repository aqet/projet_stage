import { NextResponse } from "next/server";
import db, { executeQuery } from "@/app/api/sql";
import { PrismaClient } from "@prisma/client";
import { Job as IJob} from "@/app/models/job";


// GET prendre/recuperer des donnees
// PUT update
// POST recuperer/poster des donnes
// DELETE supprimer

const prisma: PrismaClient = new PrismaClient();

export async function POST(req: Request) {
    const body: IJob = await req.json();
    try {
        const tag = await prisma.job.create({
            data: {               
                content: body.content ?? '',
                specificity: body.specificity ?? '',
                job_name: body.job_name ?? '',
            },
        })
        return NextResponse.json(tag, { status: 200 })

    } catch (err) {
        console.log('error: ', err)
        return NextResponse.json(err, { status: 500 })
    }
}

export async function GET(req: Request) {
    try {
        // let result = await executeQuery('SELECT * FROM candidature')
        let result = await prisma.job.findMany();
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}

// 200 | 201 tout va bien
// 400 c'est une erreur
// 404 le lien n'existe pas
// 500 les erreurs du serveur