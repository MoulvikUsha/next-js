import { BASE_URL } from "@/config/constant";

export default function environment() {
    console.log('environ:', process.env);
    return (
        <>
        <h1>Environment Variables</h1>
        {
            process.env.NODE_ENV == 'development'? 
            <h1>You are on development mode</h1>: 
            <h1>You are on production mode</h1>
        }
        {
            BASE_URL
        }
        </>
    )
}