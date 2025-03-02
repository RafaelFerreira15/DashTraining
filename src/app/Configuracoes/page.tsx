import { Input } from "@/components/ui/input";
import Footer from "../footer/page";
import Navbar from "../Navbar/page";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

{/*1. Cabeçalho da Página:

    Card: Utilize um card para agrupar as informações gerais da página, como o título "Configurações" ou "Personalizar o App".
    CardHeader: Para o título da página, "Configurações" ou algo semelhante.
    CardDescription: Descrição breve de como a página ajuda o usuário a personalizar a aplicação.

2. Perfil do Usuário:

    Card: Um card específico para o perfil do usuário.
    CardTitle: Exiba "Perfil do Usuário".
    CardContent: Dentro deste card, você pode usar componentes como Input para nome e e-mail.
    Avatar: Utilize um componente de avatar para exibir ou permitir a alteração da foto de perfil.
    Button: Para ação como "Alterar Foto" ou "Salvar Alterações".
    Input: Para permitir que o usuário altere o nome e o e-mail.
    Button: Para ações como "Alterar Senha", possivelmente em uma nova janela/modal.

3. Preferências:

    Card: Um card separado para as preferências.
    CardTitle: "Preferências"
    CardContent: Dentro deste card, você usará:
        Toggle (Switch) para permitir a escolha entre o tema claro ou escuro.
        Checkbox: Para a opção de ativar ou desativar notificações.
        Button: Caso você queira adicionar ações extras como "Salvar Preferências".

4. Gerenciar Treinos:

    Card: Um card para as opções de treino.
    CardTitle: "Gerenciar Treinos"
    CardContent: Para esta parte, você pode usar:
        Button para "Importar Rotina" e "Exportar Rotina", que abrirão um diálogo para escolher o arquivo.
        Input ou File Input para importar ou exportar arquivos JSON ou CSV.
        Button para "Resetar Progresso", onde o botão pode executar a ação de reset de dados.

5. Rodapé ou Ações Finais:

    Button: Para salvar todas as configurações feitas.
    Button: Para cancelar as alterações.

Estrutura geral:

    Grid: Use um layout de grid ou flexbox para organizar as seções de forma ordenada (ex: 2 ou 3 colunas).
    Modal/Dialog: Caso precise de uma janela para confirmações ou configurações adicionais (ex: alterar senha ou resetar progresso).
    
*/}

export default function Configuracoes() {
    return(
        <section>
            <Navbar />
            
            <div className=" flex flex-col items-center justify-center w-full">
                <h1 className="text-4xl sm:text-5xl md:text-6xl m-4">Configurações do Usuário</h1>
                <p className="mx-4">Habilite funções de sua preferência ou Edite dados relevantes.</p>
            </div>

            <div className="w-10/12 m-12 md:hidden">
                <Card>
                    <CardHeader className=" flex flex-col items-center justify-center w-full">
                        <CardTitle className=" text-4xl ">Perfil do Usuário</CardTitle>
                        <CardDescription className=" text-base ">Atualize seus dados</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className=" flex items-center justify-center gap-4 mb-4">
                            <p className=" flex items-end">Nome</p>
                            <Input className="w-56"/>
                            
                        </div>
                        <div className=" flex items-center justify-center gap-4 mb-2">
                            <p className=" flex items-end">Email</p>
                            <Input className="w-56"/>
                        </div>
                    </CardContent>
                    <CardFooter className=" flex items-end justify-end ">
                        <Button>Salvar alterações</Button>
                    </CardFooter>
                </Card>

            </div>

            <div className=" hidden md:flex w-full m-8">
                <Card className="w-11/12 flex ">
                    <CardHeader className=" flex flex-col items-center justify-center w-full">
                        <CardTitle className=" text-xl md:text-4xl">Perfil do Usuário</CardTitle>
                        <CardDescription>Atualize seus dados</CardDescription>
                    </CardHeader>

                    <Separator orientation="vertical" className="h-48 mt-4" />

                    <CardContent className="ml-8 pr-12 lg:ml-16 lg:pr-24 xl:ml-32 xl:pr-40">
                    
                        <div className=" flex items-center justify-center gap-4  mt-12 mb-4">
                            <p className=" flex items-end">Nome</p>
                            <Input className="w-56"/>
                            
                        </div>
                        <div className=" flex items-center justify-center gap-4 mt-6 mb-4">
                            <p className=" flex items-end">Email</p>
                            <Input className="w-56"/>
                        </div>
                        <div className=" flex items-end justify-end mt-6">
                            <Button>Salvar alterações</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <Footer />
        </section>
    )
}