// Variáveis globais
let points = 0;
let upgradeCount = 0;

// Função para aumentar a pontuação
function increaseScore() {
    points += 1 + upgradeCount; // Adiciona pontos e bônus de atualização
    updateScore();
}

// Função para atualizar a exibição da pontuação
function updateScore() {
    document.getElementById("points").textContent = points;
}

// Função para comprar upgrade
function buyUpgrade() {
    const upgradeCost = 10 * Math.pow(2, upgradeCount); // Custo do upgrade (exponencial)
    
    if (points >= upgradeCost) {
        points -= upgradeCost; // Deduz o custo dos pontos
        upgradeCount++; // Aumenta a contagem de atualizações
        updateScore();
        updateUpgradeCount();
    } else {
        alert("Pontuação insuficiente para comprar a atualização!");
    }
}

// Função para atualizar a exibição do contador de upgrades
function updateUpgradeCount() {
    document.getElementById("upgradeCount").textContent = upgradeCount;
}

// Atualiza a exibição inicial
updateScore();
updateUpgradeCount();