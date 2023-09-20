'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const CommonLayout = ({ children }) => {
    const pathName = usePathname()
    return (
        <div>
            <h1>Common login layout</h1>
            <br />
            {
                // conditional routing
                pathName !== '/login/loginteacher' ?
                    <ul>
                        <li>
                            <Link href='/login'>Login Main</Link>
                        </li>
                        <li>
                            <Link href='/login/loginstudent'>Student Login</Link>
                        </li>
                        <li>
                            <Link href='/login/loginteacher'>Teacher Login</Link>
                        </li>
                    </ul> : <Link href='/login'>Go to Main Login</Link>
            }

            <br />
            {children}
        </div>
    )
}

export default CommonLayout