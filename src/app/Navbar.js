import Link from "next/link"
import { signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="container">
                        <h1 className="logo">Logo</h1>
                        <ul className="nav-links">
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/userlist">Users</Link></li>
                            <li><Link href="/api/auth/signin" onClick={e => {
                                e.preventDefault()
                                signIn()
                            }}>Sign-in</Link></li>
                            <li><Link href="/api/auth/signout"  onClick={e => {
                                e.preventDefault()
                                signOut()
                            }}>Sign-out</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar