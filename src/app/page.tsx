import { Separator } from "@/components/ui/separator";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 w-full h-full flex items-center justify-center">

      <Card className="flex items-center justify-center bg-zinc-800 hidden sm:flex border-0">
        <CardHeader>
          <CardTitle className="text-4xl text-center text-white p-4 m-8">
            <p className="text-5xl">Login</p>
          </CardTitle>
          <CardDescription className="text-sm text-center text-gray-100/50 p-6 m-8">
            <p className=" ml-2">Enter to your future.</p>
            </CardDescription>
        </CardHeader>
        

        <Separator orientation="vertical" className="h-56"/>

        <CardContent className=" flex-col items-center justify-center">
          <Input placeholder="Nome"
            className="w-11/12 m-8 border-gray-700 text-white"
            ></Input>

          <Input placeholder="Email"
            className="w-11/12 m-8 border-gray-700 text-white"
            ></Input>

          <div className="ml-8 flex items-center justify-center self-center">
            <Link href="/Home"
              className="bg-gray-950/80 rounded-lg w-10/12 h-10 p-4 flex items-center justify-center"
          
            >

            <p className="text-lg text-center text-white ">Entrar</p>
            
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card 
        className="bg-zinc-800 w-10/12 p-6 m-10 border-0  sm:hidden"
      >
        <CardTitle
          className="text-5xl text-center text-white p-4"
        >Login</CardTitle>

        <Input placeholder="Nome"
          className="w-11/12 m-4 border-gray-700"
          ></Input>

        <Input placeholder="Email"
          className="w-11/12 m-4 border-gray-700"
          ></Input>

        <div className=" flex items-center justify-center">
          <Link href="/Home"
            className="bg-gray-900/80 text-lg text-center text-white  rounded-lg w-9/12 h-10 m-4 flex items-center justify-center"
        
          >

          <p>Entrar</p>
          
          </Link>
        </div>

      </Card>
      
    
    </main>
  );
}
