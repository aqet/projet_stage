import { NextResponse } from "next/server";
import db, { executeQuery } from "@/app/api/sql";
import { PrismaClient } from "@prisma/client";
import { Authentification as IAuthentification } from "@/models/authentification";


// GET prendre/recuperer des donnees
// PUT update
// POST recuperer/poster des donnes
// DELETE supprimer

const prisma: PrismaClient = new PrismaClient();

export async function POST(req: Request) {
    const body: IAuthentification = await req.json();
    console.log('test: ', body)
    try {
        const user = await prisma.authentification.findFirst({
            where: {
                username: body.username,
                password: body.password
            },
        })
        if (user) {
            return NextResponse.json(user, { status: 200 })
        } else {
            return NextResponse.json({ message: "Vous n'avez pas accès à cette fonctionnalité" }, { status: 400 })
        }

    } catch (err) {
        console.log('error: ', err)
        return NextResponse.json(err, { status: 500 })
    }
}

export async function GET(req: Request) {
    try {
        let jobs = await prisma.authentification.findFirst({
            where: {
                uuid: 'jjj'
            }
        });
        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}

// 200 | 201 tout va bien
// 400 c'est une erreur
// 404 le lien n'existe pas
// 500 les erreurs du serveur