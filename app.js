// Define genotypeMapping and nameMapping directly in app.js
const genotypeMapping = {
    Black: ["RRyyWWss", "RRyyWwss", "RRyywwss", "RRYywwss"],
    Blue: ["RRYYwwss"],
    Orange: [
        "RrYyWWss", "RrYYWWss", "RrYYWwss", "RRYyWWss", "RRYyWWSs",
        "RRYYWWss", "RRYYWWSs", "RRYYWwss", "RRYYWwSs"
    ],
    Pink: [
        "RryyWWSs", "RryyWwSs", "RryywwSs", "RrYyWwSs", "RrYywwSs",
        "RrYYwwSs", "RRyyWWSS", "RRyyWwSS", "RRyywwSS"
    ],
    Purple: [
        "rryywwss", "rryywwSs", "rryywwSS", "rrYywwss", "rrYywwSs",
        "rrYywwSS", "RryywwSS", "RrYywwSS", "RRYywwSS"
    ],
    Red: [
        "RryyWWss", "RryyWwss", "Rryywwss", "RrYyWwss", "RrYywwss",
        "RrYYwwss", "RRyyWwSs", "RRyywwSs", "RRYyWwss", "RRYyWwSs",
        "RRYywwSs", "RRYYwwSs", "RRyyWWSs"
    ],
    White: [
        "rryyWWss", "rryyWWSs", "rryyWWSS", "rryyWwSs", "rryyWwSS",
        "rrYyWwss", "rrYyWwSs", "rrYyWwSS", "rrYYwwss", "rrYYwwSs",
        "rrYYwwSS", "RryyWWSS", "RryyWwSS", "RrYyWwSS", "RrYYwwSS",
        "RRYyWwSS", "RRYYwwSS", "rryyWwss"
    ],
    Yellow: [
        "rrYyWWss", "rrYyWWSs", "rrYyWWSS", "rrYYWWSs", "rrYYWWSS",
        "rrYYWwss", "rrYYWwSs", "rrYYWwSS", "RrYyWWSs", "RrYyWWSS",
        "RrYYWWSs", "RrYYWWSS", "RrYYWwSs", "RrYYWwSS", "RRYyWWSS",
        "RRYYWWSS", "rrYYWWss"
    ]
};

const nameMapping = {
    RRyyWWss: "Black1",
    RRyyWwss: "Black2",
    RRyywwss: "Black3",
    RRYywwss: "Black4",
    RRYYwwss: "Blue",
    RrYyWWss: "Orange1",
    RrYYWWss: "Orange2",
    RrYYWwss: "Orange3",
    RRYyWWss: "Orange4",
    RRYyWWSs: "Orange5",
    RRYYWWss: "Orange6",
    RRYYWWSs: "Orange7",
    RRYYWwss: "Orange8",
    RRYYWwSs: "Orange9",
    RryyWWSs: "Pink1",
    RryyWwSs: "Pink2",
    RryywwSs: "Pink3",
    RrYyWwSs: "Pink4",
    RrYywwSs: "Pink5",
    RrYYwwSs: "Pink6",
    RRyyWWSS: "Pink7",
    RRyyWwSS: "Pink8",
    RRyywwSS: "Pink9",
    rryywwss: "Purple1",
    rryywwSs: "Purple2",
    rryywwSS: "Purple3",
    rrYywwss: "Purple4",
    rrYywwSs: "Purple5",
    rrYywwSS: "Purple6",
    RryywwSS: "Purple7",
    RrYywwSS: "Purple8",
    RRYywwSS: "Purple9",
    RryyWWss: "Red1",
    RryyWwss: "Red2",
    Rryywwss: "Red3",
    RrYyWwss: "Red4",
    RrYywwss: "Red5",
    RrYYwwss: "Red6",
    RRyyWwSs: "Red7",
    RRyywwSs: "Red8",
    RRYyWwss: "Red9",
    RRYyWwSs: "Red10",
    RRYywwSs: "Red11",
    RRYYwwSs: "Red12",
    RRyyWWSs: "Red (seed)",
    rryyWWss: "White1",
    rryyWWSs: "White2",
    rryyWWSS: "White3",
    rryyWwSs: "White4",
    rryyWwSS: "White5",
    rrYyWwss: "White6",
    rrYyWwSs: "White7",
    rrYyWwSS: "White8",
    rrYYwwss: "White9",
    rrYYwwSs: "White10",
    rrYYwwSS: "White11",
    RryyWWSS: "White12",
    RryyWwSS: "White13",
    RrYyWwSS: "White14",
    RrYYwwSS: "White15",
    RRYyWwSS: "White16",
    RRYYwwSS: "White17",
    rryyWwss: "White (seed)",
    rrYyWWss: "Yellow1",
    rrYyWWSs: "Yellow2",
    rrYyWWSS: "Yellow3",
    rrYYWWSs: "Yellow4",
    rrYYWWSS: "Yellow5",
    rrYYWwss: "Yellow6",
    rrYYWwSs: "Yellow7",
    rrYYWwSS: "Yellow8",
    RrYyWWSs: "Yellow9",
    RrYyWWSS: "Yellow10",
    RrYYWWSs: "Yellow11",
    RrYYWWSS: "Yellow12",
    RrYYWwSs: "Yellow13",
    RrYYWwSS: "Yellow14",
    RRYyWWSS: "Yellow15",
    RRYYWWSS: "Yellow16",
    rrYYWWss: "Yellow (seed)"
};

const flower1Select = document.getElementById("flower1-color-select");
const flower1Checkboxes = document.getElementById("flower1-checkboxes");

