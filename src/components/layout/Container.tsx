import type { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">{children}</div>
  )
}