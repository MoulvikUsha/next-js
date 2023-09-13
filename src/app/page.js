'use client' // as the button is used in client side wen eed to write this. 
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
      <h1>Home Page</h1>
      {/* using a s a normal component */}
      {/* <InnerComponent /> */}
      {/* using as a function */}
      {/* {InnerComponent()} */}
      <br /><br />
      <Link href='/login'>Go to login page</Link>
      <br />
      <button onClick={() => navigate('/login')}>Login</button>
      <br /><br />
      <Link href='/about'>Go to about page</Link>
      <br />
      <button onClick={() => navigate('/about')}>About</button>

    </main>
  )
}