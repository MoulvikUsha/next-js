'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const About = () => {
    // const [session, loading] = useSession()
    // console.log("🚀 ~ file: page.js:7 ~ About ~ session:", sesion)
    // console.log("🚀 ~ file: page.js:7 ~ About ~ loading:", loading)
    return (
        <>
            <div>About Page</div>
            <Link href='/about/aboutcollege'>Go to College page</Link>
            <br />
            <Link href='/about/aboutstudent'>Go to Student page</Link>
        </>
    )
}
export default About

export function generateMetadata({params}) {
    return {
        title: 'about page title',
        description: 'User page description'
    }
}