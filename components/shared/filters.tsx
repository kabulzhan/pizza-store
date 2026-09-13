"use client"

import { cn } from "cn"
import { Title } from "./title"
import { Input } from "../ui"
import { RangeSlider } from "./range-slider"
import { FilterCheckbox } from "./filter-checkbox"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"

interface Props {
  className?: string
}

export function Filters({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до: </p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[0, 5000]}
          onValueChange={(value) => {
            console.log("VALUE: ", value)
          }}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Моццарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Солённые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Моццарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Солённые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
      />
    </div>
  )
}
