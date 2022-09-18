import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'

const _counter = atom(0)

export function useCounter() {
  return useStore(_counter)
}

export function increment(num: number) {
  _counter.set(_counter.get() + num)
}

export function decrement(num: number) {
  _counter.set(_counter.get() - num)
}
