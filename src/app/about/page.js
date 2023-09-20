import Link from "next/link"
import { useRouter } from "next/navigation"

const About = () => {
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