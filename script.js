let total = 0;

document.getElementById("playBtn").addEventListener("click", function() {
    // Tirage aléatoire : 50% chance de gagner 10, 30% chance de gagner 50, 20% chance de perdre
    const rand = Math.random();
    let outcome = "";
    if(rand < 0.5){
        outcome = "💰 Gagné 10 jetons !";
        total += 10;
    } else if(rand < 0.8){
        outcome = "🎉 Jackpot ! Gagné 50 jetons !";
        total += 50;
    } else {
        outcome = "💔 Perdu ! Aucun jeton.";
    }
    document.getElementById("result").textContent = outcome;
    document.getElementById("score").textContent = `💰 Total : ${total}`;
})