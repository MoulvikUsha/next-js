import Link from "next/link"

const CommonLayout = ({ children }) => {
    return (
        <div>
            <h1>Common login layout</h1>
            <br />
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
            </ul>
            <br />
            {children}
        </div>
    )
}

export default CommonLayout