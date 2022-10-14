document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#msg_bot').addEventListener("keydown", (e) =>{
        if(e.code === "Enter"){
            var Respostas = document.getElementById("msg_bot").value;
            var RespostaInterpretado = Respostas.toLowerCase().replace("á","a")
            .replace("à","a").replace("bom dia", "ola").replace("boa tarde","ola")
            .replace("boa noite","ola").replace("oi","ola")
            .replace("games","jogos").replace("1","jogos")
            .replace("1(jogos)","jogos").replace("game","jogos")
            .replace("computador","pc").replace("desktop","pc")
            .replace("1(jogos)","jogos").replace("game","jogos")
            .replace("1(jogos)","jogos").replace("game","jogos")
            switch (RespostaInterpretado) {
                case "ola":
                    var response = document.createElement("div");
                    response.innerText=
                    `${Respostas}`
                    var responsebot = document.createElement("div");
                    responsebot.innerText = 
                    `Olá, espero que esteja bem sou o ISOBOT, aqui vão algumas opções que você pode digitar
                    Jogos por exemplo`
                    document.getElementById("container_Bot").appendChild(response)
                    document.getElementById("container_Bot").appendChild(responsebot)
                    break;
                case "jogos":
                    var response = document.createElement("div");
                    response.innerText=
                    `${Respostas}`
                    var responsebot = document.createElement("div");
                    responsebot.innerText = 
                    `Otima escolha, qual o sua plataforma favorita PC ou Console`
                    document.getElementById("container_Bot").appendChild(response)
                    document.getElementById("container_Bot").appendChild(responsebot)
                    break;
                case "pc":
                    var response = document.createElement("div");
                    response.innerText=
                    `${Respostas}`
                    var responsebot = document.createElement("div");
                    responsebot.innerText = 
                    `Que interessante eu também gosto de Compotadores ;) vou te direcionar para nossa pagina de lojas`
                    document.getElementById("container_Bot").appendChild(response)
                    document.getElementById("container_Bot").appendChild(responsebot)
                    setTimeout(()=>{
                        window.open("file:///C:/Users/oliveira/Documents/GitHub/Prototipo/PC.html")
                    }, 3000)
                    break;
                case "console":
                    var response = document.createElement("div");
                    response.innerText=
                    `${Respostas}`
                    var responsebot = document.createElement("div");
                    responsebot.innerText = 
                    `Bacana, vou te direcionar para nossa pagina de lojas relacionadas a Consoles ;)`
                    document.getElementById("container_Bot").appendChild(response)
                    document.getElementById("container_Bot").appendChild(responsebot)
                    setTimeout(()=>{
                        window.open("file:///C:/Users/oliveira/Documents/GitHub/Prototipo/Console.html")
                    }, 3000)
                    break;
                    default:
                    var responsebot = document.createElement("div");
                    responsebot.innerText = 
                    `Desculpa não consegui entender, poderia digitar novamente? ;)`
                    document.getElementById("container_Bot").appendChild(responsebot)
                    setTimeout(()=>{
                        location.reload()
                    }, 2000)
                        break;
                    }
                }
            });
        });
        



















































function Bot(){
    document.getElementById("boot").classList.remove("esconder")
    document.getElementById("chama_bot").classList.add("esconder")
    location.reload()
}
function Sair_Bot(){
    document.getElementById("boot").classList.add("esconder")
    document.getElementById("chama_bot").classList.remove("esconder")
}
function BotFrame(){
    document.getElementById("bot").classList.remove("esconder")
    document.getElementById("principal").classList.add("esconder")
    document.getElementById("principal1").classList.add("esconder")
}
function Sair_Bot1(){
    document.getElementById("bot").classList.add("esconder")
    document.getElementById("principal").classList.remove("esconder")
    document.getElementById("principal1").classList.remove("esconder")
    location.reload()
}
// const MSG_Usuario = [
//     ["Olá", "Oi","Bom dia","Boa Tarde", "Boa Noite", "Como Vai"],
//     ///////////////////////////////
//     ["Opcão", "O que me sugere"],
//     ///////////////////////////////
//     ["Jogos"],
//     ///////////////////////////////
//     ["PC", "Console", "Computador"]
// ]

// const MSG_Bot = [
//     ["Olá em que posso te ajudar?","Oi em que posso te ajudar?", "Bom dia em que posso te ajudar?",
//     "Boa tarde em que posso te ajudar?", "Boa Noite em que posso te ajudar?"],
//     //
//     ["Tente digitar: Jogos", "Podemos falar sobre Jogos"],
//     //
//     ["Você quer CONSOLE ou PC?", "Console ou PC?"]
//     //
//     //[window.location.href = 'file:///C:/Users/oliveira/Documents/GitHub/Prototipo/Console.html',window.location.href = 'file:///C:/Users/oliveira/Documents/GitHub/Prototipo/Console.html' ,window.location.href = 'file:///C:/Users/oliveira/Documents/GitHub/Prototipo/PC.html']
// ]

// const Alternativas = [
//     "Não entendi","Digite Novamente","Poderia dgitar novamente?"
// ]
// function saida(input){
//     let text = input.toLowerCase()

//     text = text.replace(/vc/g, "você")
//     if (comparar(MSG_Usuario,MSG_Bot, text)){
//         ResultadoFinal = comparar(MSG_Usuario,MSG_Bot, text);
//     }
//     else{
//         ResultadoFinal = Alternativas[Math.floor(Math.random()*Alternativas.length)]
//     }
// }
// function saida(input){
// }
// function comparar(MSG_Usuario,MSG_Bot, text) {
//     for (let x = 0; x < MSG_Usuario.length; x++) {
//         for (let y = 0; y < MSG_Bot.length; y++) {
//             if (MSG_Usuario[x][y]) {
//                 let Respostas = MSG_Bot[x];
//                 let Reply = Respostas[Math.floor(Math.random() * Respostas.length)];
//             }
//         }
//     }
//     return Reply;
// }
// function addTochat(input,ResultadoFinal){
//     alert(ResultadoFinal)
// }