import { atom } from 'nanostores'

export const _counter = atom(0)

export function increment(num: number) {
  _counter.set(_counter.get() + num)
}

export function decrement(num: number) {
  _counter.set(_counter.get() - num)
}
