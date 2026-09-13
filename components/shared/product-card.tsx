import { cn } from "cn"
import Link from "next/link"
import { Title } from "./title"
import { Plus } from "lucide-react"
import { Button } from "../ui"

type Props = {
  className?: string
  imageUrl: string
  name: string
  id: number
  price: number
}

export function ProductCard({ className, imageUrl, name, id, price }: Props) {
  return (
    <div className={cn("", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <img className="h-[215px] w-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mt-3 mb-1 font-bold" />

        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры седдар
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} Р</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}
