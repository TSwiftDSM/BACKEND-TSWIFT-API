import HelloWorld from "../services/tempModule";

const hello = new HelloWorld("Mensagem Teste");

// Cria um teste
test("[HelloWorld] getMessage()", () => {
  // Compara o recebido com o esperado
  expect(hello.getMessage()).toBe("Mensagem Teste");
});

test("[HelloWorld] setMessage()", () => {
  hello.setMessage("Outra mensagem");
  expect(hello.getMessage()).toBe("Outra mensagem");
});
