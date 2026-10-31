const botaoCadastrar = document.getElementById("cadastrar");
const botaoLogin = document.getElementById("login");

function mostrarFormularioCadastro() {
    document.getElementById("formulario-cadastro").hidden = false;
    document.getElementById("formulario-login").hidden = true;
    document.getElementById("login").classList.remove("aba-ativa");
    document.getElementById("cadastrar").classList.add("aba-ativa");
    document.title = "Fabri3D - Cadastro";
}

function mostrarFormularioLogin() {
    document.getElementById("formulario-cadastro").hidden = true;
    document.getElementById("formulario-login").hidden = false; 
    document.getElementById("cadastrar").classList.remove("aba-ativa");
    document.getElementById("login").classList.add("aba-ativa");
    document.title = "Fabri3D - Login";
}

botaoCadastrar.addEventListener("click", mostrarFormularioCadastro);
botaoLogin.addEventListener("click", mostrarFormularioLogin);   