const botaoCadastrar = document.getElementById("cadastrar");
const botaoLogin = document.getElementById("login");
const botaoVoltar = document.getElementById("botao-voltar");
const botaoProximo = document.getElementById("botao-proximo");
const botao_Confirmar_Cadastro = document.getElementById("confirmar_cadastrar");
const ocultarContainer_Botao_Voltar = document.getElementById("voltar-cadastro");
const ocultarContainer_Botao_Proximo = document.getElementById("proximo-cadastro");

const botaoGoogleCadastro = document.getElementById("botao-google-cadastrar");

const barraEtapas = document.getElementById("etapas");
const itensEtapas = document.querySelectorAll(".etapa");

const statusNomeUsuario = document.getElementById("campo-nome");
const statusSobrenome = document.getElementById("campo-sobrenome");
const statusEmail = document.getElementById("campo-email-cadastro");
const statusConfirmarEmail = document.getElementById("campo-confirmar-email");
const statusSenha = document.getElementById("campo-senha-cadastro");
const statusConfirmarSenha = document.getElementById("campo-confirmar-senha");

//Login
const foco_Campo_Email_Login = document.getElementById("email");

//Cadastro
const foco_Campo_Nome = document.getElementById("nome");
const foco_Campo_Email = document.getElementById("email-cadastro");
const foco_Campo_CodigoConfirmacao = document.querySelector(".codigo-input");
const foco_Campo_Senha = document.getElementById("senha-cadastro");

const visibilidade_Ou_Cadastrar = document.getElementById("separador-cadastro");

const labelNome = document.querySelector('#formulario-cadastro label[for="nome"]');
const labelSobrenome = document.querySelector('#formulario-cadastro label[for="sobrenome"]');
const labelEmail = document.querySelector('#formulario-cadastro label[for="email-cadastro"]');
const labelSenha = document.querySelector('#formulario-cadastro label[for="senha-cadastro"]');
const labelConfirmarSenha = document.querySelector('#formulario-cadastro label[for="confirmar-senha"]');

const camposCodigo = document.querySelectorAll(".codigo-input");

// ALTERADO: campos e olhos de senha, um por um (como estava antes)
const campoSenhaLogin = document.getElementById("senha");
const olhoAbertoLogin = document.getElementById("olho-aberto-login");
const olhoFechadoLogin = document.getElementById("olho-fechado-login");

const campoSenhaCadastro = document.getElementById("senha-cadastro");
const olhoAbertoSenhaCadastro = document.getElementById("olho-aberto-senha-cadastro");
const olhoFechadoSenhaCadastro = document.getElementById("olho-fechado-senha-cadastro");

const campoConfirmarSenha = document.getElementById("confirmar-senha");
const olhoAbertoConfirmarSenha = document.getElementById("olho-aberto-confirmar-senha");
const olhoFechadoConfirmarSenha = document.getElementById("olho-fechado-confirmar-senha");

let visibilidadeSenha = false;

let abaAtualCadastro = [
  ["Nome de usuário", 1],
  ["Email", 2],
  ["Confirmação", 3],
  ["Senha", 4],
];

let etapaAtual = 0;
let ultimaEtapa = abaAtualCadastro.length - 1;

barraEtapas.hidden = true;
foco_Campo_Email_Login.focus();

// ALTERADO: função com um bloco por campo, como estava antes
function alternarVisibilidadeSenha() {
  visibilidadeSenha = !visibilidadeSenha;

  if (visibilidadeSenha) {
    campoSenhaLogin.type = "text";
    olhoAbertoLogin.hidden = true;
    olhoFechadoLogin.hidden = false;
  } else {
    campoSenhaLogin.type = "password";
    olhoAbertoLogin.hidden = false;
    olhoFechadoLogin.hidden = true;
  }

  if (visibilidadeSenha) {
    campoSenhaCadastro.type = "text";
    olhoAbertoSenhaCadastro.hidden = true;
    olhoFechadoSenhaCadastro.hidden = false;
  } else {
    campoSenhaCadastro.type = "password";
    olhoAbertoSenhaCadastro.hidden = false;
    olhoFechadoSenhaCadastro.hidden = true;
  }

  if (visibilidadeSenha) {
    campoConfirmarSenha.type = "text";
    olhoAbertoConfirmarSenha.hidden = true;
    olhoFechadoConfirmarSenha.hidden = false;
  } else {
    campoConfirmarSenha.type = "password";
    olhoAbertoConfirmarSenha.hidden = false;
    olhoFechadoConfirmarSenha.hidden = true;
  }
}

function atualizarBarraEtapas() {
  itensEtapas.forEach((item, indice) => {
    item.classList.remove("concluida", "atual");

    if (indice < etapaAtual) {
      item.classList.add("concluida");
    } else if (indice === etapaAtual) {
      item.classList.add("atual");
    }
  });
}

