"use client";

import { LabelList, Pie, PieChart, Cell } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

// Definindo os dados para o gráfico
const chartData = [
	{ group: "chest", exercises: 30, fill: "#FF6B6B" }, // Vermelho claro
	{ group: "back", exercises: 20, fill: "#6B8BFF" }, // Azul claro
	{ group: "legs", exercises: 25, fill: "#6BFF83" }, // Verde claro
	{ group: "biceps", exercises: 10, fill: "#FFB86B" }, // Laranja claro
	{ group: "triceps", exercises: 10, fill: "#FFAA6B" }, // Laranja mais escuro
	{ group: "shoulders", exercises: 5, fill: "#FF6BDF" }, // Rosa claro
];

// Configuração do gráfico
const chartConfig = {
	exercises: {
		label: "Treinos",
	},
	chest: {
		label: "Peito",
		color: "#FF6B6B", // Vermelho claro
	},
	back: {
		label: "Costas",
		color: "#6B8BFF", // Azul claro
	},
	legs: {
		label: "Pernas",
		color: "#6BFF83", // Verde claro
	},
	biceps: {
		label: "Bíceps",
		color: "#FFB86B", // Laranja claro
	},
	triceps: {
		label: "Tríceps",
		color: "#FFAA6B", // Laranja mais escuro
	},
	shoulders: {
		label: "Ombros",
		color: "#FF6BDF", // Rosa claro
	},
} satisfies ChartConfig;

const Pizza = () => {
	return (
		<Card className="flex flex-col m-12">
			<CardHeader className="items-center pb-0">
				<CardTitle className="text-xl">
					Grupos Musculares Mais Treinados
				</CardTitle>
				<CardDescription>Janeiro - Fevereiro 2025</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
				>
					<PieChart>
						<ChartTooltip
							content={
								<ChartTooltipContent
									nameKey="exercises"
									hideLabel
								/>
							}
						/>
						<Pie data={chartData} dataKey="exercises">
							<LabelList
								dataKey="group"
								className="fill-background"
								stroke="none"
								fontSize={12}
								formatter={(value: keyof typeof chartConfig) =>
									chartConfig[value]?.label
								}
							/>
							{chartData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.fill} // Usa a cor definida no fill de chartData
								/>
							))}
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
                    Tendência de alta de 5,2% este mês
				</div>
				<div className="leading-none text-muted-foreground">
                    Mostrando o total de exercícios dos últimos 2 meses
				</div>
			</CardFooter>
		</Card>
	);
}

export default Pizza;