"use client"

import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-navigation"

interface PageHeaderProps {
  currentPage?: string
  onPageChange?: (page: string) => void
  onClose?: () => void
}

export function PageHeader({ currentPage, onPageChange, onClose }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="flex items-center gap-4">
        {currentPage && onPageChange && <MobileNav currentPage={currentPage} onPageChange={onPageChange} />}
        <div className="text-xl font-bold text-white">NueStra</div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Search className="w-5 h-5" />
        </Button>
        {onClose && (
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
