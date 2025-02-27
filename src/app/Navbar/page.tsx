import { House, Dumbbell, ChartSpline, Cog, PanelLeftClose } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export default function Navbar(){
    return(
        <nav>
            <section className="flex items-center justify-around gap-2 mt-4 hidden md:flex ">
                <div className="flex items-center">
                    <Dumbbell  className="mx-2 mt-1"/>
                    <h2 className="text-3xl">DashTrain</h2>
                </div>

                <div className="flex items-center justify-around w-6/12 ">
                    <div className="flex m-2 items-center gap-1"><House className="w-6"/><Link href="/Home" className="text-sm">Home</Link></div>
                    <div className="flex m-2 items-center gap-1"><Dumbbell  className="w-6"/><Link href="/Home" className="text-sm">Treinos</Link></div>
                    <div className="flex m-2 items-center gap-1"><ChartSpline  className="w-6"/><Link href="/Home" className="text-sm">Estatisticas</Link></div>
                    <div className="flex m-2 items-center  gap-1"><Cog  className="w-6"/><Link href="/Home" className="text-sm">Configurações</Link></div>
                </div>

                <div className="flex self-center justify-center">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button className="w-1 h-1">
                                <Avatar>
                                    <AvatarImage src="https://github.com/RafaelFerreira15.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Perfil
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                    Sair
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </section>
            <section className="flex items-center justify-evenly gap-2 mt-4 md:hidden">
                <div className="flex items-center">
                    <Dumbbell  className="w-20"/>
                    <h2 className="text-3xl">DashTrain</h2>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline"><PanelLeftClose /></Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Mennu</SheetTitle>
                            <SheetDescription>
                                Acesse alguma de nossas páginas para especificações mais detalhadas .,.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex-col items-center justify-around w-10/12 m-4 mx-6 p-2 px-5 gap-8">
                            <div className="flex m-4 gap-2"><House className="w-12"/><Link href="/Home" className="text-xl">Home</Link></div>
                            <div className="flex m-4 gap-2"><Dumbbell  className="w-12"/><Link href="/Home" className="text-xl">Treinos</Link></div>
                            <div className="flex m-4 gap-2"><ChartSpline  className="w-12"/><Link href="/Home" className="text-xl">Estatisticas</Link></div>
                            <div className="flex m-4  gap-2"><Cog  className="w-12"/><Link href="/Home" className="text-xl">Configurações</Link></div>
                        </div>
                        <div className="flex self-center justify-center">
                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <Button className="w-1 h-1">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/RafaelFerreira15.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Button>

                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            Perfil
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600">
                                            Sair
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        
                    </SheetContent>
                </Sheet>
                

            </section>
            <Separator className="my-4" />
        </nav>
    )
}