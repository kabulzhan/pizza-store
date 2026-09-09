import { cn } from "cn"

interface Props {
  className?: string
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
]
const activeIndex = 0

export function Categories({ className }: Props) {
  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeIndex === index &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          href="#"
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  )
}
