import { Separator } from "@/components/ui/separator"
import { Toggle } from "@/components/ui/toggle"
import { Cog, MoonStar } from "lucide-react"
import Link from "next/link"


const Footer = () => {
    return(
        <section>
            <Separator className="my-4" />
            <div className="flex justify-evenly items-center ">
                <div className="flex m-2 items-center  gap-1"><Cog  className="w-6"/><Link href="/Configuracoes" className="text-sm">Configurações</Link></div>

                <Toggle aria-label="Toggle italic">
                    <MoonStar className="h-4 w-4 " />
                </Toggle>

                <h1>© 2025 Meu Painel de Treino</h1>

            </div>
        </section>
    )
}

export default Footer;