const flower2Select = document.getElementById("flower2-color-select");
const flower2Checkboxes = document.getElementById("flower2-checkboxes");

const breedButton = document.getElementById("get-breeding-result");
const breedingResult = document.getElementById("breeding-result");
const selectedFlowers = document.getElementById("seleted-flowers");

function populateCheckboxes(colorSelect, checkboxesContainer) {
    const selectedColor = colorSelect.value;
    checkboxesContainer.innerHTML = ""; // Clear previous checkboxes

    if (selectedColor && genotypeMapping[selectedColor]) {
        genotypeMapping[selectedColor].forEach((genotype) => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = genotype;
            checkbox.name = genotype;
            checkbox.value = genotype;

            const label = document.createElement("label");
            label.htmlFor = genotype;
            label.textContent = nameMapping[genotype] || genotype;

            const wrapper = document.createElement("div");
            wrapper.appendChild(checkbox);
            wrapper.appendChild(label);

            checkboxesContainer.appendChild(wrapper);
        });
    }
}

function getSelectedGenotypes(checkboxesContainer) {
    return Array.from(
        checkboxesContainer.querySelectorAll("input[type='checkbox']:checked")
    ).map((checkbox) => checkbox.value);
}

function divideGenotype(genotype) {
    return {
        R: genotype.slice(0, 2),
        Y: genotype.slice(2, 4),
        W: genotype.slice(4, 6),
        S: genotype.slice(6, 8),
    };
}

function breedAlleles(allele1, allele2) {
    const outcomes = {};

    const allele1Chars = allele1.split(""); // Split into individual characters
    const allele2Chars = allele2.split("");

    // Generate all possible allele combinations
    for (const char1 of allele1Chars) {
        for (const char2 of allele2Chars) {
            const offspring = [char1, char2].sort().join(""); // Sort for consistency
            outcomes[offspring] = (outcomes[offspring] || 0) + 0.25; // Each pair contributes 25% to the probability
            console.log("offspring is: ", offspring);
            console.log("outcomes is :", outcomes[offspring])
        }
    }

    return outcomes;
}

function combineProbabilities(part1, part2, part3, part4, combined, base_pro) {

    Object.entries(part1).forEach(([rKey, rProb]) => {
        Object.entries(part2).forEach(([yKey, yProb]) => {
            Object.entries(part3).forEach(([wKey, wProb]) => {
                Object.entries(part4).forEach(([sKey, sProb]) => {
                    const genotype = rKey + yKey + wKey + sKey;
                    const probability = rProb * yProb * wProb * sProb;
                    console.log("Genotype is ", genotype);
                    console.log("probality is ", probability);
                    if (combined[genotype]) {
                        combined[genotype] += probability*base_pro;
                    } else {
                        combined[genotype] = probability*base_pro;
                    }
                });
            });
        });
    });
}

function simulateBreeding(genotypes1, genotypes2) {
    const results = {};
    const combined = {};
    genotypes1.forEach((genotype1) => {
        l1 = genotypes1.length;
        console.log("types1 length", l1);
        genotypes2.forEach((genotype2) => {
            l2 = genotypes2.length;
            console.log("types2 length", l2);
            const base_probability = 1 / parseFloat(l1) / parseFloat(l2);
            const g1Parts = divideGenotype(genotype1);
            const g2Parts = divideGenotype(genotype2);

            const rOutcomes = breedAlleles(g1Parts.R, g2Parts.R);
            const yOutcomes = breedAlleles(g1Parts.Y, g2Parts.Y);
            const wOutcomes = breedAlleles(g1Parts.W, g2Parts.W);
            const sOutcomes = breedAlleles(g1Parts.S, g2Parts.S);

            combineProbabilities(
                rOutcomes,
                yOutcomes,
                wOutcomes,
                sOutcomes,
                combined,
                base_probability
            );

        });
    });
    Object.entries(combined).forEach(([genotype, probability]) => {
        const color = Object.keys(genotypeMapping).find((key) =>
            genotypeMapping[key].includes(genotype)
        );

        if (!color) return;

        if (!results[color]) {
            results[color] = [];
        }

        results[color].push({
            name: nameMapping[genotype] || "Unknown",
            genotype,
            probability: probability.toFixed(4), // Round to 4 decimals
        });
    });

    return results;
}

flower1Select.addEventListener("change", () => {
    populateCheckboxes(flower1Select, flower1Checkboxes);
});

flower2Select.addEventListener("change", () => {
    populateCheckboxes(flower2Select, flower2Checkboxes);
});

breedButton.addEventListener("click", () => {
    const genotypes1 = getSelectedGenotypes(flower1Checkboxes);
    const genotypes2 = getSelectedGenotypes(flower2Checkboxes);

    if (genotypes1.length === 0 || genotypes2.length === 0) {
        alert("Please select at least one genotype from both flowers.");
        return;
    }
    selectedFlowers.innerHTML = [genotypes1, genotypes2]
    .map((genotypes, index) => {
        return `
            <div>
                <h3>Flower ${index + 1} Genotypes</h3>
                ${genotypes
                    .map((genotype) =>
                        `<div>${genotype}</div>`
                    )
                    .join("")}
            </div>
        `;
    })
    .join("");

    const result = simulateBreeding(genotypes1, genotypes2);
    breedingResult.innerHTML = Object.entries(result)
        .map(([color, details]) =>
            `<div>
                <h3>${color}</h3>
                ${details
                    .map(
                        (detail) =>
                            `<div>${color} - ${detail.name} - ${detail.genotype}: ${detail.probability}</div>`
                    )
                    .join("")}
            </div>`
        )
        .join("");
});
