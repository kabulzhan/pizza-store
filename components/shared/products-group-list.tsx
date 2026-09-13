import { cn } from "cn"
import { Title } from "./title"
import { ProductCard } from "./product-card"

interface Props {
  title: string
  items: any[]
  className?: string
  listClassName?: string
  categoryId: number
}

export function ProductsGroupList({
  className,
  title,
  items,
  listClassName,
  categoryId,
}: Props) {
  return (
    <div className={cn("", className)}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items
          .filter((product) => product.items.length > 0)
          .map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  )
}