function atualizarCadastro() {
  atualizarBarraEtapas();

  if (etapaAtual === 0) {
    botaoVoltar.hidden = true;
    botaoProximo.hidden = false; 
    botao_Confirmar_Cadastro.hidden = true;
    ocultarContainer_Botao_Voltar.hidden = true;
    ocultarContainer_Botao_Proximo.hidden = false;
    visibilidade_Ou_Cadastrar.hidden = false;
    botaoGoogleCadastro.hidden = false;
  } else if (etapaAtual === 1 || etapaAtual === 2) {
    botaoVoltar.hidden = false;
    botaoProximo.hidden = false;
    botao_Confirmar_Cadastro.hidden = true;
    ocultarContainer_Botao_Voltar.hidden = false;
    ocultarContainer_Botao_Proximo.hidden = false;
    visibilidade_Ou_Cadastrar.hidden = true;
    botaoGoogleCadastro.hidden = true;
  } else {
    botaoVoltar.hidden = false;
    botaoProximo.hidden = true;
    botao_Confirmar_Cadastro.hidden = false;
    ocultarContainer_Botao_Voltar.hidden = false;
    ocultarContainer_Botao_Proximo.hidden = true;
    visibilidade_Ou_Cadastrar.hidden = true;
    botaoGoogleCadastro.hidden = true;
  }

  if (etapaAtual === 0) {
    labelNome.hidden = false;
    labelSobrenome.hidden = false;
    labelEmail.hidden = true;
    labelSenha.hidden = true;
    labelConfirmarSenha.hidden = true;

    statusNomeUsuario.hidden = false;
    statusSobrenome.hidden = false;
    statusEmail.hidden = true;
    statusConfirmarEmail.hidden = true;
    statusSenha.hidden = true;
    statusConfirmarSenha.hidden = true;
  } else if (etapaAtual === 1) {
    labelNome.hidden = true;
    labelSobrenome.hidden = true;
    labelEmail.hidden = false;
    labelSenha.hidden = true;
    labelConfirmarSenha.hidden = true;

    statusNomeUsuario.hidden = true;
    statusSobrenome.hidden = true;
    statusEmail.hidden = false;
    statusConfirmarEmail.hidden = true;
    statusSenha.hidden = true;
    statusConfirmarSenha.hidden = true;

    foco_Campo_Email.focus();
  } else if (etapaAtual === 2) {
    labelNome.hidden = true;
    labelSobrenome.hidden = true;
    labelEmail.hidden = true;
    labelSenha.hidden = true;
    labelConfirmarSenha.hidden = true;

    statusNomeUsuario.hidden = true;
    statusSobrenome.hidden = true;
    statusEmail.hidden = true;
    statusConfirmarEmail.hidden = false;
    statusSenha.hidden = true;
    statusConfirmarSenha.hidden = true;

    foco_Campo_CodigoConfirmacao.focus();
  } else {
    labelNome.hidden = true;
    labelSobrenome.hidden = true;
    labelEmail.hidden = true;
    labelSenha.hidden = false;
    labelConfirmarSenha.hidden = false;

    statusNomeUsuario.hidden = true;
    statusSobrenome.hidden = true;
    statusEmail.hidden = true;
    statusConfirmarEmail.hidden = true;
    statusSenha.hidden = false;
    statusConfirmarSenha.hidden = false;

    foco_Campo_Senha.focus();
  }
}

function proximaEtapa() {
  if (etapaAtual < ultimaEtapa) {
    etapaAtual = etapaAtual + 1;
  }
  atualizarCadastro();
}

function etapaAnterior() {
  if (etapaAtual > 0) {
    etapaAtual = etapaAtual - 1;
  }
  atualizarCadastro();
}

function mostrarFormularioLogin() {
  document.getElementById("formulario-cadastro").hidden = true;
  document.getElementById("formulario-login").hidden = false;
  document.getElementById("cadastrar").classList.remove("aba-ativa");
  document.getElementById("login").classList.add("aba-ativa");
  barraEtapas.hidden = true;
  document.title = "Fabri3D - Login";

  foco_Campo_Email_Login.focus();
}

function mostrarFormularioCadastro() {
  document.getElementById("formulario-cadastro").hidden = false;
  document.getElementById("formulario-login").hidden = true;
  document.getElementById("login").classList.remove("aba-ativa");
  document.getElementById("cadastrar").classList.add("aba-ativa");
  barraEtapas.hidden = false;
  document.title = "Fabri3D - Cadastro";

  foco_Campo_Nome.focus();
}

botaoLogin.addEventListener("click", mostrarFormularioLogin);
botaoCadastrar.addEventListener("click", mostrarFormularioCadastro);
botaoProximo.addEventListener("click", proximaEtapa);
botaoVoltar.addEventListener("click", etapaAnterior);

// ALTERADO: um listener por olho, como estava antes
olhoAbertoLogin.addEventListener("click", alternarVisibilidadeSenha);
olhoFechadoLogin.addEventListener("click", alternarVisibilidadeSenha);
olhoAbertoSenhaCadastro.addEventListener("click", alternarVisibilidadeSenha);
olhoFechadoSenhaCadastro.addEventListener("click", alternarVisibilidadeSenha);
olhoAbertoConfirmarSenha.addEventListener("click", alternarVisibilidadeSenha);
olhoFechadoConfirmarSenha.addEventListener("click", alternarVisibilidadeSenha);

atualizarCadastro();

camposCodigo.forEach((campo, indice) => {
  campo.addEventListener("input", () => {
    const proximoCampo = camposCodigo[indice + 1];

    if (campo.value !== "" && proximoCampo) {
      proximoCampo.focus();
    }
  });

  campo.addEventListener("keydown", (evento) => {
    const campoAnterior = camposCodigo[indice - 1];

    if (evento.key === "Backspace" && campo.value === "" && campoAnterior) {
      campoAnterior.focus();
    }
  });
});