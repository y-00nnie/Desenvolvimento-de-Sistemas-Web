# Atividade em Aula - 11/08/2026

Construir o arquivo CSS a partir do arquivo html programaticamente.

### O que eu entendi?

- Tenho que utilizar o método querySelector() junto ao getAttribute() para obter os estilos de todas as tags de index.html.
- Guardar os estilos em um arquivo CSS.

### Comando completo

` document.querySelector().getAttribute("style"); `

O problema desse comando é que ele retorna os estilos de uma tag por vez. A solução que encontrei foi utilizar o forEach pra percorrer todas as tags e retornar em cada linha do console os atributos de estilo correspondentes.

` document.querySelectorAll('[style]').forEach(elemento => elemento.getAttribute("style")); `

Utilizei o querySelectorAll para acessar todos os elementos com atributo style.

### O que eu não entendi?

- Se preciso salvar em um arquivo CSS utilizando o javascript pra formatar ou se preciso escrever diretamente.
- Como diferencio as divs, já que não são todas que possuem um id.
