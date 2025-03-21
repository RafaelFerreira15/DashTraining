import Tabela from "@/app/(Components)/TreinosComponents/TabelaTreino";
import Grafico from "@/app/(Components)/TreinosComponents/GraficoTreino";
import Footer from "@/app/(Components)/Footer";
import Navbar from "@/app/(Components)/Navbar";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PersonStanding, Repeat } from "lucide-react";
import FormCard from "../../(Components)/TreinosComponents/FormCard";



export default function Treinos (){
    return(
        <section>
            {/* <ProtectedRoute>*/}
            <Navbar />
                <div className=" flex flex-col items-center justify-center w-full">
                    <h1 className="text-5xl m-4">Seus Treinos 🏋️</h1>
                    <p className="mx-4">Gerencie e acompanhe sua rotina de treinos aqui.</p>
                </div>

                <Tabela />

                <div className="m-auto">
                    <Grafico />
                </div>

                <div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 m-12">
                        <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-center text-xl">Total de Exercícios</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex"><PersonStanding  className="mx-2"/> <h1 className="text-base">Exercícios feitos: 32</h1></div>
                            </CardContent>
                            <CardFooter>
                                <h1>Volume total: 12.300 kg</h1>
                            </CardFooter>
                        </Card>
                        <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-center text-xl">Treino Mais Frequente</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex"><Repeat className="mx-2"/><h1 className="text-base">Peito e Tríceps</h1></div>
                                <p className="w-full mt-6 pl-7">Horário: 18h </p>
                            </CardContent>
                            <CardFooter>
                                <h1>Exercício mais feito: Supino</h1>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                <FormCard />
                <Footer />
            {/*</ProtectedRoute>*/}
        </section>
    )
}