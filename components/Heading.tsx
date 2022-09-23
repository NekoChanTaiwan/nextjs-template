import cx from 'clsx'
import type { ReactNode } from 'react'

interface HeadingProps {
  className?: string
  children: ReactNode
}

function Heading({ className, children }: HeadingProps) {
  return <h1 className={cx('text-6xl font-extrabold', className)}>{children}</h1>
}

export default Heading
