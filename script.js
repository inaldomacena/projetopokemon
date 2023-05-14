



const  botaoAlterarTema = document.getElementById("botao-alterar-tema"); //pegar no Js o o elemento HTML correspondente ao botao de troca de tema


const body = document.querySelector("body");//pegar no Js o elemento HTML correspondente ao body

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click",()=> {      //Indentificar o clique do usuário no botao de trocar tema



    const modoEscuroEstaAtivo =   body.classList.contains("modo-escuro"); 
       //verifica se esta no modo escuro
       
      
       body.classList.toggle("modo-escuro") //alternar entre modo claro e escuro


       if (modoEscuroEstaAtivo){
                 imagemBotaoTrocaTema.setAttribute("src", "./imagens/sol.png")//trocar imagem de lua pela imagem de sol

       }else{
            imagemBotaoTrocaTema.setAttribute("src", "./imagens/moon.png") //troca a imagem do botao sol para o botao lua
 
       }
        

});