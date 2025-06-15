document.addEventListener('DOMContentLoaded', function () {
    const vegContainer = document.getElementById('veg-container');
    const searchInput = document.getElementById('veg-search');
    const benefitFilter = document.getElementById('veg-benefit-filter');

    const vegetables = [
        {
            id: 1,
            name: "Spinach",
            image: "images/spinach.jpg",
            description: "Spinach is rich in iron and great for blood health.",
            benefits: ["Blood Health", "Immunity", "Vision"],
            nutrients: {
                calories: 23,
                iron: "15% DV",
                vitaminA: "56% DV"
            },
            season: "Spring",
            sources: "Local farms, supermarkets"
        },
        {
            id: 2,
            name: "Carrot",
            image: "images/carrot.jpg",
            description: "Carrots support vision and skin health with high Vitamin A.",
            benefits: ["Vision", "Skin Health", "Immunity"],
            nutrients: {
                calories: 41,
                vitaminA: "334% DV",
                fiber: "2.8g"
            },
            season: "Fall",
            sources: "Local farms, supermarkets"
        },
        {
            id: 3,
            name: "Broccoli",
            image: "images/broccoli.jpg",
            description: "Broccoli is a cruciferous vegetable rich in vitamins and antioxidants.",
            benefits: ["Heart Health", "Immunity", "Bone Strength"],
            nutrients: {
                calories: 34,
                vitaminC: "89% DV",
                calcium: "4% DV"
            },
            season: "Fall",
            sources: "Supermarkets, gardens"
        },
        {
            id: 4,
            name: "Tomato",
            image: "images/tomato.jpg",
            description: "Tomatoes are rich in lycopene, which supports heart and skin health.",
            benefits: ["Heart Health", "Skin Health", "Digestion"],
            nutrients: {
                calories: 18,
                vitaminC: "21% DV",
                potassium: "5% DV"
            },
            season: "Summer",
            sources: "Gardens, farmers’ markets"
        },
        {
            id: 5,
            name: "Cucumber",
            image: "images/cucumber.jpg",
            description: "Cucumbers are hydrating and great for digestion and skin.",
            benefits: ["Hydration", "Digestion", "Skin Health"],
            nutrients: {
                calories: 16,
                water: "95%",
                vitaminK: "16% DV"
            },
            season: "Summer",
            sources: "Local farms, supermarkets"
        },
        {
            id: 6,
            name: "Sweet Potato",
            image: "images/sweetpotato.jpg",
            description: "Sweet potatoes are high in fiber and Vitamin A, great for energy and vision.",
            benefits: ["Energy", "Vision", "Digestion"],
            nutrients: {
                calories: 86,
                fiber: "3g",
                vitaminA: "283% DV"
            },
            season: "Fall",
            sources: "Supermarkets, farms"
        },
        {
            id: 7,
            name: "Kale",
            image: "images/kale.jpg",
            description: "Kale is a superfood rich in Vitamin K and antioxidants.",
            benefits: ["Bone Strength", "Detox", "Immunity"],
            nutrients: {
                calories: 49,
                vitaminK: "684% DV",
                vitaminA: "206% DV"
            },
            season: "Winter",
            sources: "Local markets, farms"
        },
        {
            id: 8,
            name: "Bell Pepper",
            image: "images/bellpepper.jpg",
            description: "Bell peppers are rich in Vitamin C and support skin and immunity.",
            benefits: ["Immunity", "Skin Health", "Antioxidants"],
            nutrients: {
                calories: 31,
                vitaminC: "169% DV",
                fiber: "2.1g"
            },
            season: "Summer",
            sources: "Local farms, supermarkets"
        }
    ];

    displayVegetables(vegetables);

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filtered = vegetables.filter(veg =>
            veg.name.toLowerCase().includes(searchTerm) ||
            veg.description.toLowerCase().includes(searchTerm)
        );
        displayVegetables(filtered);
    });

    benefitFilter.addEventListener('change', function () {
        const selected = this.value;
        if (!selected) return displayVegetables(vegetables);
        const filtered = vegetables.filter(veg =>
            veg.benefits.some(benefit => benefit.toLowerCase().includes(selected.toLowerCase()))
        );
        displayVegetables(filtered);
    });

    function displayVegetables(vegList) {
        vegContainer.innerHTML = '';
        if (!vegList.length) {
            vegContainer.innerHTML = '<p class="no-results">No vegetables found.</p>';
            return;
        }
        vegList.forEach(veg => {
            const vegElement = document.createElement('div');
            vegElement.className = 'fruit-item';
            vegElement.innerHTML = `
                <img src="${veg.image}" alt="${veg.name}" loading="lazy">
                <div class="fruit-info">
                    <h3>${veg.name}</h3>
                    <p>${veg.description}</p>
                    <div class="benefits">
                        ${veg.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join('')}
                    </div>
                    <div class="fruit-buttons">
                        <button class="view-details" data-id="${veg.id}">View Details</button>
                        <a href="https://en.wikipedia.org/wiki/${veg.name}" target="_blank" class="learn-more-btn learn-more">Learn More</a>
                    </div>
                </div>
            `;

            vegContainer.appendChild(vegElement);
        });

     document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', function() {
        const vegId = parseInt(this.getAttribute('data-id'));
        const selected = vegetables.find(v => v.id === vegId);
        
        const formattedNutrients = Object.entries(selected.nutrients)
            .map(([key, value]) => `• ${key}: ${value}`)
            .join('\n');
        
        alert(`Detailed view for ${selected.name}\n\n` +
              `Benefits: ${selected.benefits.join(', ')}\n\n` +
              `Nutrients:\n${formattedNutrients}`);
    });
});
    }
});
