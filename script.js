function mostrarComTexto() {
    document.getElementById("apresentacao_resultadotexto_imagem_id").style.display = "none";
    document.getElementById("apresentacao_resultadotexto_tituloVazio_id").style.display = "none";
    document.getElementById("apresentacao_resultadotexto_paragrafoVazio_id").style.display = "none";

    document.getElementById("apresentacao_resultadotexto_textotratado_id").style.display = "block";
    document.getElementById("apresentacao_inserirtexto_form_botoes_botao_descriptografar").style.display = "block";

    document.getElementById("apresentacao_resultadotexto_id").classList.remove("apresentacao_resultadotexto");
    document.getElementById("apresentacao_resultadotexto_id").classList.add("apresentacao_resultadotexto_tratado")
}

function Criptografia(tipo)
{
    if (document.getElementById("apresentacao_inserirtexto_form_textarea").value == "") {
        alert("Não há nada pra Criptografar !");
        
    } else if (tipo == "criptografia"){

        let minhaString = document.getElementById("apresentacao_inserirtexto_form_textarea").value;
        let nova1String = minhaString.replace(/e/g, "enter");
        let nova2String = nova1String.replace(/i/g, "imes");
        let nova3String = nova2String.replace(/a/g, "ai");
        let nova4String = nova3String.replace(/o/g, "ober");
        var novaString = nova4String.replace(/u/g, "ufat");
        mostrarComTexto();
        document.getElementById("apresentacao_resultadotexto_textotratado_id").textContent = novaString;

    } else if (tipo == "descriptografia") {

        let minhaString = document.getElementById("apresentacao_inserirtexto_form_textarea").value;
        let nova1String = minhaString.replace(/enter/g, "e");
        let nova2String = nova1String.replace(/imes/g, "i");
        let nova3String = nova2String.replace(/ai/g, "a");
        let nova4String = nova3String.replace(/ober/g, "o");
        var novaString = nova4String.replace(/ufat/g, "u");
        mostrarComTexto();
        document.getElementById("apresentacao_resultadotexto_textotratado_id").textContent = novaString;
    }
}

function CopiarTexto() {
    let StringCopiar = document.getElementById("apresentacao_resultadotexto_textotratado_id").textContent;
    console.log(StringCopiar);
    navigator.clipboard.writeText(StringCopiar).then(() =>{
        alert("Texto copiado com sucesso !");
    })
}