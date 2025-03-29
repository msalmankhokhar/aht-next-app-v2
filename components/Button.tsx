import React from 'react'

interface ButtonProps {
    children: React.ReactNode,
    variant?: 'primary' | 'secondary' | 'tertiary'
}

export default function Button({children}: ButtonProps) {
  return (
    <button type="button" className="btn">
        {children}
    </button>
  )
}
