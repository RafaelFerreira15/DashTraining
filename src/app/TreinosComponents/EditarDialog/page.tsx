import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function EditarDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Editar</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Editar Treino</DialogTitle>
					<DialogDescription>
                        Faça alterações em seu treino aqui. Clique em salvar quando
                        você terminou.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Exercício
						</Label>
						<Input
							id="name"
							placeholder="Ex: LegPress"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="muscles" className="text-right">
							Grupo Muscular
						</Label>
						<Input
							id="muscles"
                            placeholder="Ex: Peitoral"
							className="col-span-3"
						/>
					</div>
                    <div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="sets" className="text-right">
							Séries
						</Label>
						<Input
							id="sets"
							placeholder="Ex: 3x8"
							className="col-span-3"
						/>
					</div>
                    <div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="reps" className="text-right">
							Repetições
						</Label>
						<Input
							id="reps"
							placeholder="Ex: 8-12"
							className="col-span-3"
						/>
					</div>
                    <div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="weight" className="text-right">
							Carga(kg)
						</Label>
						<Input
							id="weight"
							placeholder="Ex: 75kg"
							className="col-span-3"
						/>
					</div>
                    <div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="date" className="text-right">
							Data
						</Label>
						<Input
							id="date"
							placeholder="Ex: 22/02/25"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Salvar Alterações</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
