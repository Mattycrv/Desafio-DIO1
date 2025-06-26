
function getRank(userName, userVitories, userDefeats) {
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


getRank("Mateus", 100, 45);
getRank("Lais", 120, 30);
getRank("Rita", 80, 20);
getRank("João", 60, 10);
getRank("Carlos", 50, 5);
