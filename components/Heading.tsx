import React from 'react'
import cx from 'clsx'

interface HeadingProps {
  className?: string
  children: React.ReactNode
}

function Heading({ className, children }: HeadingProps) {
  return <h1 className={cx('text-6xl font-extrabold', className)}>{children}</h1>
}

export default Heading
