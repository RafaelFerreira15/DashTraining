"use client";

import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { day: "Seg", Peso: 30 },
    { day: "Ter", Peso: 45 },
    { day: "Qua", Peso: 49 },
    { day: "Qui", Peso: 32 },
    { day: "Sex", Peso: 28 },
    { day: "Sab", Peso: 45 },
    { day: "Dom", Peso: 52 },
];


const chartConfig = {
	Peso: {
		label: "Peso",
		color: "#007bff",
	},
} satisfies ChartConfig;

const GraficoTreino = () => {
	return (
		<Card className="m-12 sm:m-auto max-w-xl justify-self-center">
			<CardHeader>
				<CardTitle>Volume de Treino (kg)</CardTitle>
			</CardHeader>
			<CardContent>
                <ResponsiveContainer width="100%" height="250px">
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar
                                dataKey="Peso"
                                fill="#007bff"
                                radius={8}
                            />
                        </BarChart>
                    </ChartContainer>
                </ResponsiveContainer>
			</CardContent>
		</Card>
	);
}

export default GraficoTreino;