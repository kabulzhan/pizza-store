import { Container, Filters } from "@/components/shared"
import { Title } from "@/components/shared/title"
import { TopBar } from "@/components/shared"
import { ProductsGroupList } from "@/components/shared/products-group-list"

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товароов */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01a08b34306a782681914aad6e626187.webp",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01a08b34306a782681914aad6e626187.webp",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01a08b34306a782681914aad6e626187.webp",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01a08b34306a782681914aad6e626187.webp",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/01a08b34306a782681914aad6e626187.webp",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              {/* <ProductsGroupList title="Пиццы" items={[1,2,3,4,5]} />
              <ProductsGroupList title="Комбоо" items={[1,2,3,4,5]} /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
