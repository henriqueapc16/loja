const mensagem = document.getElementById("menssagem");

function adicionarAoCarrinho(){
    mensagem.style.display= "block";

    setTimeout(() => {
        mensagem.style.display = "none";
    }, 3000);
};
