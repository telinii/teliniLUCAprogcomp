function calcular(){
    // vamos criar 2 variáveis 
    // JS as variáveis não possuem tipo
    let mascote, homenagem, suplemento, kit, equipe
    // recupera o valor do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
    // calcular a soma
    
    if (equipe == laranja) 
        if (kit >= 97) {
            pontosKit = 5000 +((kit - 97) * 30)
         } else if (kit >= 78) {
            pontosKit = 4000 + ((kit - 78) * 30)
        }   else if (kit >=49) {
            pontosKit = 2500 ((kit - 49) * 30) }
            else if (kit >= 19) {
            pontosKit = 1000 + ((kit - 19) * 30) }
            else {
                pontosKit = Kit * 30
            } 
            }


            
            
        }
    
    //recupera a equipe

    suplemento = document.getElementById("suplemento").value
    // recupera o valor do suplemento digitado pelo usuário
    kit = Number(document.getElementById("kit").value)
    let soma = Number(mascote) + Number(homenagem) + number(kit)
    soma = soma + pontosKit
    
    alert(pontosKit)
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}