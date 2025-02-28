import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertaDialog() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline" className="bg-red-500 text-white hover:bg-red-700, ">Deletar</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
                        Você tem certeza absoluta?
					</AlertDialogTitle>
					<AlertDialogDescription>
                        Esta ação não pode ser desfeita. Isto irá permanentemente
						excluir o seu treino de nosso banco de dados.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction className="bg-red-700 hover:bg-red-800">Continuar</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
