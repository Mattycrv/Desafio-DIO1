let player = ["Mateus", 100, 45];


function getRank(player) {
    let userName = player[0];
    let userVitories = player[1];
    let userDefeats = player[2];
    let score = userVitories - userDefeats;
    let rank;

    if (score <= 10) {
        rank = "Ferro";
        
    } else if (score >= 11 && score <= 20) {
        rank = "Bronze";
    
    } else if (score >= 21 && score <= 50) {
        rank = "Prata";

    } else if (score >= 51 && score <= 80) {
        rank = "Ouro";

    } else if (score >= 81 && score <= 90) {
        rank = "Diamante";
    
    } else if (score >= 91 && score <= 100) {
        rank = "Lendário";
    } else if (score >= 101) {
        rank = "Imortal";
    }
    return console.log(`O jogador ${userName} tem o saldo de vitórias de ${score} pontos e está no rank ${rank}.`);
    
    }


getRank(player);
