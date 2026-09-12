import { cn } from "cn"
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox"
import { Input } from "../ui"
import { selectedValueIncludes } from "@base-ui/react/internals/itemEquality"

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
  className?: string
}

export function CheckboxFiltersGroup({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}: Props) {
  return (
    <div className={cn("", className)}>
      <p className="mb-3 font-bold">{title}</p>

      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="border-none bg-gray-50"
        />
      </div>

      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {items.map((item, index) => (
          <FilterCheckbox
            // onCheckedChange={() => onCheckedChange(item.value)}
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
    </div>
  )
}
