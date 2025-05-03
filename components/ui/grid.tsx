import type { ReactNode } from "react"

interface GridProps {
  children: ReactNode
  columns?: number
}

export function Grid({ children, columns = 3 }: GridProps) {
  return <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>{children}</div>
}
