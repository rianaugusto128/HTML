let modoRegistro = false;
let usuarios = [
    { usuario: "joao", senha: "1234" },
    { usuario: "maria", senha: "abcd" }
];

document.getElementById("btn-registrar").addEventListener("click", () => {
    modoRegistro = !modoRegistro;

    document.getElementById("titulo").innerText = modoRegistro ? "Registrar" : "Login";
    document.getElementById("btn-acao").innerText = modoRegistro ? "Criar Conta" : "Entrar";

    document.getElementById("extra-campos").style.display = modoRegistro ? "block" : "none";
    document.getElementById("confirmar-senha").style.display = modoRegistro ? "block" : "none";

    document.getElementById("mensagem").innerText = "";
});

document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    //Registro
    if (modoRegistro) {
        let confirmar = document.getElementById("confirmar-senha").value;
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let nascimento = document.getElementById("nascimento").value;

        if (senha !== confirmar) {
            document.getElementById("mensagem").style.color = "red";
            document.getElementById("mensagem").innerText = "As senhas não coincidem!";
            return;
        }

        if (usuarios.some(u => u.senha === senha)) {
            document.getElementById("mensagem").style.color = "red";
            document.getElementById("mensagem").innerText = "senha incorreta!";
            return;
        }

        usuarios.push({ usuario, senha, nome, email, nascimento });
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("mensagem").innerText = "Conta criada com sucesso!";
        
    } else {

        //login
        let encontrado = usuarios.some(u => u.usuario === usuario && u.senha === senha);
        if (encontrado) {
            document.getElementById("mensagem").style.color = "green";
            document.getElementById("mensagem").innerText = "Login bem-sucedido!";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        } else {
            document.getElementById("mensagem").style.color = "red";
            document.getElementById("mensagem").innerText = "Usuário ou senha incorretos!";
        }
    }
});