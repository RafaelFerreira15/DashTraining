"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
	Card,
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useAtom } from 'jotai';
import { userName, userEmail, userState, sessaoUser } from "@/app/(store)/atoms";

export default function Auth() {
	const [nome, setNome] = useAtom(userName);
	const [email, setEmail] = useAtom(userEmail);
	const [state, setState] = useAtom(userState);
	const [, setSessaoUser] = useAtom(sessaoUser)
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Verificar se os campos estão preenchidos
		if (nome && email) {
			console.log("Nome:", nome);
			console.log("Email:", email);
			console.log(state);
			setSessaoUser({ nome, email });

			// Redirecionar para a página Home
			router.push("/Home");
		} else {
			alert("Preencha todos os campos!");
		}
	};

	return (
		<main className="bg-neutral-900 w-full h-full flex items-center justify-center">
			<div className="flex flex-col hidden sm:flex w-10/12">
				<Tabs defaultValue="Registrar" className="">
					<TabsList className="grid w-full grid-cols-2 bg-neutral-800">
						<TabsTrigger
							value="Registrar"
							className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white"
						>
							Registrar
						</TabsTrigger>
						<TabsTrigger
							value="Login"
							className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white"
						>
							Login
						</TabsTrigger>
					</TabsList>
					<TabsContent value="Registrar">
						<Card className="flex items-center justify-center bg-zinc-800 border-0">
							<CardHeader className="flex items-center justify-center">
								<CardTitle className="text-4xl text-center text-white m-4">
									<p className="text-4xl xl:text-6xl w-auto">
										Registre-se
									</p>
								</CardTitle>
								<CardDescription className="text-sm text-center text-neutral-100/50 p-6 m-8">
									<p className=" ml-2">
										Confirm your future.
									</p>
								</CardDescription>
							</CardHeader>
							
							<Separator
								orientation="vertical"
								className="h-48"
							/>

							<CardContent className=" flex-col items-center justify-center">
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<Input
										placeholder="Nome"
										type="text"
										value={nome}
										onChange={(e) =>
											setNome(e.target.value)
										}
										className="w-11/12 m-8 border-neutral-700 text-white"
									/>
									{/* Logado ou Registro*/}
									<Input
										placeholder="Email"
										type="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											setState("Registro!");
										}}
										className="w-11/12 m-8 border-neutral-700 text-white"
									/>

									<div className="ml-8 flex items-center justify-center self-center">
										<Button
											type="submit"
											className="bg-neutral-950/80 rounded-lg w-10/12 h-10 p-4"
										>
											<p className="text-lg text-center text-white">
												Registrar-se
											</p>
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="Login">
						<Card className="flex items-center justify-center bg-zinc-800 hidden sm:flex border-0">
							<CardHeader>
								<CardTitle className="text-4xl text-center text-white ">
									<p className="text-5xl">Login</p>
								</CardTitle>
								<CardDescription className="text-sm text-center text-neutral-100/50 p-6 m-8">
									<p className=" ml-2">
										Enter to your future.
									</p>
								</CardDescription>
							</CardHeader>

							<Separator
								orientation="vertical"
								className="h-48"
							/>

							<CardContent className=" flex-col items-center justify-center">
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									{/* Logado ou Registro*/}
									<Input
										placeholder="Nome"
										type="text"
										value={nome}
										onChange={(e) => {
											setNome(e.target.value);
											setState("Logado!");
										}}
										className="w-11/12 m-8 border-neutral-700 text-white"
									/>

									<Input
										placeholder="Email"
										type="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className="w-11/12 m-8 border-neutral-700 text-white"
									/>

									<div className="ml-8 flex items-center justify-center self-center">
										<Button
											type="submit"
											className="bg-neutral-950/80 rounded-lg w-10/12 h-10 p-4"
										>
											<p className="text-lg text-center text-white">
												Logar
											</p>
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>

			<div className="flex flex-col sm:hidden w-10/12">
				<Tabs defaultValue="Registrar">
					<TabsList className="grid w-full grid-cols-2 bg-neutral-800">
						<TabsTrigger
							value="Registrar"
							className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white"
						>
							Registrar
						</TabsTrigger>
						<TabsTrigger
							value="Login"
							className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white"
						>
							Login
						</TabsTrigger>
					</TabsList>
					<TabsContent value="Registrar">
						<Card className="bg-zinc-800 w-auto border-0 mt-4  sm:hidden">
							<CardTitle className="text-5xl text-center text-white p-4">
								Registrar-se
							</CardTitle>

							<form onSubmit={handleSubmit} className="space-y-6">
								<Input
									placeholder="Nome"
									type="text"
									value={nome}
									onChange={(e) => setNome(e.target.value)}
									className="w-10/12 m-8 border-neutral-700 text-white"
								/>

								<Input
									placeholder="Email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-10/12 m-8 border-neutral-700 text-white"
								/>

								<div className=" flex items-center justify-center self-center">
									<Button
										type="submit"
										className="bg-neutral-950/80 rounded-lg w-11/12 h-10 mb-4"
									>
										<p className="text-lg text-center text-white">
											Registrar-se
										</p>
									</Button>
								</div>
							</form>
						</Card>
					</TabsContent>
					<TabsContent value="Login">
						<Card className="bg-zinc-800 w-auto mt-4 border-0  sm:hidden">
							<CardTitle className="text-5xl text-center text-white p-4">
								Login
							</CardTitle>

							<form onSubmit={handleSubmit} className="space-y-6">
								<Input
									placeholder="Nome"
									type="text"
									value={nome}
									onChange={(e) => setNome(e.target.value)}
									className="w-10/12 m-8 border-neutral-700 text-white"
								/>

								<Input
									placeholder="Email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-10/12 m-8 border-neutral-700 text-white"
								/>

								<div className=" flex items-center justify-center self-center">
									<Button
										type="submit"
										className="bg-neutral-950/80 rounded-lg w-11/12 h-10 mb-4"
									>
										<p className="text-lg text-center text-white">
											Logar
										</p>
									</Button>
								</div>
							</form>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
