"use client"

import { useCategoryStore } from "@/store/category"
import { cn } from "cn"

interface Props {
  className?: string
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
  { id: 8, name: "Десерты" },
]

export function Categories({ className }: Props) {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            categoryActiveId === cat.id &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          href="#"
          key={index}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  )
}
