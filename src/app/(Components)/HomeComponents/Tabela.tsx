import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const exercises = [
{
    exercise: "Supino Reto",
    muscleGroup: "Peito",
    sets: "3x12",
    weight: "60kg",
    date: "24/02/2025",
},
{
    exercise: "Agachamento Hack",
    muscleGroup: "Pernas",
    sets: "4x10",
    weight: "120kg",
    date: "23/02/2025",
},
{
    exercise: "Puxada na Polia Alta",
    muscleGroup: "Costas",
    sets: "3x10",
    weight: "50kg",
    date: "22/02/2025",
},
{
    exercise: "Rosca Direta",
    muscleGroup: "Bíceps",
    sets: "4x12",
    weight: "25kg",
    date: "21/02/2025",
},
{
    exercise: "Leg Press",
    muscleGroup: "Pernas",
    sets: "5x10",
    weight: "180kg",
    date: "20/02/2025",
},
{
    exercise: "Crucifixo com Halteres",
    muscleGroup: "Peito",
    sets: "3x15",
    weight: "18kg",
    date: "19/02/2025",
},
{
    exercise: "Elevação Lateral",
    muscleGroup: "Ombro",
    sets: "4x12",
    weight: "10kg",
    date: "18/02/2025",
},
{
    exercise: "Cadeira Flexora",
    muscleGroup: "Pernas",
    sets: "3x12",
    weight: "40kg",
    date: "17/02/2025",
},
{
    exercise: "Desenvolvimento com Halteres",
    muscleGroup: "Ombro",
    sets: "4x10",
    weight: "22kg",
    date: "16/02/2025",
},
{
    exercise: "Barra Fixa",
    muscleGroup: "Costas",
    sets: "3x8",
    weight: "Peso Corporal",
    date: "15/02/2025",
},
];

const TabelaHome = () => {
    return (
    <section>
        <div>
            <Card className="w-auto m-12">
                <CardHeader>
                    <CardTitle>Últimos Treinos Registrados</CardTitle>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">Exercícios</TableHead>
                            <TableHead>Grupo Muscular </TableHead>
                            <TableHead>Séries</TableHead>
                            <TableHead>Carga</TableHead>
                            <TableHead className="text-right">Data</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {exercises.map((exercises) => (
                            <TableRow key={exercises.exercise}>
                                <TableCell className="font-medium">{exercises.exercise}</TableCell>
                                <TableCell>{exercises.muscleGroup}</TableCell>
                                <TableCell>{exercises.sets}</TableCell>
                                <TableCell>{exercises.weight}</TableCell>
                                <TableCell className="text-right">{exercises.date}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        
    </section>
    );
}

export default TabelaHome;