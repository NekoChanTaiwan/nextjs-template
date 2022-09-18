import React from 'react'
import cn from 'classnames'

interface HeadingProps {
  className?: string
  children: React.ReactNode
}

function Heading({ className, children }: HeadingProps) {
  return <h1 className={cn('text-6xl font-extrabold', className)}>{children}</h1>
}

export default Heading
