import Head from 'next/head'

import Theme from '@/components/theme'

function Home() {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        <h1 className='animate-pulse font-logo text-9xl'>Hello World</h1>
        <Theme />
      </div>
    </>
  )
}

export default Home
