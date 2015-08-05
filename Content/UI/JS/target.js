/**
 * Created by Ryan on 05/08/2015.
 */

var target = {
    elements: {
        targetName: document.getElementById('targetName'),
        targetLevel: document.getElementById('targetLevel'),
        targetCurrentHealth: document.getElementById('targetCurrentHealth'),
        targetMaxHealth: document.getElementById('targetMaxHealth'),
        targetHealthPercent: document.getElementById('targetHealth%')
    },

    clear: function () {
        console.log(clear);
    },

    refresh: function (json) {
        // name, level, currentHealth, maxHealth
        target.elements.targetName.innerHTML = json.name;
        target.elements.targetLevel.innerHTML = json.level;
        target.elements.targetCurrentHealth.innerHTML = json.currentHealth;
        target.elements.targetMaxHealth.innerHTML = json.maxHealth;
        target.elements.targetHealthPercent.innerHTML = json.currentHealth / json.maxHealth;
    }
};