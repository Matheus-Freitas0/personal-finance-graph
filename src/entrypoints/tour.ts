import { reason } from "tryreason"

export async function POST(req: Request) {
    const {city}  = await req.json()
    
    const prompt = `me fale sobre ${city}`
    const completion = await reason(prompt)

    return completion
}