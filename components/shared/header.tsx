import { cn } from "cn"
import { Container } from "./container"
import Image from "next/image"

interface Props {
  className?: string
}

export function Header({ className }: Props) {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда{" "}
            </p>
          </div>
        </div>
      </Container>
    </header>
  )
}
