import { cn } from "cn"
import React from "react"
import { Checkbox } from "../ui"

export interface FilterCheckboxProps {
  className?: string
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export function FilterCheckbox({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  className,
}: FilterCheckboxProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="h-6 w-6 rounded-[8px]"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="flex-1 cursor-pointer leading-none"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  )
}
