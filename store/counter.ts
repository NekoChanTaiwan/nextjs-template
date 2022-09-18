import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'

const _counter = atom(0)

export function useCounter() {
  return useStore(_counter)
}

export function increment() {
  _counter.set(_counter.get() + 1)
}

export function decrement() {
  _counter.set(_counter.get() - 1)
}
