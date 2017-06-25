import { Cliente, ICliente } from 'cliente'

let novoCliente = new Cliente("lucas", "l roselli", 22);

//mostra o valor do cliente lucas

let body  = document.getElementById('content');

body.innerText = novoCliente.NomeCompleto();

//document.write(novoCliente.NomeCompleto());