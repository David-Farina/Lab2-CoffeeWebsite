// ==========================================
// COFFEE SHOP PRODUCTS PAGE - STUDENT LAB
// ==========================================
// Your mission: Fetch coffee data from an API and display it as cards

// This array will store all our coffee data
let allCoffees = [];

// ==========================================
// TODO #1: FETCH DATA FROM API
// ==========================================

const mockData = {
    "coffees": [
        {
            "id": 1,
            "name": "Espresso",
            "description": "A strong, black coffee made by forcing steam through ground coffee beans.",
            "ingredients": ["Coffee beans", "Water"],
            "image_url": "https://imgs.search.brave.com/sf4Rzj93g9nkwsTCSOQiZslicA8lfz2LpGseWeQoRrA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjAw/NDE2MzM4L3N0b2Nr/LXBob3RvLW1vcm5p/bmctY29mZmVlLXRl/cnJhY2UtY2FmZS1j/dXAtZXNwcmVzc28t/dGFibGUtc3VuLWxp/Z2h0LWJyZWFrZmFz/dA"
        },
        {
            "id": 2,
            "name": "Cappuccino",
            "description": "A rich coffee drink made with espresso, steamed milk, and milk foam.",
            "ingredients": ["Espresso", "Steamed milk", "Foam"],
            "image_url": "https://imgs.search.brave.com/mhR4J5L3HTM7d4OIgDQ0rSoqcqKFBooyXnxp3BNg9Cg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxsaWFub3MuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzAxL0N1cC1vZi1j/YXBwdWNjaW5vLWNv/ZmZlZS13aXRoLW1p/Y3JvLWZvYW0tb24t/d29vZGVuLXRhYmxl/LmpwZw"
        },
        {
            "id": 3,
            "name": "Latte",
            "description": "A coffee drink made with espresso and steamed milk, typically with a little foam.",
            "ingredients": ["Espresso", "Steamed milk", "Milk foam"],
            "image_url": "https://imgs.search.brave.com/Bz0wLq84deaGi-ki7YL9AkIFjL50ZGgI-IlhAE1gpFU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9teWV2/ZXJ5ZGF5dGFibGUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA0L0xhdHRl/XzBfNy0xMDI0eDY4/My5qcGc"
        },
        {
            id: 4,
            name: "Italian Hot Chocolate",
            description: "Thick, rich European-style hot chocolate.",
            ingredients: ["Cocoa", "Milk", "Sugar"],
            image_url: "https://imgs.search.brave.com/uUSYMjHBl0nDw5exlYxKELYn5zPZ_hLrfooN557fylY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb29r/aW5nd2l0aGF5ZWgu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEyL0l0YWxp/YW4tSG90LUNob2Nv/bGF0ZS0xLmpwZw"
        },
        {
            id: 5,
            name: "Chamomile Tea",
            description: "Light and calming herbal tea.",
            ingredients: ["Chamomile", "Water"],
            image_url: "https://imgs.search.brave.com/Cz9UdCp_Do_94gOvABvzlCZ4cpnwSlYUruoZYAtBsbg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzQ1Lzg0LzQ5/LzM2MF9GXzE1NDU4/NDQ5MTdfaHZDOUdE/OVg3NkZVQlhmcDVj/NFhMNGRGU1VjQmdr/Z2EuanBn"
        },

        {
            id: 6,
            name: "Brioche",
            description: "Italian-style croissant, soft and slightly sweet.",
            ingredients: ["Flour", "Butter", "Sugar"],
            image_url: "https://imgs.search.brave.com/Gos08-etj9ithRjw409nIEaPm3N1aTFEDHOhHlUrS1g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wdW50/b2l0YWx5Lm9yZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/MS9JdGFsaWFuLUNv/cm5ldHRvLTIuanBn"
        },

        {
            id: 7,
            name: "Tiramisu",
            description: "Classic Italian dessert made with espresso-soaked ladyfingers.",
            ingredients: ["Mascarpone", "Espresso", "Cocoa"],
            image_url: "https://imgs.search.brave.com/7kC0o6HPbzg-r6b0WgjKOz9N_Y_lqpKL_13vDqMIeu0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk4/NzQyMTk2OS9waG90/by90aXJhbWlzdS1k/ZXNzZXJ0LWlzLXJl/YWR5LXRvLWJlLXNl/cnZlZC1hdC10aGUt/cmVzdGF1cmFudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dDd5QUtNeENXY2Fm/SmYyeWcwb1ljV1pr/d3FoazNwQzVqeDZC/NFB2SGVJST0"
        },
        {
            id: 8,
            name: "Focaccia",
            description: "Fresh Italian flatbread with olive oil and herbs.",
            ingredients: ["Flour", "Olive Oil", "Rosemary"],
            image_url: "https://imgs.search.brave.com/Vnc-4yEk7CY71vuDSkOYS8TGNg3eb66WNiFOWWBIOi0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2lhbGxvemFmZmVy/YW5vLmNvbS9pbWFn/ZXMvMjI5LTIyOTA0/L2ZvY2FjY2lhLWZ1/Z2Fzc2EtYWxsYS1n/ZW5vdmVzZS1nZW5v/YS1zdHlsZS1mb2Nh/Y2NpYV80NTB4MzAw/LmpwZw"
        },
        {
            id: 9,
            name: "Lungo",
            description: "An extended espresso with more water and longer extraction",
            ingredients: ["Coffee beans", "Water"],
            image_url: "https://imgs.search.brave.com/u9AQjPOCPjtSIFNoLMhjAIJWUs68E5aX_eKPk76_0RM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ub3Z1/bS5jb2ZmZWUvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDMv/bHVuZ28ta2FmZmVl/LWNyZW1hLWVkaXRl/ZC5qcGc"
        },
        {
            id: 10,
            name: "Caffe Macchiato",
            description: "Espresso marked with a small amount of foamed milk",
            ingredients: ["Espresso", "Foam milk"],
            image_url: "https://imgs.search.brave.com/TqZ-sKa_Y_jceaCVAE6dSTIhEh11aVYhyos69z4F-BA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/NzY3NjI3Ni9waG90/by9ob3QtbWFjY2hp/YXRvLWNvZmZlZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M2ZUSVpRUEdEMURv/dGF3cnd4OXFKbm4t/VkRSdl9qZjJHc3NS/Xzd4aml2RT0"
        }

    ]
};

