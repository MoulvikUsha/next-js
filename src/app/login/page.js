'use client'
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter()
    const navigate = (path) => {
        router.push(`/login/${path}`)
    }
    return (
        <>
            <div>Login Page</div>
            <br />
            <button onClick={() => navigate('loginstudent')}>Student login</button>
            <br />
            <button onClick={() => navigate('loginteacher')}>Teacher login</button>
        </>

    )
}

export default Login