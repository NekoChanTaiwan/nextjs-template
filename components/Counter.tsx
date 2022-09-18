import React from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'
import { useCounter, increment, decrement } from '@/store/counter'

function Counter() {
  const counter = useCounter()

  return (
    <div className='mt-4 flex items-center'>
      <button
        className='rounded-full bg-white p-1 text-2xl text-gray-800 opacity-70'
        onClick={() => decrement(1)}
      >
        <MdRemove />
      </button>
      <span className='mx-4 text-4xl'>{counter}</span>
      <button
        className='rounded-full bg-white p-1 text-2xl text-gray-800 opacity-70'
        onClick={() => increment(1)}
      >
        <MdAdd />
      </button>
    </div>
  )
}

export default Counter
