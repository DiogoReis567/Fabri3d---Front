const botaoCadastrar = document.getElementById("cadastrar");
const botaoLogin = document.getElementById("login");
const botaoVoltar = document.getElementById("botao-voltar");
const botaoProximo = document.getElementById("botao-proximo");
const botao_Confirmar_Cadastro = document.getElementById("confirmar_cadastrar");
const ocultarContainer_Botao_Voltar = document.getElementById("voltar-cadastro");
const ocultarContainer_Botao_Proximo = document.getElementById("proximo-cadastro");

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

const labelNome = document.querySelector(
  '#formulario-cadastro label[for="nome"]',
);
const labelSobrenome = document.querySelector(
  '#formulario-cadastro label[for="sobrenome"]',
);
const labelEmail = document.querySelector(
  '#formulario-cadastro label[for="email-cadastro"]',
);
const labelSenha = document.querySelector(
    '#formulario-cadastro label[for="senha-cadastro"]',
);
const labelConfirmarSenha = document.querySelector(
  '#formulario-cadastro label[for="confirmar-senha"]',
);

const camposCodigo = document.querySelectorAll(".codigo-input");

let abaAtualCadastro = [
  ["Nome de usuário", 1],
  ["Email", 2],
  ["Confirmação", 3],
  ["Senha", 4],
];

let etapaAtual = 0;
let ultimaEtapa = abaAtualCadastro.length - 1;

foco_Campo_Email_Login.focus();

function atualizarCadastro() {
  if (etapaAtual === 0) {
    botaoVoltar.hidden = true;
    botaoProximo.hidden = false;
    botao_Confirmar_Cadastro.hidden = true;
    ocultarContainer_Botao_Voltar.hidden = true;
    ocultarContainer_Botao_Proximo.hidden = false;
    visibilidade_Ou_Cadastrar.hidden = false;

  } else if (etapaAtual === 1 || etapaAtual === 2) {
    botaoVoltar.hidden = false;
    botaoProximo.hidden = false;
    botao_Confirmar_Cadastro.hidden = true;
    ocultarContainer_Botao_Voltar.hidden = false;
    ocultarContainer_Botao_Proximo.hidden = false;
    visibilidade_Ou_Cadastrar.hidden = true;

  } else {
    botaoVoltar.hidden = false;
    botaoProximo.hidden = true;
    botao_Confirmar_Cadastro.hidden = false;
    ocultarContainer_Botao_Voltar.hidden = false;
    ocultarContainer_Botao_Proximo.hidden = true;
    visibilidade_Ou_Cadastrar.hidden = true;
    
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
  document.title = "Fabri3D - Login";

  foco_Campo_Email_Login.focus();
}

function mostrarFormularioCadastro() {
  document.getElementById("formulario-cadastro").hidden = false;
  document.getElementById("formulario-login").hidden = true;
  document.getElementById("login").classList.remove("aba-ativa");
  document.getElementById("cadastrar").classList.add("aba-ativa");
  document.title = "Fabri3D - Cadastro";

  foco_Campo_Nome.focus();
}

botaoLogin.addEventListener("click", mostrarFormularioLogin);
botaoCadastrar.addEventListener("click", mostrarFormularioCadastro);
botaoProximo.addEventListener("click", proximaEtapa);
botaoVoltar.addEventListener("click", etapaAnterior);

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

    if (
      evento.key === "Backspace" &&
      campo.value === "" &&
      campoAnterior
    ) {
      campoAnterior.focus();
    }
  });
});