import { cn } from "cn"
import { Container } from "./container"
import Image from "next/image"
import { Button } from "../ui"
import { ArrowRight, ShoppingCart, User } from "lucide-react"

interface Props {
  className?: string
}

export function Header({ className }: Props) {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда{" "}
            </p>
          </div>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} /> Войти
          </Button>

          <div>
            <Button className="group relative">
              <b>520 P</b>
              <span className="mx-3 h-full w-[1px] bg-white/30" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
              </div>
              <ArrowRight className="absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
