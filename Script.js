document.addEventListener('DOMContentLoaded', () => {
    // --- PLANT DATA ---
    // Added: scientificName property
    // Updated: symbols array uses emojis: ✨(Special), 🩹(Sick), 🔔(Beeps), 🐌(No-Drain)
    const plants = [
        // --- Cabinet ---
        { id: 'zz', name: 'ZZ Plant', scientificName: 'Zamioculcas zamiifolia', location: 'Cabinet', image: 'https://botanix.com/cdn/shop/files/ZZPotBaku.jpg?v=1709144946&width=1445', symbols: [], light: 'Low to bright indirect light', water: 'Allow soil to dry out completely.', soil: 'Well-draining mix.', wateringFrequencyDays: 21, lastWatered: null },
        { id: 'dwj', name: 'Dwarf Wandering Jew', scientificName: 'Callisia repens', location: 'Cabinet', image: 'https://i.etsystatic.com/18596455/r/il/8683ce/2426557453/il_570xN.2426557453_c0qz.jpg', symbols: [], light: 'Bright indirect light', water: 'Keep soil consistently moist, not soggy.', soil: 'Standard potting mix.', wateringFrequencyDays: 6, lastWatered: null },
        { id: 'pothos-cab', name: 'Pothos', scientificName: 'Epipremnum aureum', location: 'Cabinet', image: 'https://vegetaldesignqc.com/cdn/shop/files/DCAF4395-891A-4984-852F-4BA14E6AAE70_1200x1200.png?v=1726685004', symbols: [], light: 'Low to bright indirect light', water: 'Allow top inch or two to dry.', soil: 'Standard potting mix.', wateringFrequencyDays: 7, lastWatered: null },
        { id: 'trad-cab', name: 'Tradescantia', scientificName: 'tradescantia spathacea', location: 'Cabinet', image: 'https://st.hzcdn.com/simgs/efa2691804b37dee_9-9329/_.jpg ', symbols: [], light: 'Bright indirect light', water: 'Keep soil moist.', soil: 'Standard potting mix.', wateringFrequencyDays: 5, lastWatered: null },
        { id: 'echeveria', name: 'Zebra Cactus', scientificName: 'haworthia fasciata', location: 'Cabinet', image: 'https://i.redd.it/mothers-succulent-is-growing-too-tall-and-the-base-of-the-v0-u5mcq0oy729c1.jpg?width=3024&format=pjpg&auto=webp&s=ffae7d5ed64660c3c36e412f64f282d16830f713', symbols: [], light: 'Bright light, direct sun okay', water: 'Water thoroughly when soil is completely dry.', soil: 'Very well-draining cactus/succulent mix.', wateringFrequencyDays: 18, lastWatered: null },
        { id: 'snake', name: 'Snake Plant', scientificName: 'Dracaena trifasciata', location: 'Cabinet', image: 'https://heyrooted.com/cdn/shop/files/SNAKE_LAURENTII_4_FATLIP_BLUE_4_bckgrnd_cream.jpg?v=1731369518&width=416', symbols: [], light: 'Low to bright indirect light', water: 'Allow soil to dry out completely.', soil: 'Well-draining mix.', wateringFrequencyDays: 21, lastWatered: null },
        { id: 'syn-reg-red', name: 'Syngonium Regina Red', scientificName: 'Syngonium podophyllum \'Regina Red\'', location: 'Cabinet', image: 'https://peaceloveandhappiness.club/cdn/shop/files/20240823-094001.jpg?v=1724432138', symbols: ['🔔', '🐌'], light: 'Medium to bright indirect light', water: 'Keep soil consistently moist. Pot does not drain well - water very sparingly!', soil: 'Standard potting mix.', wateringFrequencyDays: 14, lastWatered: null },
        { id: 'syn-neon', name: 'Syngonium Neon Robusta', scientificName: 'Syngonium podophyllum \'Neon Robusta\'', location: 'Cabinet', image: 'https://gardengirl.ca/cdn/shop/files/yF88BSUxhQ8kx25j-medium_1.jpg?v=1698511230', symbols: ['🔔', '🐌'], light: 'Medium to bright indirect light', water: 'Keep soil consistently moist. Pot does not drain well - water very sparingly!', soil: 'Standard potting mix.', wateringFrequencyDays: 14, lastWatered: null },
        { id: 'syn-white', name: 'Syngonium White Holly', scientificName: 'Syngonium podophyllum \'White Holly\'', location: 'Cabinet', image: 'https://media.greg.app/cGxhbnQtZGItcGhvdG9zL3N5bmdvbml1bV93aGl0ZV9idXR0ZXJmbHlfLmpwZw==?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000', symbols: [], light: 'Medium to bright indirect light', water: 'Keep soil consistently moist.', soil: 'Standard potting mix.', wateringFrequencyDays: 7, lastWatered: null },
        { id: 'syn-cab-other', name: 'Syngonium white butterfly', scientificName: 'Syngonium podophyllum \'White Butterfly\'', location: 'Cabinet', image: 'https://preview.redd.it/please-help-my-mini-syngonium-is-dying-the-leaves-are-v0-odddtsq50pl81.jpg?width=640&crop=smart&auto=webp&s=32114647c8d31db188b90a586fdb12397f6df259', symbols: [], light: 'Medium to bright indirect light', water: 'Keep soil consistently moist.', soil: 'Standard potting mix.', wateringFrequencyDays: 7, lastWatered: null },
        { id: 'syn-moved', name: 'Syngonium Regina Red', scientificName: 'Syngonium podophyllum \'Regina Red\'', location: 'Cabinet', image: 'https://fleurexcel.com/cdn/shop/files/e0ffb99802629b045b8b3412277a610a.jpg?v=1708552895&width=1024', symbols: ['🩹'], light: 'Medium to bright indirect light', water: 'Keep soil consistently moist. *Plant is sick and requires weekly steam and leaf cleaning*', soil: 'Standard potting mix.', wateringFrequencyDays: 7, lastWatered: null },

        // --- Plant Stand ---
        { id: 'jade', name: 'Jade Plant', scientificName: 'Crassula ovata', location: 'Plant Stand', image: 'https://i.etsystatic.com/17332308/r/il/b9731e/4905550616/il_1080xN.4905550616_48yh.jpg', symbols: ['🐌'], light: 'Bright light (Grow Light)', water: 'Allow soil to dry. Pot doesn\'t drain well - water sparingly.', soil: 'Well-draining mix.', wateringFrequencyDays: 25, lastWatered: null },
        { id: 'hoya-tri', name: 'Hoya Tricolor', scientificName: 'Hoya carnosa \'Krimson Queen\'', location: 'Plant Stand', image: 'https://www.insucculentlove.com/cdn/shop/products/HoyaKrimsonQueen_1024x1024@2x.jpg?v=1715146519', symbols: [], light: 'Bright light (Grow Light)', water: 'Allow soil to dry slightly.', soil: 'Well-draining, airy mix.', wateringFrequencyDays: 12, lastWatered: null },
        { id: 'burro', name: 'Burro\'s Tail', scientificName: 'Sedum morganianum', location: 'Plant Stand', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvGFcLHsc2ggr5yO1x0Mr6d6dFDLLXKLsgg&s', symbols: [], light: 'Bright light (Grow Light)', water: 'Water thoroughly when soil is dry.', soil: 'Very well-draining mix.', wateringFrequencyDays: 16, lastWatered: null },
        { id: 'succ-mix', name: 'Succulent Mix', scientificName: 'Succulent Arrangement', location: 'Plant Stand', image: 'https://i.etsystatic.com/29821695/r/il/b2b80c/5944196738/il_570xN.5944196738_eife.jpg', symbols: ['🐌'], light: 'Bright light (Grow Light)', water: 'Water sparingly when soil is dry. Pot doesn\'t drain well.', soil: 'Very well-draining mix.', wateringFrequencyDays: 25, lastWatered: null },
        { id: 'pothos-stand', name: 'Pothos', scientificName: 'Epipremnum aureum', location: 'Plant Stand', image: 'https://vegetaldesignqc.com/cdn/shop/files/DCAF4395-891A-4984-852F-4BA14E6AAE70_1200x1200.png?v=1726685004', symbols: ['🐌'], light: 'Bright light (Grow Light)', water: 'Allow top inch to dry. Pot doesn\'t drain well - water less.', soil: 'Standard potting mix.', wateringFrequencyDays: 14, lastWatered: null },
        { id: 'chamomile', name: 'Chamomile', scientificName: 'Matricaria chamomilla', location: 'Plant Stand', image: 'https://www.gov.mb.ca/agriculture/crops/weeds/images/fab36s00d.jpg', symbols: [], light: 'High light (Grow Light)', water: 'Keep soil moderately moist.', soil: 'Well-draining soil.', wateringFrequencyDays: 4, lastWatered: null },
        { id: 'terr-stand', name: 'Terrariums', scientificName: 'N/A', location: 'Plant Stand', image: 'https://www.thespruce.com/thmb/g1DMn33KwcwlCg_Zrp1c_oMnC-U=/2469x3698/filters:no_upscale()/how-to-make-terrariums-848007-24-21db49b28a3d45a69737a3a538bd10db.jpg', symbols: [], light: 'Indirect light (Grow Light adjacent?)', water: 'Do Not Open. Self-watering.', soil: 'Specific terrarium layers.', wateringFrequencyDays: 9999, lastWatered: Date.now() },
        { id: 'syn-frost', name: 'Syngonium Frosted', scientificName: 'Syngonium podophyllum \'Frosted Heart\'', location: 'Plant Stand', image: 'https://i.etsystatic.com/21427386/r/il/694dd8/5196936370/il_570xN.5196936370_m5fd.jpg', symbols: [], light: 'Bright light (Grow Light)', water: 'Keep soil consistently moist.', soil: 'Standard potting mix.', wateringFrequencyDays: 8, lastWatered: null },
        { id: 'monstera', name: 'Monstera', scientificName: 'Monstera deliciosa', location: 'Plant Stand', image: 'https://cdn.shopify.com/s/files/1/0459/4493/0465/files/Rhaphidophora_Tetrasperma_Tropical_Houseplants-7385_600x600.jpg?v=1650053996', symbols: ['🐌'], light: 'Bright light (Grow Light)', water: 'Allow top few inches to dry. Pot doesn\'t drain well - water carefully.', soil: 'Well-draining, chunky mix.', wateringFrequencyDays: 15, lastWatered: null },
        { id: 'dracaena', name: 'Dracaena', scientificName: 'Dracaena marginata', location: 'Plant Stand', image: 'https://vandermeergardencentre.ca/cdn/shop/files/goldfishhb.jpg?v=1718296513', symbols: ['🐌', '🔔'], light: 'Bright light (Grow Light)', water: 'Allow top soil to dry. Pot doesn\'t drain well - water sparingly!', soil: 'Well-draining potting mix.', wateringFrequencyDays: 18, lastWatered: null },
        { id: 'goldfish', name: 'Goldfish Plant', scientificName: 'Nematanthus gregarius', location: 'Plant Stand', image: 'https://vandermeergardencentre.ca/cdn/shop/files/goldfishhb.jpg?v=1718296513', symbols: [], light: 'Bright light (Grow Light)', water: 'Keep soil moist, not waterlogged.', soil: 'Light, airy mix.', wateringFrequencyDays: 6, lastWatered: null },
        { id: 'syn-large', name: 'Large Syngonium', scientificName: 'Syngonium macrophyllum', location: 'Plant Stand', image: 'https://cdn.chlorobase.com/plants/syngonium/macrophyllum/main.webp', symbols: [], light: 'Bright light (Grow Light)', water: 'Keep soil consistently moist.', soil: 'Standard potting mix.', wateringFrequencyDays: 8, lastWatered: null },
        { id: 'bamboo', name: 'Bamboo', scientificName: 'Dracaena sanderiana', location: 'Plant Stand', image: 'https://preview.redd.it/d760q9azfcd41.jpg?width=640&crop=smart&auto=webp&s=1e1a2fa1fb03f7125117a48e7d7cddcd9119ee6e', symbols: ['🐌'], light: 'Bright light (Grow Light)', water: 'Keep roots in water or soil moist. Pot non-draining - check water level/soil moisture directly.', soil: 'Water or soil.', wateringFrequencyDays: 5, lastWatered: null },
        { id: 'philodendron', name: 'Philodendron', scientificName: 'Philodendron \'Golden Violin\'', location: 'Plant Stand', image: 'https://anythinggrowsalberta.com/wp-content/uploads/2022/01/Philodendron-Gold-Violin-2-600x600.jpg.webp', symbols: [], light: 'Bright light (Grow Light)', water: 'Allow top inch of soil to dry.', soil: 'Well-draining potting mix.', wateringFrequencyDays: 9, lastWatered: null },

        // --- Window Sill ---
        { id: 'cactus', name: 'Cactus', scientificName: 'Mammillaria karwinskiana', location: 'Window Sill', image: 'https://media.giromagi.com/prodotti/full/202403/IMG_20240327_101842.jpg', symbols: [], light: 'Very bright light, direct sun', water: 'Water very sparingly, allow soil to dry completely.', soil: 'Very fast-draining cactus mix.', wateringFrequencyDays: 30, lastWatered: null },
        { id: 'coffee', name: 'Coffee Tree', scientificName: 'Coffea arabica', location: 'Window Sill', image: 'https://i.redd.it/x3t6bxo6fa901.jpg', symbols: ['🩹'], light: 'Bright indirect light (South Window)', water: 'Keep soil consistently moist.', soil: 'Slightly acidic, well-draining soil.', wateringFrequencyDays: 5, lastWatered: null },
        { id: 'string-turtles', name: 'String of Turtles', scientificName: 'Peperomia prostrata', location: 'Window Sill', image: 'https://growtropicals.com/cdn/shop/products/peperomia-prostrata-string-of-turtles-small-pet-friendly-house-plant-287822_1800x1800.jpg?v=1706273154', symbols: [], light: 'Bright indirect light (South Window)', water: 'Water when soil is nearly dry. Avoid overwatering.', soil: 'Well-draining mix.', wateringFrequencyDays: 10, lastWatered: null },
        { id: 'terr-sill', name: 'Terrariums', scientificName: 'N/A', location: 'Window Sill', image: 'https://www.thespruce.com/thmb/g1DMn33KwcwlCg_Zrp1c_oMnC-U=/2469x3698/filters:no_upscale()/how-to-make-terrariums-848007-24-21db49b28a3d45a69737a3a538bd10db.jpg', symbols: [], light: 'Indirect light (South Window adjacent)', water: 'Do Not Open. Self-watering.', soil: 'Specific terrarium layers.', wateringFrequencyDays: 9999, lastWatered: Date.now() },
        { id: 'wax-plant', name: 'Wax Plant', scientificName: 'Hoya carnosa', location: 'Window Sill', image: 'https://st.hzcdn.com/fimgs/c962026e05743ac1_0606-w240-h179-b0-p0--.jpg', symbols: [], light: 'Bright indirect light (South Window)', water: 'Allow soil to dry slightly.', soil: 'Well-draining, airy mix.', wateringFrequencyDays: 10, lastWatered: null },

        // --- Desk ---
        { id: 'fig-rubber', name: 'Fig/Rubber Tree', scientificName: 'Ficus elastica', location: 'Desk', image: 'https://www.leafenvy.co.uk/cdn/shop/files/Rubberplant_2_1080x.jpg?v=1742067991', symbols: [], light: 'Bright indirect light (South Window)', water: 'Allow top inch or two to dry.', soil: 'Well-draining potting mix.', wateringFrequencyDays: 9, lastWatered: null },
        { id: 'syn-desk', name: 'Syngonium', scientificName: 'Syngonium podophyllum \'Pixie\'', location: 'Desk', image: 'https://cms.evanthia.nl/resources/uploads/2021/02/Syngonium_podophyllem_Pixie_Evanthia_LR_1_20170822-A2285.jpg', symbols: [], light: 'Medium indirect light (Monitor obstructs?)', water: 'Keep soil consistently moist.', soil: 'Standard potting mix.', wateringFrequencyDays: 8, lastWatered: null },
    ];

    // --- DOM Elements ---
    const plantGrid = document.getElementById('plant-grid');
    const modal = document.getElementById('plant-modal');
    const modalPlantName = document.getElementById('modal-plant-name');
    const modalScientificName = document.getElementById('modal-scientific-name'); // Added
    const modalPlantImage = document.getElementById('modal-plant-image');
    const modalPlantLocation = document.getElementById('modal-plant-location');
    const modalPlantLight = document.getElementById('modal-plant-light');
    const modalPlantWater = document.getElementById('modal-plant-water');
    const modalPlantSoil = document.getElementById('modal-plant-soil');
    const modalPlantNotes = document.getElementById('modal-plant-notes');
    const modalLastWatered = document.getElementById('modal-last-watered');
    const modalFrequency = document.getElementById('modal-frequency');
    const wateredButton = document.getElementById('watered-button');
    const closeButton = document.querySelector('.close-button');
    const sortSelect = document.getElementById('sort-select');

    let currentPlantId = null;
    const localStorageKey = 'plantWateringData';

    // --- Helper Functions ---
    function sanitizeClassName(name) {
        // Converts "Plant Stand" to "location-plant-stand", removes parentheses
        return 'location-' + name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    }

    // --- Main Functions ---
    function loadLastWateredDates() {
        const storedData = localStorage.getItem(localStorageKey);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            plants.forEach(plant => {
                plant.lastWatered = parsedData[plant.id] !== undefined ? parsedData[plant.id] : null;
            });
        } else {
             plants.forEach(plant => plant.lastWatered = null);
        }
    }

    function saveLastWatered(plantId, timestamp) {
        const storedData = localStorage.getItem(localStorageKey);
        let dataToSave = storedData ? JSON.parse(storedData) : {};
        dataToSave[plantId] = timestamp;
        localStorage.setItem(localStorageKey, JSON.stringify(dataToSave));
    }

    function formatTimestamp(timestamp) {
        if (!timestamp) return "Never";
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    function calculateUrgency(plant) {
        if (plant.wateringFrequencyDays >= 9999) return -1; // Terrariums not urgent
        if (!plant.lastWatered) { // Handle never-watered plants
            if (plant.wateringFrequencyDays < 7) return 100;
            if (plant.wateringFrequencyDays < 14) return 50;
            return 10;
        }
        const now = Date.now();
        const daysPassed = (now - plant.lastWatered) / (1000 * 60 * 60 * 24);
        const freq = plant.wateringFrequencyDays;
        if (freq <= 0) return -1; // Avoid division by zero or nonsensical frequency
        return daysPassed / freq; // Ratio of days passed to frequency
    }

    function getStatusFromUrgency(urgencyScore) {
        const yellowThresholdRatio = 0.75; // Yellow at 75% of interval
        const redThresholdRatio = 1.1;   // Red at 110% of interval (10% overdue)
        if (urgencyScore >= redThresholdRatio) return 'red';
        if (urgencyScore >= yellowThresholdRatio) return 'yellow';
        return 'green'; // Includes urgency < yellow threshold and score -1 (non-urgent)
    }

    function updatePlantStatusClass(plantId) {
        const plant = plants.find(p => p.id === plantId);
        if (!plant) return;
        const cardElement = plantGrid.querySelector(`.plant-card[data-id="${plantId}"]`);
        if (!cardElement) return;
        const urgency = calculateUrgency(plant);
        const status = getStatusFromUrgency(urgency);
        cardElement.classList.remove('status-green', 'status-yellow', 'status-red');
        cardElement.classList.add(`status-${status}`);
    }

    function updateAllRenderedPlantStatusClasses() {
        // Use Array.from for broader compatibility if NodeList.forEach isn't supported everywhere
        Array.from(plantGrid.querySelectorAll('.plant-card[data-id]')).forEach(card => {
            updatePlantStatusClass(card.dataset.id);
        });
    }

    // **** CORRECTED renderPlants function - removed internal JS comments ****
    function renderPlants(plantArray) {
        plantGrid.innerHTML = ''; // Clear grid
        plantArray.forEach(plant => {
            const card = document.createElement('div');
            const locationClass = sanitizeClassName(plant.location);
            card.classList.add('plant-card', locationClass);
            card.dataset.id = plant.id; // Set data-id for linking
            let symbolsString = plant.symbols.join(' '); // Join emojis with space for display
            const imageUrl = plant.image || 'placeholder.jpg'; // Fallback image

            card.innerHTML = `
                <img src="${imageUrl}" alt="${plant.name}" loading="lazy" onerror="this.onerror=null; this.src='placeholder.jpg';">
                <div>
                    <h3>${plant.name}</h3>
                    <p>${plant.location}</p>
                    ${symbolsString ? `<p class="symbols">${symbolsString}</p>` : ''}
                </div>
            `;
            card.addEventListener('click', () => openModal(plant.id));
            plantGrid.appendChild(card);
        });
        updateAllRenderedPlantStatusClasses(); // Update colors after rendering
    }


    function sortAndRenderPlants() {
        const sortBy = sortSelect.value;
        let sortedPlants = [...plants]; // Work on a copy

        if (sortBy === 'alphabetical') {
            sortedPlants.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'location') {
            const locationOrder = ['Cabinet', 'Plant Stand', 'Window Sill', 'Desk'];
            sortedPlants.sort((a, b) => {
                const locAIndex = locationOrder.indexOf(a.location);
                const locBIndex = locationOrder.indexOf(b.location);
                const effectiveLocA = locAIndex === -1 ? Infinity : locAIndex;
                const effectiveLocB = locBIndex === -1 ? Infinity : locBIndex;
                if (effectiveLocA !== effectiveLocB) return effectiveLocA - effectiveLocB;
                return a.name.localeCompare(b.name); // Secondary sort by name
            });
        } else { // Default to 'urgency'
            sortedPlants.sort((a, b) => calculateUrgency(b) - calculateUrgency(a)); // Highest urgency first
        }
        renderPlants(sortedPlants);
    }

    function openModal(plantId) {
        const plant = plants.find(p => p.id === plantId);
        if (!plant) return;
        currentPlantId = plantId;

        modalPlantName.textContent = plant.name; // Common Name
        modalScientificName.textContent = plant.scientificName || 'N/A'; // Scientific Name
        modalPlantImage.src = plant.image || 'placeholder.jpg';
        modalPlantImage.alt = plant.name;
        modalPlantImage.onerror = () => { modalPlantImage.src = 'placeholder.jpg'; modalPlantImage.alt = 'Image unavailable'; }

        modalPlantLocation.textContent = plant.location;
        modalPlantLight.textContent = plant.light;
        // Display base water instruction, remove special care part marked by '*' if present
        modalPlantWater.textContent = plant.water.replace(/\s*\*.*/, '').trim();
        modalPlantSoil.textContent = plant.soil;
        modalFrequency.textContent = `${plant.wateringFrequencyDays >= 9999 ? 'N/A (Terrarium)' : plant.wateringFrequencyDays + ' days (estimated)'}`;
        modalLastWatered.textContent = formatTimestamp(plant.lastWatered);

        // Build Notes Array using NEW emoji symbols
        let notes = [];
        if (plant.symbols.includes('🩹')) { // Check for Sick symbol
            notes.push("PLANT IS SICK: Requires special care (see water details below). Check soil extra carefully before watering.");
             // Extract special instruction from water field if '*' exists
             const specialInstructionMatch = plant.water.match(/\*(.*)/);
             if (specialInstructionMatch && specialInstructionMatch[1]) {
                 notes.push(`Care: ${specialInstructionMatch[1].trim()}`);
             }
        } else if (plant.symbols.includes('✨')) { // Check for general Special Care symbol
             const specialInstructionMatch = plant.water.match(/\*(.*)/);
             if (specialInstructionMatch && specialInstructionMatch[1]) {
                 notes.push(`Care: ${specialInstructionMatch[1].trim()}`);
             } else {
                 notes.push("Needs special care (check water instructions).");
             }
         }

        if (plant.symbols.includes('🔔')) notes.push("May have moisture meter that beeps.");
        if (plant.symbols.includes('🐌')) notes.push("Pot doesn't drain well - water very carefully/sparingly, check soil first!");

        notes = [...new Set(notes)]; // Remove duplicates
        modalPlantNotes.textContent = notes.length > 0 ? notes.join(' | ') : 'None'; // Use pipe separator

        modal.style.display = 'block';
    }


    function closeModal() {
        modal.style.display = 'none';
        currentPlantId = null;
    }

    function handleWatering() {
        if (!currentPlantId) return;
        const now = Date.now();
        const plantIndex = plants.findIndex(p => p.id === currentPlantId);
        if (plantIndex > -1) {
            plants[plantIndex].lastWatered = now; // Update data in memory
            saveLastWatered(currentPlantId, now); // Save to local storage
            updatePlantStatusClass(currentPlantId); // Update card color immediately
            // If sorted by urgency, re-sort after a short delay for visual feedback
            if (sortSelect.value === 'urgency') {
                setTimeout(sortAndRenderPlants, 400);
            }
        }
        closeModal();
    }

    // --- Event Listeners ---
    closeButton.addEventListener('click', closeModal);
    wateredButton.addEventListener('click', handleWatering);
    // Close modal if clicking outside of it
    window.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
    // Re-sort when dropdown changes
    sortSelect.addEventListener('change', sortAndRenderPlants);

    // --- Initial Setup ---
    function init() {
        loadLastWateredDates(); // Load saved data
        sortAndRenderPlants(); // Perform initial sort and render
    }
    init(); // Run on page load
});