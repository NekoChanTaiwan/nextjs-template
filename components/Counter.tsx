import React from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'
import { useCounter, increment, decrement } from '@/store/counter'

function Counter() {
  const count = useCounter()

  return (
    <div className='mt-4 flex items-center'>
      <button
        type='button'
        title='Decrement'
        className='rounded-full bg-white p-1 text-2xl text-gray-800 opacity-70'
        onClick={() => decrement()}
      >
        <MdRemove />
      </button>
      <span className='mx-4 text-4xl'>{count}</span>
      <button
        type='button'
        title='Increment'
        className='rounded-full bg-white p-1 text-2xl text-gray-800 opacity-70'
        onClick={() => increment()}
      >
        <MdAdd />
      </button>
    </div>
  )
}

export default Counter
