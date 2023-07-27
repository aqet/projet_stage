import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient;

export default async function GET(req: Request, { params }: { params: { uuid: string } }) {

    const { uuid } = params

    try {
        let result = await prisma.job.findFirst({
            where: {
                uuid
            }
        });
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}
