import { Check, CalendarDays, PersonStanding } from "lucide-react"
import Footer from "@/app/(Components)/Footer";
import Navbar from "@/app/(Components)/Navbar";
import Tabela from "@/app/(Components)/HomeComponents/Tabela";
import Chart from "@/app/(Components)/HomeComponents/Chart"
import { Progress } from "@/components/ui/progress"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";



export default function Home() {


    return (
        <section className='w-full h-full'>
            <Navbar />
            <div className=" flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl m-4">Bem vindo, Rafael !</h1>
                <p className="mx-4">Aqui está o resumo do seu progresso e os treinos agendados.</p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 mt-4">
                <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center text-xl">Progresso Semanal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex"><Check  className="mx-2"/> <h1 className="text-base">Treinos concluídos: 4/5</h1></div>
                        <Progress value={80} className="w-full mt-6" />
                    </CardContent>
                    <CardFooter>
                        <h1>Meta Semanal: 5 Treinos</h1>
                    </CardFooter>
                </Card>
                <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center text-xl">Próximo Treino</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex"><CalendarDays className="mx-2"/><h1 className="text-base">Peito e Tríceps</h1></div>
                        <p className="w-full mt-6 pl-7">Horário: 18h </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/Estatistica" className="text-sky-800"> Ver detalhes</Link>
                    </CardFooter>
                </Card>
                <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center text-xl">Total de Exercícios</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex"><PersonStanding className="mx-2"/> <h1 className="text-base">Exercícios feitos: 32</h1></div>
                        <p className="w-full mt-6 pl-3">Volume total: 12.300 kg</p>
                    </CardContent>
                    <CardFooter>
                    <Link href="/Estatistica" className="text-sky-800"> Ver estatísticas</Link>
                    </CardFooter>
                </Card>

                
                
                
            </div>

            <Chart />
            <Tabela />

            <Footer />

        </section>
    )
}