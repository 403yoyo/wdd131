document.addEventListener('DOMContentLoaded', function () {
    const recipeContainer = document.getElementById('recipe-container');

    const recipes = [
        {
            id: 1,
            title: "Banana Oat Smoothie",
            image: "images/banana-oat-smoothie.jpg",
            description: "Blend banana, oats, and almond milk for a quick energy boost.",
            recipeLink: "https://youtu.be/EmhmyIbD8ic?si=yR3TMXD80_GyP9Av"
        },
        {
            id: 2,
            title: "Spinach Avocado Salad",
            image: "images/spinach-avocado-salad.webp",
            description: "A nutrient-packed salad with creamy avocado.",
            recipeLink: "https://youtu.be/1n8LnJFnbZI?si=y9MPvnInARdhnCpn"
        },
        {
            id: 3,
            title: "Carrot Ginger Soup",
            image: "images/carrot-ginger-soup.jpg",
            description: "Warm up with this smooth, immune-boosting soup.",
            recipeLink: "https://youtu.be/E-_vPEgmDHI?si=fizh03BHExWR4-w2"
        },
        {
            id: 4,
            title: "Sweet Potato Fries",
            image: "images/sweet-potato-fries.jpg",
            description: "Healthy sweet potato  fries with natural sweetness.",
            recipeLink: "https://youtu.be/IsQYhkYCC7k?si=mH-JsdKkXGlEk6xN"
        }
    ];

    displayRecipes(recipes);

    function displayRecipes(recipeList) {
        recipeContainer.innerHTML = '';
        recipeList.forEach(recipe => {
            const recipeEl = document.createElement('a');
            recipeEl.className = 'veg-card';
            recipeEl.href = recipe.recipeLink;
            recipeEl.target = '_blank'; // opens in new tab
            recipeEl.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            `;
            recipeContainer.appendChild(recipeEl);
        });
    }
});
