document.addEventListener('DOMContentLoaded', function() {
    const fruitContainer = document.getElementById('fruit-container');
    const searchInput = document.getElementById('fruit-search');
    const benefitFilter = document.getElementById('benefit-filter');
    
    // Fruit data - in a real app, this might come from an API
    const fruits = [
        {
            id: 1,
            name: "Apple",
            image: "images/apple.jpg",
            description: "Apples are rich in fiber and antioxidants. They help with digestion and heart health.",
            benefits: ["Digestion", "Heart Health", "Immunity"],
            nutrients: {
                calories: 52,
                carbs: "14g",
                fiber: "2.4g",
                vitaminC: "8% DV"
            },
            season: "Fall",
            sources: "Local orchards, supermarkets"
        },
        // More fruits would be added here...
        {
            id: 2,
            name: "Banana",
            image: "images/banana.jpg",
            description: "Bananas are high in potassium and great for energy. They support muscle function.",
            benefits: ["Energy", "Muscle Health", "Digestion"],
            nutrients: {
                calories: 89,
                carbs: "23g",
                fiber: "2.6g",
                potassium: "12% DV"
            },
            season: "Year-round",
            sources: "Supermarkets, tropical regions"
        },
        {
            id: 3,
            name: "Orange",
            image: "images/orange.jpg",
            description: "Oranges are packed with Vitamin C. They boost immunity and skin health.",
            benefits: ["Immunity", "Skin Health", "Hydration"],
            nutrients: {
                calories: 47,
                carbs: "12g",
                fiber: "2.4g",
                vitaminC: "88% DV"
            },
            season: "Winter",
            sources: "Florida, California, supermarkets"
        },
        {
            id: 4,
            name: "Blueberry",
            image: "images/Blueberry.jpg",
            description: "Blueberries are antioxidant powerhouses. They support brain health and reduce inflammation.",
            benefits: ["Brain Health", "Antioxidants", "Heart Health"],
            nutrients: {
                calories: 57,
                carbs: "14g",
                fiber: "2.4g",
                vitaminK: "24% DV"
            },
            season: "Summer",
            sources: "Local farms, supermarkets"
        },
        {
            id: 5,
            name: "Strawberry",
            image: "images/Strawberry.jpg",
            description: "Strawberries are rich in Vitamin C and manganese. Good for skin and blood sugar control.",
            benefits: ["Skin Health", "Blood Sugar", "Immunity"],
            nutrients: {
                calories: 32,
                carbs: "7.7g",
                fiber: "2g",
                vitaminC: "98% DV"
            },
            season: "Spring",
            sources: "Local farms, supermarkets"
        },
        {
            id: 6,
            name: "Mango",
            image: "images/mango.jpg",
            description: "Mangoes are high in Vitamin A and C. They support eye health and immunity.",
            benefits: ["Eye Health", "Immunity", "Digestion"],
            nutrients: {
                calories: 60,
                carbs: "15g",
                fiber: "1.6g",
                vitaminA: "15% DV"
            },
            season: "Summer",
            sources: "Tropical regions, supermarkets"
        },
        {
            id: 7,
            name: "Pineapple",
            image: "images/Pineapple.jpg",
            description: "Pineapples contain bromelain enzyme. They aid digestion and reduce inflammation.",
            benefits: ["Digestion", "Anti-inflammatory", "Immunity"],
            nutrients: {
                calories: 50,
                carbs: "13g",
                fiber: "1.4g",
                manganese: "76% DV"
            },
            season: "Year-round",
            sources: "Tropical regions, supermarkets"
        },
        {
            id: 8,
            name: "Avocado",
            image: "images/avacado.jpg",
            description: "Avocados provide healthy fats and fiber. Great for heart health and satiety.",
            benefits: ["Heart Health", "Healthy Fats", "Satiety"],
            nutrients: {
                calories: 160,
                fat: "15g",
                fiber: "7g",
                potassium: "14% DV"
            },
            season: "Year-round",
            sources: "California, Mexico, supermarkets"
        }
    ];
    
    // Display all fruits initially
    displayFruits(fruits);
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredFruits = fruits.filter(fruit => 
            fruit.name.toLowerCase().includes(searchTerm) || 
            fruit.description.toLowerCase().includes(searchTerm)
        );
        displayFruits(filteredFruits);
    });
    
    // Filter by benefit
    benefitFilter.addEventListener('change', function() {
        const selectedBenefit = this.value;
        if (!selectedBenefit) {
            displayFruits(fruits);
            return;
        }
        
        const filteredFruits = fruits.filter(fruit => 
            fruit.benefits.some(benefit => 
                benefit.toLowerCase().includes(selectedBenefit.toLowerCase()))
        );
        displayFruits(filteredFruits);
    });
    
    // Display fruits in the grid
    function displayFruits(fruitsToDisplay) {
        fruitContainer.innerHTML = '';
        
        if (fruitsToDisplay.length === 0) {
            fruitContainer.innerHTML = '<p class="no-results">No fruits match your search. Try a different term.</p>';
            return;
        }
        
        fruitsToDisplay.forEach(fruit => {
            const fruitElement = document.createElement('div');
            fruitElement.className = 'fruit-item';
            fruitElement.innerHTML = `          
                
                <img src="${fruit.image}" alt="${fruit.name}" loading="lazy">
                <div class="fruit-info">
                    <h3>${fruit.name}</h3>
                    <p>${fruit.description}</p>
                    <div class="benefits">
                        ${fruit.benefits.map(benefit => `<span class="benefit-tag">${benefit}</span>`).join('')}
                    </div>
                    <div class="fruit-buttons">
                        <button class="view-details" data-id="${fruit.id}">View Details</button>
                        <a class="learn-more" href="https://en.wikipedia.org/wiki/${encodeURIComponent(fruit.name)}" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </div>
                </div>

            `;
            fruitContainer.appendChild(fruitElement);
        });
        
        // Add event listeners to detail buttons
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const fruitId = parseInt(this.getAttribute('data-id'));
                const selectedFruit = fruits.find(fruit => fruit.id === fruitId);
                showFruitDetails(selectedFruit);
            });
        });
    }
    
    // Show detailed view of a fruit (could be a modal in a real implementation)
    function showFruitDetails(fruit) {
        // In a full implementation, this would open a modal or new page
        alert(`Detailed view for ${fruit.name}\n\nBenefits: ${fruit.benefits.join(', ')}\n\nNutrients:\nCalories: ${fruit.nutrients.calories}\nCarbs: ${fruit.nutrients.carbs}\nFiber: ${fruit.nutrients.fiber}`);
    }
    

});