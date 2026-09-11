import { cn } from "cn"
import { ArrowUpDown } from "lucide-react"
import { Container } from "./container"
import { Categories } from "./categories"
import { SortPopup } from "./sort-popup"

interface Props {
  className?: string
}

export function TopBar({ className }: Props) {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}
