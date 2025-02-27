import { Separator } from "@/components/ui/separator"
import { Cog } from "lucide-react"
import Link from "next/link"

export default function Footer (){
    return(
        <section>
            <Separator className="my-4" />
            <div className="flex justify-evenly items-center ">
                <div className="flex m-2 items-center  gap-1"><Cog  className="w-6"/><Link href="/Home" className="text-sm">Configurações</Link></div>

                <h1>© 2025 Meu Painel de Treino</h1>

            </div>
        </section>
    )
}