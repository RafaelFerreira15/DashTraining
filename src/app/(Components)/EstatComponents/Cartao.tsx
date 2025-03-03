// src/components/Cartao.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface TrainingCardProps {
    title: string;
    text: string;
}

const Cartao = ({ title, text }: TrainingCardProps) => {
    return (
        <Card className="max-w-md shadow-lg">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{text}</p>
            </CardContent>
        </Card>
    );
}

export default Cartao;
