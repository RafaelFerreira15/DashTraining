import { Separator } from "@/components/ui/separator";
import {
	Card,
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
	return (
		<main className="bg-neutral-900 w-full h-full flex items-center justify-center">
      <div className="flex flex-col hidden sm:flex w-10/12">
        <Tabs defaultValue="Registrar" className="">
          <TabsList className="grid w-full grid-cols-2 bg-neutral-800">
            <TabsTrigger value="Registrar" className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white">Registrar</TabsTrigger>
            <TabsTrigger value="Login" className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="Registrar">
            <Card className="flex items-center justify-center bg-zinc-800 border-0">
              <CardHeader className="flex items-center justify-center">
                <CardTitle className="text-4xl text-center text-white m-4">
                  <p className="text-4xl xl:text-6xl w-auto">Registre-se</p>
                </CardTitle>
                <CardDescription className="text-sm text-center text-neutral-100/50 p-6 m-8">
                  <p className=" ml-2">Confirm your future.</p>
                </CardDescription>
              </CardHeader>

              <Separator orientation="vertical" className="h-48" />

              <CardContent className=" flex-col items-center justify-center">
                <Input
                  placeholder="Nome"
                  className="w-11/12 m-8 border-neutral-700 text-white"
                ></Input>

                <Input
                  placeholder="Email"
                  className="w-11/12 m-8 border-neutral-700 text-white"
                ></Input>

                <div className="ml-8 flex items-center justify-center self-center">
                  <Link
                    href="/Home"
                    className="bg-neutral-950/80 rounded-lg w-10/12 h-10 p-4 flex items-center justify-center"
                  >
                    <p className="text-lg text-center text-white ">
                      Registrar-se
                    </p>
                  </Link>
                </div>
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
                  <p className=" ml-2">Enter to your future.</p>
                </CardDescription>
              </CardHeader>

              <Separator orientation="vertical" className="h-48" />

              <CardContent className=" flex-col items-center justify-center">
                <Input
                  placeholder="Nome"
                  className="w-11/12 m-8 border-neutral-700 text-white"
                ></Input>

                <Input
                  placeholder="Email"
                  className="w-11/12 m-8 border-neutral-700 text-white"
                ></Input>

                <div className="ml-8 flex items-center justify-center self-center">
                  <Link
                    href="/Home"
                    className="bg-neutral-950/80 rounded-lg w-10/12 h-10 p-4 flex items-center justify-center"
                  >
                    <p className="text-lg text-center text-white ">
                      Entrar
                    </p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
			

      <div className="flex flex-col sm:hidden w-10/12">
        <Tabs defaultValue="Registrar" >
          <TabsList className="grid w-full grid-cols-2 bg-neutral-800">
            <TabsTrigger value="Registrar" className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white">Registrar</TabsTrigger>
            <TabsTrigger value="Login" className="bg-neutral-800 text-white data-[state=active]:bg-neutral-950 data-[state=active]:text-white">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="Registrar">
            <Card className="bg-zinc-800 w-auto border-0 mt-4  sm:hidden">
              <CardTitle className="text-5xl text-center text-white p-4">
                Registrar-se
              </CardTitle>

              <Input
                placeholder="Nome"
                className="w-11/12 m-4 border-neutral-700"
              ></Input>

              <Input
                placeholder="Email"
                className="w-11/12 m-4 border-neutral-700"
              ></Input>

              <div className=" flex items-center justify-center">
                <Link
                  href="/Home"
                  className="bg-neutral-900/80 text-lg text-center text-white  rounded-lg w-9/12 h-10 m-4 flex items-center justify-center"
                >
                  <p>Registrar-se</p>
                </Link>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="Login">
            <Card className="bg-zinc-800 w-auto mt-4 border-0  sm:hidden">
              <CardTitle className="text-5xl text-center text-white p-4">
                Login
              </CardTitle>

              <Input
                placeholder="Nome"
                className="w-11/12 m-4 border-neutral-700"
              ></Input>

              <Input
                placeholder="Email"
                className="w-11/12 m-4 border-neutral-700"
              ></Input>

              <div className=" flex items-center justify-center">
                <Link
                  href="/Home"
                  className="bg-neutral-900/80 text-lg text-center text-white  rounded-lg w-9/12 h-10 m-4 flex items-center justify-center"
                >
                  <p>Entrar</p>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
			
		</main>
	);
}
