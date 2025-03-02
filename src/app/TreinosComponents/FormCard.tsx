// components/WorkoutCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const WorkoutCard = () => {
	return (
		<div className="flex items-center justify-center m-8 p-4">
			<Card className="w-full max-w-2xl md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg">
				<CardHeader>
					<CardTitle className="text-center text-xl md:text-2xl">
						Adicionar treino
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="exercise">Exercício</Label>
							<Input
								id="exercise"
								placeholder="Nome do exercício"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="muscle-group">Grupo Muscular</Label>
							<Input
								id="muscle-group"
								placeholder="Ex: Peito, Costas, Pernas"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="sets">Séries</Label>
							<Input
								id="sets"
								type="number"
								placeholder="Quantidade de séries"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="weight">Carga (kg)</Label>
							<Input
								id="weight"
								type="number"
								placeholder="Peso em kg"
							/>
						</div>

						<Button type="submit" className="w-full">
							Adicionar Treino
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default WorkoutCard;
