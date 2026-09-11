import { cn } from "cn"
import { Title } from "./title"
import { FilterCheckbox } from "./FilterCheckbox"

interface Props {
  className?: string
}

export function Filters({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </div>
  )
}
