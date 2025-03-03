"use client"

import { PersonStanding, Clock, Repeat } from "lucide-react"
import { useState } from "react";
import Footer from "@/app/(Components)/Footer";
import Navbar from "@/app/(Components)/Navbar";
import { Slider } from "@/components/ui/slider";
import Cartao from "../../(Components)/EstatComponents/Cartao";
import Pizza from "../../(Components)/EstatComponents/Pizza";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Estastitica() {
    const [sliderValue, setSliderValue] = useState(1);

    function FunSlider(num:number) {
        switch (num) {
            case 1:
                return <Cartao title={`Treino Peitoral - ${num}/02/2025`} 
                text="Exercícios do Grupo Muscular do Peitoral foram exercidos"/>;

            case 2:
                return <Cartao title={`Treino Peitoral - ${num}/02/2025`} 
                text="Exercícios do Grupo Muscular do Ombro foram exercidos"/>;

            case 3:
                return <Cartao title={`Treino Peitoral - ${num}/02/2025`} 
                text="Exercícios do Grupo Muscular do Braço foram exercidos"/>;

            default:
                return <Cartao title={`Treino Peitoral - ${num}/02/2025`} 
                text="Exercícios do Grupo Muscular das Pernas foram exercidos"/>;

        }
    }

    return (
        <section>
            <Navbar />

            <div className=" flex flex-col items-center justify-center w-full">
                <h1 className="text-3xl md:text5xl m-12">Estatísticas de Treino 📈</h1>
                <p className="mx-12">Acompanhe sua evolução e descubra padrões nos seus treinos.</p>
            </div>

            <div className="flex flex-col items-center justify-center m-8 w-11/12">
                <p className="text-xl m-8 text-center ">Arraste para acompanhar os últimos treinos!</p>
                <div className="flex items-center justify-between w-full">
                    <p>01/02/25</p>
                    <p>30/02/25</p>
                </div>
                <Slider
                    defaultValue={[1]}
                    min={1}
                    max={30}
                    step={1}
                    onValueChange={(value) => setSliderValue(value[0])} // Atualiza o estado com o valor do slider
                />

                <div className="mt-6">
                    {FunSlider(sliderValue)} {/* Renderiza o conteúdo com base no valor do slider */}
                </div>
            </div>

            <Pizza />


            <div className=" grid grid-cols-1 md:grid-cols-3 mt-4">
                <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center text-xl">Total de Carga Levantada</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex"><PersonStanding  className="mx-2"/> <h1 className="text-base">12.300 kg</h1></div>
                    </CardContent>
                    <CardFooter>
                        <h1>Nos últimos 30 dias</h1>
                        
                    </CardFooter>
                </Card>
                <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center text-xl">Tempo Total de Treino</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex"><Clock className="mx-2"/><h1 className="text-base">18 horas</h1></div>
                        <p className="w-full mt-6 pl-2">Horário: 18h </p>
                    </CardContent>
                    <CardFooter>
                        <h1>Nos últimos 30 dias</h1>
                    </CardFooter>
                </Card>
                <Card className=" flex flex-col m-4 mx-12 md:mx-4 w-auto items-center ">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-center text-xl">Exercício Mais Frequente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex"><Repeat className="mx-2"/> <h1 className="text-base">Supino Reto</h1></div>
                    </CardContent>
                    <CardFooter>
                        <h1>Feito 8 vezes no mês</h1>
                    </CardFooter>
                </Card>
            </div>

            <Footer />
        </section>
    );
}