async function fetchCoffees() {
    try {

        // STEP 1: Fetch data from the API
        // API URL: 'https://api.sampleapis.com/coffee/hot'
        // HINT: const response = await fetch('URL_HERE');
        const data = mockData
        
        // ==========================================
        // TODO #2: TRANSFORM THE DATA
        // ==========================================
        // The API returns coffee objects with these properties:
        // - id, title, description, ingredients, image
        // 
        // We need to transform them to:
        // - id, name, description, category, ingredients, image_url
        //
        // Use .map() to transform each coffee object:
        // HINT: allCoffees = data.map(coffee => ({ ... }));
        
        allCoffees = data.coffees.map(coffee => ({
            id: coffee.id,
            name: coffee.name,// YOUR CODE HERE (use coffee.title)
            description: coffee.description,// YOUR CODE HERE
            category: getCoffeeCategory(coffee.name, coffee.ingredients),
            ingredients: coffee.ingredients,
            image_url: coffee.image_url// YOUR CODE HERE (use coffee.image)
        }));
    
        
        // Display all coffees when page loads
        displayCoffees(allCoffees);
        console.log('Loaded mock coffees from data:', allCoffees.length);
        
    } catch (error) {
        console.error('Error fetching coffees:', error);
        document.getElementById('product-grid').innerHTML = 
            '<p>Sorry, unable to load products. Please try again later.</p>';
    }
}

// ==========================================
// TODO #3: CATEGORIZE COFFEES
// ==========================================
// This function determines the category based on ingredients
function getCoffeeCategory(name, ingredients) {
const nameLower = name.toLowerCase();
    const ingredientsStr = Array.isArray(ingredients)
        ? ingredients.join(' ').toLowerCase()
        : '';

    // Pure espresso shot
    if (
        nameLower === 'espresso' ||
        nameLower === 'lungo' ||
        nameLower === 'caffe macchiato'

    ) {
        return 'espresso';
    }

    // Anything milk-based coffee = coffee
    if (
        nameLower.includes('latte') ||
        nameLower.includes('cappuccino') ||
        ingredientsStr.includes('steamed milk') ||
        ingredientsStr.includes('foam') 
    ) {
        return 'coffee';
    }

    return 'other';
}

// ==========================================
// TODO #4: DISPLAY COFFEE CARDS
// ==========================================
function displayCoffees(coffeesToShow) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear existing cards
    
    // Loop through each coffee
    coffeesToShow.forEach(coffee => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${coffee.image_url}" alt="${coffee.name}">
            <h3> ${coffee.name} </h3>
            <div class="product-info">
                <div class="description-section">
                    <p class="section-label">Description:</p>
                    <p class="section-content"> ${coffee.description} </p>
                </div>
                <div class="ingredients-section">
                    <p class="section-label">Ingredients:</p>
                    <p class="section-content">${Array.isArray(coffee.ingredients) ? coffee.ingredients.join(', ') : coffee.ingredients}</p>
                </div>
            </div>
`;
        
        // After formatting and adding the content to the card push it to the grid
        // HINT: productGrid.appendChild(productCard);
        productGrid.appendChild(productCard)
    });
}

// ==========================================
// TODO #6: FILTER BY CATEGORY
// ==========================================
function filterByCategory(category) {
    console.log('Filtering by category:', category);
    if (category === 'all') {
        // Display all coffees
        // HINT: displayCoffees(allCoffees);
        // YOUR CODE HERE
        displayCoffees(allCoffees);
    } else {
        // Filter coffees where category matches
        // HINT: const filtered = allCoffees.filter(c => c.category === category);
        const filtered = allCoffees.filter(c => c.category.toLowerCase() === category.toLowerCase());
        displayCoffees(filtered);
    }
}

// ==========================================
// EVENT LISTENERS (Complete - No changes needed)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    fetchCoffees();
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
});

// ==========================================
// TESTING CHECKLIST
// ==========================================
// ✓ Coffee cards appear on page
// ✓ Each card shows: image, name, description, ingredients
// ✓ Filter buttons work correctly
// ✓ No errors in console (F12)