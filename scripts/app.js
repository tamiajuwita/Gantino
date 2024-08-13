document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.getElementById('mainMenu');
    const recipeMenu = document.getElementById('recipeMenu');
    const recipeGrid = document.getElementById('recipeGrid');
    const level = 1; // Example level, should be dynamically updated based on player's progress

    // Use the recipes from data.js
    recipes.forEach(recipe => {
        const recipeBox = document.createElement('div');
        recipeBox.classList.add('recipeBox');
        recipeBox.innerHTML = recipe.name;
        if (recipe.level > level) {
            recipeBox.classList.add('locked');
            recipeBox.innerHTML = 'Locked';
        } else {
            recipeBox.addEventListener('click', () => {
                alert(`Recipe: ${recipe.name}\nSteps: ${recipe.ingredients}\nXP: ${recipe.rewards.xp}, Money: ${recipe.rewards.money}`);
            });
        }
        recipeGrid.appendChild(recipeBox);
    });

    document.getElementById('recipeButton').addEventListener('click', () => {
        mainMenu.style.display = 'none';
        recipeMenu.style.display = 'flex';
    });

    document.getElementById('backButton').addEventListener('click', () => {
        recipeMenu.style.display = 'none';
        mainMenu.style.display = 'flex';
    });
});
