/* 
STD DOCTEXT TEMPLATE
---------------------
    Linha 1 - O que o módulo faz
    Linha 2 - Entradas e saídas esperadas
    Linha 3 - Exemplo de utilização

Módulo HelloWorld
------------------
    - 1. Módulo que gerencia e retorna uma mensagem de boas vindas
    - 2. IN(
            constructor message[string], 
            setMessage() newMessage[string]
         ), 
         OU(
            getMessage()[string]
         )
    - 3. let hello = new HelloWorld("Bem vindo")
            console.log(hello.getMessage())
            >> "Bem vindo"
*/

export default class HelloWorld{
    private message: string;
    
    constructor(message: string){
        this.message = message;
    }
    
    public setMessage(newMessage: string){
        this.message = newMessage;
    }

    public getMessage(){
        return this.message;
    }
}