"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { CartesianGrid, Line, LineChart, XAxis, ResponsiveContainer, Tooltip  } from "recharts"
import {
    ChartConfig,
    ChartContainer,
} from "@/components/ui/chart"

export default function Chart(){

    const chartData = [
        { month: "Janeiro", Peso: 152 },
        { month: "Fevereiro", Peso: 289 },
        { month: "Março", Peso: 341 },
        { month: "Abril", Peso: 198 },
        { month: "Maio", Peso: 276 },
        { month: "Junho", Peso: 312 },
        { month: "Julho", Peso: 254 },
        { month: "Agosto", Peso: 367 },
        { month: "Setembro", Peso: 190 },
        { month: "Outubro", Peso: 223 },
        { month: "Novembro", Peso: 305 },
        { month: "Dezembro", Peso: 412 },
    ]
    const chartConfig = {
        Peso: {
        label: "Peso",
        color: "#007bff", // Azul, mas você pode escolher outra cor
        },
    } satisfies ChartConfig

    return(
        <Card className="w-auto m-12">
            <CardHeader>
                <CardTitle>Evolução de Carga Levantada</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height="250px">
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                        left: 12,
                        right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Tooltip />
                        <Line
                        dataKey="Peso"
                        type="linear"
                        stroke="#007bff" // Azul, mas pode ser qualquer cor
                        strokeWidth={2}
                        dot={false}
                        />
                    </LineChart>
                </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}