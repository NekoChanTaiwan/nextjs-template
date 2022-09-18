import React from 'react'
import Head from 'next/head'
import Heading from '@/components/Heading'
import Counter from '@/components/Counter'

function Home() {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <div className='flex h-screen flex-col items-center justify-center'>
        <Heading className='animate-pulse'>Hello World</Heading>
        <Counter />
      </div>
    </>
  )
}

export default Home
