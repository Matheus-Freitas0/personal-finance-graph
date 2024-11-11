import dotenv from 'dotenv'

dotenv.config()

/** @type {import('tryreason').ReasonConfig} */

const config = {
    projectName: 'tourist-attraction-ai-backend',

    openai: {
        apiKey: process.env.API_KEY,
        defaultModel: 'gpt-3.5-turbo'
    },
}

export default config