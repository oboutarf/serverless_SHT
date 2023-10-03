import { NextResponse, NextRequest } from "next/server";

export default async function GET(req: NextRequest)   {
    console.log(req)
    const body = { message: 'Serverless responded' }
    return NextResponse.json(body, { status: 200 })
}
