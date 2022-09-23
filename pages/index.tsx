import Head from 'next/head'
import Heading from '@/components/Heading'
import Counter from '@/components/Counter'
import ColorMode from '@/components/ColorMode'

function Home() {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        <Heading className='animate-pulse font-logo'>Hello World.</Heading>
        <Counter />
        <ColorMode />
      </div>
    </>
  )
}

export default Home
