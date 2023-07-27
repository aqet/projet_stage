import { NextResponse } from "next/server";
import db, { executeQuery } from "@/app/api/sql";
import { PrismaClient } from "@prisma/client";
import { Survey as ISurvey } from "@/models/survey";
import { error } from "console";


const prisma: PrismaClient = new PrismaClient();

export async function POST(req: Request) {
    const body: ISurvey = await req.json();
    try {
        console.log('good');
        const tag = await prisma.survey.create({
            data: {
                job_name: body.job_name||'',
                survey_name: body.survey_name||'',
                jobId: "tttyyy",
            },
        })
        return NextResponse.json(tag, {status: 200})
    
    } catch(err) {
        console.log('error: '+err);
        return NextResponse.json(err, {status: 500})
    } 
  }

export async function GET(req: Request) {
      try {
        // let result = await executeQuery('SELECT * FROM candidature')
        let result = await prisma.survey.findMany();
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}

// 200 | 201 tout va bien
// 400 c'est une erreur
// 404 le lien n'existe pas
// 500 les erreurs du serveur