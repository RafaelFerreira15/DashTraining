"use client";

import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { sessaoUser } from "../(store)/atoms";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	// Pegamos o estado do usuário no Jotai
	const [user] = useAtom(sessaoUser);

	// Pegamos a função de navegação do Next.js
	const router = useRouter();

	// Verificamos se o usuário está logado
	useEffect(() => {
		if (!user) {
			// Se não estiver logado, redireciona para a página de login
			router.push("/Auth");
		}
	}, [user, router]);

	// Se o usuário estiver logado, mostra a página
	if (user) {
		return <>{children}</>;
	}

	// Se não estiver logado, não mostra nada (evita piscar a página)
	return null;
};

export default ProtectedRoute;
