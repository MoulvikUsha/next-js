'use client' // as the button is used in client side we need to write this. 
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Profile from '../../public/vercel.svg'
import { Roboto } from 'next/font/google'
import Navbar from './Navbar'

const robotoFont = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  const InnerComponent = () => {
    return (
      <h1>Inner Component</h1>
    )
  }

  const router = useRouter()
  const navigate = (path) => {
    router.push(path)
  }
  return (
    <main>
      <Navbar />
      <h1>Home Page</h1>
      <h2 className={robotoFont.className}>Font with next js font feature</h2>
      {/* using a s a normal component */}
      {/* <InnerComponent /> */}
      {/* using as a function */}
      {/* {InnerComponent()} */}
      <br /><br />
      {/* <Link href='/login'>Go to login page</Link>
      <br />
      <button onClick={() => navigate('/login')}>Login</button>
      <br /><br />
      <Link href='/about'>Go to about page</Link>
      <br />
      <button onClick={() => navigate('/about')}>About</button>
      <br />
      <button onClick={() => navigate('/studentlist')}>Students List</button>
      <br />
      <button onClick={() => navigate('/study')}>Study</button>
      <br />
      <Link href='/productlist'>Products</Link>
      <br />
      <Link href='/serverproducts'>Server Products</Link> */}
      <Image src={Profile} alt='image-missing' />
    </main>
  )
}