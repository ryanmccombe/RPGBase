/**
 * Created by Ryan on 05/08/2015.
 */

var playerStatus = {
    elements: {
        playerName: document.getElementById('playerName'),
        playerLevel: document.getElementById('playerLevel'),
        playerCurrentHealth: document.getElementById('playerCurrentHealth'),
        playerMaxHealth: document.getElementById('playerMaxHealth'),
        playerHealthPercent: document.getElementById('playerHealth%')
    },
    refreshAll: function (json) {
        // name, level, currentHealth, maxHealth
        playerStatus.elements.playerName.innerHTML = json.name;
        playerStatus.elements.playerLevel.innerHTML = json.level;
        playerStatus.elements.playerCurrentHealth.innerHTML = json.currentHealth;
        playerStatus.elements.playerMaxHealth.innerHTML = json.maxHealth;
        playerStatus.elements.playerHealthPercent.innerHTML = json.currentHealth/json.maxHealth;
    },
    takeDamage: function (damage) {

    }
};






