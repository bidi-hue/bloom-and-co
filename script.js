/* =========================================================
   BLOOM & CO.
   KRISHNA'S VIRTUAL FLOWER SHOP
   SVG FLOWER VERSION
   ========================================================= */


/* =========================================================
   FLOWER DATA
   ========================================================= */

const flowersRoom1 = [

    { name: "Red Rose", meaning: "Love", type: "rose", color: "#c94f67" },
    { name: "Pink Rose", meaning: "Gratitude", type: "rose", color: "#e69aaa" },
    { name: "White Rose", meaning: "Innocence", type: "rose", color: "#fff7f5" },
    { name: "Yellow Rose", meaning: "Friendship", type: "rose", color: "#f2c94c" },

    { name: "Sunflower", meaning: "Adoration", type: "sunflower", color: "#e8ad2f" },

    { name: "Tulip", meaning: "Perfect Love", type: "tulip", color: "#d95772" },

    { name: "White Lily", meaning: "Purity", type: "lily", color: "#fffaf0" },

    { name: "Orchid", meaning: "Beauty", type: "orchid", color: "#a77ac5" },

    { name: "Daisy", meaning: "Innocence", type: "daisy", color: "#fffdf3" },

    { name: "Peony", meaning: "Prosperity", type: "peony", color: "#e88fa8" },

    { name: "Carnation", meaning: "Admiration", type: "carnation", color: "#df718c" },

    { name: "Lavender", meaning: "Calmness", type: "lavender", color: "#aa91c8" },

    { name: "Lotus", meaning: "Enlightenment", type: "lotus", color: "#e89aaa" },

    { name: "Cherry Blossom", meaning: "New Beginnings", type: "cherry", color: "#f0a7bd" },

    { name: "Iris", meaning: "Hope", type: "iris", color: "#7476c7" },

    { name: "Chrysanthemum", meaning: "Friendship", type: "chrysanthemum", color: "#e7b06a" },

    { name: "Daffodil", meaning: "New Beginnings", type: "daffodil", color: "#f4d24f" },

    { name: "Hydrangea", meaning: "Gratitude", type: "hydrangea", color: "#9b9bd0" },

    { name: "Baby's Breath", meaning: "Innocence", type: "babys-breath", color: "#fffaf8" },

    { name: "Freesia", meaning: "Trust", type: "freesia", color: "#f2c7d0" }

];


const flowersRoom2 = [

    { name: "Poppy", meaning: "Remembrance", type: "poppy", color: "#e85b62" },

    { name: "Magnolia", meaning: "Nobility", type: "magnolia", color: "#f3d8df" },

    { name: "Zinnia", meaning: "Lasting Friendship", type: "zinnia", color: "#e77a91" },

    { name: "Bluebell", meaning: "Humility", type: "bluebell", color: "#8b91d1" },

    { name: "Ranunculus", meaning: "Charm", type: "ranunculus", color: "#f1a5a9" },

    { name: "Anemone", meaning: "Anticipation", type: "anemone", color: "#df7189" },

    { name: "Alstroemeria", meaning: "Friendship", type: "alstroemeria", color: "#e89bb3" },

    { name: "Amaryllis", meaning: "Pride", type: "amaryllis", color: "#d95368" },

    { name: "Calla Lily", meaning: "Elegance", type: "calla", color: "#f8eee3" },

    { name: "Gerbera Daisy", meaning: "Cheerfulness", type: "gerbera", color: "#ee8a64" },

    { name: "Blue Orchid", meaning: "Mystery", type: "orchid", color: "#6f83c7" },

    { name: "Snapdragon", meaning: "Grace", type: "snapdragon", color: "#d986a0" },

    { name: "Stock", meaning: "Lasting Beauty", type: "stock", color: "#c797c9" },

    { name: "Heather", meaning: "Solitude", type: "heather", color: "#9d83b9" },

    { name: "Purple Tulip", meaning: "Royalty", type: "tulip", color: "#8062a9" },

    { name: "Yarrow", meaning: "Healing", type: "yarrow", color: "#e6c48b" },

    { name: "Queen Anne's Lace", meaning: "Sanctuary", type: "lace", color: "#fffaf4" },

    { name: "Garden Rose", meaning: "Grace", type: "rose", color: "#d9869b" },

    { name: "Cosmos", meaning: "Harmony", type: "cosmos", color: "#d68da9" },

    { name: "Hibiscus", meaning: "Delicate Beauty", type: "hibiscus", color: "#e66f91" }

];


/* =========================================================
   GREENERY
   ========================================================= */

const greenery = [

    { name: "Eucalyptus", type: "eucalyptus", color: "#91ad91" },

    { name: "Fern", type: "fern", color: "#668c68" },

    { name: "Baby's Breath", type: "baby-green", color: "#dce8d8" },

    { name: "Olive Branch", type: "olive", color: "#879b72" },

    { name: "Ivy", type: "ivy", color: "#668968" },

    { name: "Ruscus", type: "ruscus", color: "#718f6c" },

    { name: "Mint", type: "mint", color: "#91b99b" },

    { name: "Pampas Grass", type: "pampas", color: "#d8c6a9" }

];


/* =========================================================
   RIBBONS
   ========================================================= */

const ribbons = [

    {
        name: "Blush Pink",
        color: "#d99aaa"
    },

    {
        name: "Dusty Rose",
        color: "#b9798b"
    },

    {
        name: "Lavender",
        color: "#a993c7"
    },

    {
        name: "Sage Green",
        color: "#91a58c"
    },

    {
        name: "Baby Blue",
        color: "#9dbbd3"
    },

    {
        name: "Cream",
        color: "#eee1c8"
    },

    {
        name: "Cherry Red",
        color: "#b94f62"
    },

    {
        name: "Champagne",
        color: "#d3b36c"
    }

];


/* =========================================================
   WRAPPING
   ========================================================= */

const wrapping = [

    {
        name: "Blush Pink",
        color: "#e8b7c1"
    },

    {
        name: "Soft Cream",
        color: "#eee5d6"
    },

    {
        name: "Sage Garden",
        color: "#aab9a1"
    },

    {
        name: "Dusty Lavender",
        color: "#c4b5d2"
    },

    {
        name: "Peach",
        color: "#edb49d"
    },

    {
        name: "Kraft Paper",
        color: "#c7a87b"
    },

    {
        name: "Powder Blue",
        color: "#b6cddd"
    },

    {
        name: "Deep Rose",
        color: "#9e6575"
    }

];


/* =========================================================
   BOUQUET STATE
   ========================================================= */

const bouquet = {

    flowers: {},

    greenery: {},

    ribbon: null,

    wrapping: null

};


/* =========================================================
   ROOMS
   ========================================================= */

const rooms =
    document.querySelectorAll(".shop-room");

const progressFill =
    document.getElementById("progress-fill");

const basketCount =
    document.getElementById("basket-count");

const toast =
    document.getElementById("toast");


const totalRooms = 7;


/* =========================================================
   ROOM NAVIGATION
   ========================================================= */

function goToRoom(roomNumber) {

    rooms.forEach(room => {

        room.classList.remove("active");

    });


    const target =
        document.getElementById(
            `room-${roomNumber}`
        );


    if (!target) return;


    target.classList.add("active");


    const progress =
        (roomNumber / (totalRooms - 1)) * 100;


    progressFill.style.width =
        `${progress}%`;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SVG HELPER
   ========================================================= */

function svgWrap(content, viewBox = "0 0 100 100") {

    return `
        <svg
            viewBox="${viewBox}"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            ${content}
        </svg>
    `;

}


/* =========================================================
   FLOWER SVG GENERATOR
   ========================================================= */

function flowerSVG(type, color) {

    const center =
        `<circle cx="50" cy="50" r="9" fill="#d49b48"/>`;


    const petal =
        (cx, cy, rx, ry, rotation = 0) => `
            <ellipse
                cx="${cx}"
                cy="${cy}"
                rx="${rx}"
                ry="${ry}"
                fill="${color}"
                transform="rotate(${rotation} ${cx} ${cy})"
            />
        `;


    let content = "";


    /* ROSE */

    if (type === "rose") {

        content = `

            ${petal(50, 25, 15, 25)}
            ${petal(70, 38, 22, 14, 55)}
            ${petal(67, 63, 22, 14, 120)}
            ${petal(50, 75, 15, 25)}
            ${petal(33, 63, 22, 14, -120)}
            ${petal(30, 38, 22, 14, -55)}

            <circle
                cx="50"
                cy="50"
                r="18"
                fill="${color}"
            />

            <path
                d="M38 48 C45 36 62 39 62 50 C62 61 45 64 39 53"
                fill="none"
                stroke="#fff"
                stroke-opacity=".35"
                stroke-width="3"
            />

        `;

    }


    /* SUNFLOWER */

    else if (type === "sunflower") {

        for (let i = 0; i < 12; i++) {

            const angle =
                i * 30;

            content += `
                <ellipse
                    cx="50"
                    cy="23"
                    rx="8"
                    ry="24"
                    fill="${color}"
                    transform="rotate(${angle} 50 50)"
                />
            `;

        }

        content += `
            <circle
                cx="50"
                cy="50"
                r="18"
                fill="#70462e"
            />

            <circle
                cx="45"
                cy="45"
                r="3"
                fill="#a8783b"
            />

            <circle
                cx="57"
                cy="53"
                r="3"
                fill="#a8783b"
            />
        `;

    }


    /* TULIP */

    else if (type === "tulip") {

        content = `

            <path
                d="
                    M20 35
                    C28 15 39 25 50 35
                    C61 25 72 15 80 35
                    C80 70 66 82 50 82
                    C34 82 20 70 20 35
                    Z
                "
                fill="${color}"
            />

            <path
                d="
                    M20 35
                    C30 47 39 48 50 35
                    C61 48 70 47 80 35
                "
                fill="none"
                stroke="#ffffff"
                stroke-opacity=".3"
                stroke-width="3"
            />

        `;

    }


    /* LILY */

    else if (type === "lily") {

        content = `

            ${petal(50, 23, 13, 31, 0)}
            ${petal(73, 37, 14, 27, 55)}
            ${petal(67, 65, 14, 27, 120)}
            ${petal(33, 65, 14, 27, -120)}
            ${petal(27, 37, 14, 27, -55)}

            <circle
                cx="50"
                cy="50"
                r="8"
                fill="#d59c56"
            />

        `;

    }


    /* DAISY / GERBERA */

    else if (
        type === "daisy" ||
        type === "gerbera"
    ) {

        const petalCount =
            type === "gerbera" ? 18 : 12;


        for (
            let i = 0;
            i < petalCount;
            i++
        ) {

            const angle =
                i * (360 / petalCount);


            content += `
                <ellipse
                    cx="50"
                    cy="24"
                    rx="8"
                    ry="25"
                    fill="${color}"
                    transform="
                        rotate(${angle} 50 50)
                    "
                />
            `;

        }


        content += center;

    }


    /* ORCHID */

    else if (type === "orchid") {

        content = `

            ${petal(50, 27, 13, 23)}
            ${petal(72, 39, 20, 12, 60)}
            ${petal(67, 66, 19, 12, 120)}
            ${petal(33, 66, 19, 12, -120)}
            ${petal(28, 39, 20, 12, -60)}

            <circle
                cx="50"
                cy="52"
                r="11"
                fill="#f4c6d3"
            />

            <circle
                cx="50"
                cy="52"
                r="4"
                fill="#c47a96"
            />

        `;

    }


    /* PEONY */

    else if (type === "peony") {

        content = `

            ${petal(50, 27, 18, 22)}
            ${petal(70, 38, 21, 17, 50)}
            ${petal(68, 62, 21, 17, 110)}
            ${petal(50, 73, 18, 22)}
            ${petal(32, 62, 21, 17, -110)}
            ${petal(30, 38, 21, 17, -50)}

            <circle
                cx="50"
                cy="50"
                r="20"
                fill="${color}"
            />

            <circle
                cx="43"
                cy="46"
                r="7"
                fill="#ffffff"
                fill-opacity=".22"
            />

        `;

    }


    /* LOTUS */

    else if (type === "lotus") {

        content = `

            <path
                d="M50 76 C25 67 23 48 30 34 C40 42 48 52 50 76"
                fill="${color}"
            />

            <path
                d="M50 76 C75 67 77 48 70 34 C60 42 52 52 50 76"
                fill="${color}"
            />

            <path
                d="M50 76 C38 62 38 37 50 22 C62 37 62 62 50 76"
                fill="${color}"
            />

            <path
                d="M30 58 C40 65 45 69 50 76 C55 69 60 65 70 58"
                fill="${color}"
            />

        `;

    }


    /* IRIS */

    else if (type === "iris") {

        content = `

            ${petal(50, 26, 15, 28)}
            ${petal(72, 40, 20, 13, 55)}
            ${petal(64, 66, 22, 12, 120)}
            ${petal(36, 66, 22, 12, -120)}
            ${petal(28, 40, 20, 13, -55)}

            <circle
                cx="50"
                cy="52"
                r="8"
                fill="#f1c66c"
            />

        `;

    }


    /* CHERRY BLOSSOM */

    else if (type === "cherry") {

        for (let i = 0; i < 5; i++) {

            const angle =
                i * 72;


            const x =
                50 + Math.cos(angle * Math.PI / 180) * 22;


            const y =
                50 + Math.sin(angle * Math.PI / 180) * 22;


            content += `
                <circle
                    cx="${x}"
                    cy="${y}"
                    r="16"
                    fill="${color}"
                />
            `;

        }


        content += `
            <circle
                cx="50"
                cy="50"
                r="8"
                fill="#d49b48"
            />
        `;

    }


    /* HYDRANGEA */

    else if (type === "hydrangea") {

        for (let i = 0; i < 9; i++) {

            const angle =
                i * 40;


            const x =
                50 + Math.cos(angle * Math.PI / 180) * 25;


            const y =
                50 + Math.sin(angle * Math.PI / 180) * 25;


            content += `

                <circle
                    cx="${x}"
                    cy="${y}"
                    r="14"
                    fill="${color}"
                />

                <circle
                    cx="${x}"
                    cy="${y}"
                    r="4"
                    fill="#f4d6df"
                />

            `;

        }

    }


    /* BABY'S BREATH */

    else if (type === "babys-breath") {

        content = `

            <path
                d="M50 90 C50 65 50 45 50 25"
                stroke="#7d9b7b"
                stroke-width="3"
                fill="none"
            />

            <path
                d="M50 55 L30 38 M50 48 L70 30 M50 68 L30 58 M50 65 L72 52"
                stroke="#7d9b7b"
                stroke-width="2"
                fill="none"
            />

            <g fill="#fffaf8">

                <circle cx="28" cy="36" r="7"/>
                <circle cx="70" cy="28" r="7"/>
                <circle cx="28" cy="57" r="7"/>
                <circle cx="73" cy="50" r="7"/>
                <circle cx="50" cy="23" r="7"/>

            </g>

        `;

    }


    /* SIMPLE SMALL FLOWERS */

    else {

        for (let i = 0; i < 8; i++) {

            const angle =
                i * 45;


            content += `
                <ellipse
                    cx="50"
                    cy="25"
                    rx="11"
                    ry="22"
                    fill="${color}"
                    transform="
                        rotate(${angle} 50 50)
                    "
                />
            `;

        }


        content += center;

    }


    return svgWrap(content);

}


/* =========================================================
   GREENERY SVG
   ========================================================= */

function greenerySVG(type, color) {

    let content = "";


    if (
        type === "eucalyptus" ||
        type === "olive" ||
        type === "mint"
    ) {

        content = `

            <path
                d="M50 92 C48 65 52 42 50 12"
                stroke="#657d62"
                stroke-width="3"
                fill="none"
            />

            <ellipse
                cx="38"
                cy="30"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(-25 38 30)"
            />

            <ellipse
                cx="64"
                cy="42"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(25 64 42)"
            />

            <ellipse
                cx="37"
                cy="54"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(-25 37 54)"
            />

            <ellipse
                cx="65"
                cy="67"
                rx="13"
                ry="7"
                fill="${color}"
                transform="rotate(25 65 67)"
            />

            <ellipse
                cx="43"
                cy="76"
                rx="12"
                ry="6"
                fill="${color}"
                transform="rotate(-20 43 76)"
            />

        `;

    }


    else if (
        type === "fern" ||
        type === "ruscus"
    ) {

        content = `

            <path
                d="M50 94 C50 65 49 40 50 8"
                stroke="#597558"
                stroke-width="3"
                fill="none"
            />

            <path
                d="M50 22 L28 14
                   M50 30 L72 21
                   M50 39 L25 32
                   M50 48 L75 40
                   M50 58 L22 52
                   M50 68 L77 60
                   M50 78 L28 72"
                stroke="${color}"
                stroke-width="5"
                fill="none"
            />

        `;

    }


    else if (type === "ivy") {

        content = `

            <path
                d="M50 90
                   C25 70 35 48 62 45
                   C78 43 78 25 62 14"
                stroke="#5f805e"
                stroke-width="4"
                fill="none"
            />

            <circle cx="38" cy="65" r="10" fill="${color}"/>
            <circle cx="51" cy="53" r="10" fill="${color}"/>
            <circle cx="65" cy="44" r="10" fill="${color}"/>
            <circle cx="68" cy="26" r="9" fill="${color}"/>

        `;

    }


    else if (type === "pampas") {

        content = `

            <path
                d="M50 92 C48 55 43 32 34 8"
                stroke="#9a886e"
                stroke-width="3"
                fill="none"
            />

            <path
                d="M50 92 C52 55 57 30 67 7"
                stroke="#9a886e"
                stroke-width="3"
                fill="none"
            />

            <ellipse
                cx="32"
                cy="15"
                rx="11"
                ry="20"
                fill="${color}"
                opacity=".8"
            />

            <ellipse
                cx="68"
                cy="14"
                rx="11"
                ry="20"
                fill="${color}"
                opacity=".8"
            />

        `;

    }


    else {

        content = `

            <path
                d="M50 92 C50 65 50 40 50 12"
                stroke="#779274"
                stroke-width="3"
            />

            <circle cx="35" cy="35" r="10" fill="${color}"/>
            <circle cx="65" cy="42" r="10" fill="${color}"/>
            <circle cx="38" cy="58" r="10" fill="${color}"/>
            <circle cx="64" cy="65" r="10" fill="${color}"/>

        `;

    }


    return svgWrap(content);

}


/* =========================================================
   TOTAL COUNTS
   ========================================================= */

function getTotalFlowers() {

    return Object.values(
        bouquet.flowers
    ).reduce(
        (total, flower) =>
            total + flower.quantity,
        0
    );

}


function getTotalGreenery() {

    return Object.values(
        bouquet.greenery
    ).reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            1800
        );

}


/* =========================================================
   UPDATE COUNTERS
   ========================================================= */

function updateAllCounts() {

    const flowers =
        getTotalFlowers();


    const green =
        getTotalGreenery();


    basketCount.textContent =
        flowers + green;


    const room1 =
        document.getElementById(
            "room1-count"
        );


    const room2 =
        document.getElementById(
            "room2-count"
        );


    const greenCount =
        document.getElementById(
            "greenery-count"
        );


    if (room1)
        room1.textContent = flowers;


    if (room2)
        room2.textContent = flowers;


    if (greenCount)
        greenCount.textContent = green;


    updateBasketPopup();

}


/* =========================================================
   FLOWER CARD
   ========================================================= */

function createFlowerCard(
    flower
) {

    const card =
        document.createElement("article");


    card.className =
        "flower-card";


    card.innerHTML = `

        <div class="flower-photo svg-flower-photo">

            ${flowerSVG(
                flower.type,
                flower.color
            )}

            <div class="flower-quantity">
                0
            </div>

        </div>


        <div class="flower-info">

            <h3>
                ${flower.name}
            </h3>

            <p>
                ${flower.meaning}
            </p>

        </div>


        <button
            type="button"
            class="flower-add"
        >
            +
        </button>

    `;


    const button =
        card.querySelector(
            ".flower-add"
        );


    button.addEventListener(
        "click",
        () => {

            addFlower(
                flower,
                card
            );

        }
    );


    return card;

}


/* =========================================================
   LOAD FLOWERS
   ========================================================= */

function loadFlowers(
    flowers,
    containerId
) {

    const container =
        document.getElementById(
            containerId
        );


    if (!container) return;


    container.innerHTML = "";


    flowers.forEach(
        flower => {

            container.appendChild(
                createFlowerCard(
                    flower
                )
            );

        }
    );

}


/* =========================================================
   ADD FLOWER
   ========================================================= */

function addFlower(
    flower,
    card
) {

    const key =
        flower.name;


    if (!bouquet.flowers[key]) {

        bouquet.flowers[key] = {

            name: flower.name,

            meaning: flower.meaning,

            type: flower.type,

            color: flower.color,

            quantity: 0

        };

    }


    bouquet.flowers[key].quantity++;


    const quantity =
        card.querySelector(
            ".flower-quantity"
        );


    quantity.textContent =
        bouquet.flowers[key].quantity;


    card.classList.add(
        "has-flower"
    );


    updateAllCounts();


    showToast(
        `${flower.name} added 🌷`
    );

}


/* =========================================================
   GREENERY CARDS
   ========================================================= */

function loadGreenery() {

    const container =
        document.getElementById(
            "greenery-grid"
        );


    if (!container) return;


    container.innerHTML = "";


    greenery.forEach(
        item => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "greenery-card";


            card.innerHTML = `

                <div class="greenery-photo svg-greenery-photo">

                    ${greenerySVG(
                        item.type,
                        item.color
                    )}

                    <span
                        class="greenery-quantity"
                    >
                        0
                    </span>

                </div>


                <div class="greenery-info">

                    <h3>
                        ${item.name}
                    </h3>

                </div>


                <button
                    type="button"
                    class="greenery-add"
                >
                    +
                </button>

            `;


            card.querySelector(
                ".greenery-add"
            ).addEventListener(
                "click",
                () => {

                    addGreenery(
                        item,
                        card
                    );

                }
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   ADD GREENERY
   ========================================================= */

function addGreenery(
    item,
    card
) {

    const key =
        item.name;


    if (!bouquet.greenery[key]) {

        bouquet.greenery[key] = {

            name: item.name,

            type: item.type,

            color: item.color,

            quantity: 0

        };

    }


    bouquet.greenery[key].quantity++;


    card.querySelector(
        ".greenery-quantity"
    ).textContent =
        bouquet.greenery[key].quantity;


    card.classList.add(
        "has-greenery"
    );


    updateAllCounts();


    showToast(
        `${item.name} added 🌿`
    );

}


/* =========================================================
   RIBBONS
   ========================================================= */

function loadRibbons() {

    const container =
        document.getElementById(
            "ribbon-grid"
        );


    if (!container) return;


    container.innerHTML = "";


    ribbons.forEach(
        ribbon => {

            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "ribbon-card";


            card.style.setProperty(
                "--ribbon-color",
                ribbon.color
            );


            card.innerHTML = `

                <span class="ribbon-bow-preview">

                    <span></span>
                    <span></span>
                    <b></b>

                </span>

                <strong>
                    ${ribbon.name}
                </strong>

            `;


            card.addEventListener(
                "click",
                () => {

                    chooseRibbon(
                        ribbon,
                        card
                    );

                }
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   CHOOSE RIBBON
   ========================================================= */

function chooseRibbon(
    ribbon,
    card
) {

    document
        .querySelectorAll(
            ".ribbon-card"
        )
        .forEach(
            item => {

                item.classList.remove(
                    "selected"
                );

            }
        );


    card.classList.add(
        "selected"
    );


    bouquet.ribbon =
        ribbon;


    const chosen =
        document.getElementById(
            "ribbon-chosen"
        );


    chosen.innerHTML = `

        <span
            class="chosen-ribbon-preview"
            style="
                --chosen-ribbon:${ribbon.color};
            "
        >
            🎀
        </span>

        <strong>
            ${ribbon.name}
        </strong>

        <span>
            ribbon selected
        </span>

    `;


    showToast(
        `${ribbon.name} ribbon chosen 🎀`
    );

}


/* =========================================================
   WRAPPING
   ========================================================= */

function loadWrapping() {

    const container =
        document.getElementById(
            "wrapping-grid"
        );


    if (!container) return;


    container.innerHTML = "";


    wrapping.forEach(
        paper => {

            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "wrapping-card";


            card.style.setProperty(
                "--paper-color",
                paper.color
            );


            card.innerHTML = `

                <span class="paper-sample"></span>

                <strong>
                    ${paper.name}
                </strong>

            `;


            card.addEventListener(
                "click",
                () => {

                    chooseWrapping(
                        paper,
                        card
                    );

                }
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   CHOOSE WRAPPING
   ========================================================= */

function chooseWrapping(
    paper,
    card
) {

    document
        .querySelectorAll(
            ".wrapping-card"
        )
        .forEach(
            item => {

                item.classList.remove(
                    "selected"
                );

            }
        );


    card.classList.add(
        "selected"
    );


    bouquet.wrapping =
        paper;


    const chosen =
        document.getElementById(
            "wrapping-chosen"
        );


    chosen.innerHTML = `

        <span
            class="chosen-paper"
            style="
                background:${paper.color};
            "
        ></span>

        <strong>
            ${paper.name}
        </strong>

        <span>
            wrapping selected
        </span>

    `;


    showToast(
        `${paper.name} wrapping chosen 📜`
    );

}


/* =========================================================
   BASKET
   ========================================================= */

function updateBasketPopup() {

    const container =
        document.getElementById(
            "basket-items"
        );


    const total =
        document.getElementById(
            "basket-total"
        );


    if (!container) return;


    const flowerEntries =
        Object.values(
            bouquet.flowers
        );


    const greeneryEntries =
        Object.values(
            bouquet.greenery
        );


    if (
        flowerEntries.length === 0 &&
        greeneryEntries.length === 0
    ) {

        container.innerHTML =
            "<p>Nothing yet... 🌱</p>";

    }

    else {

        container.innerHTML = "";


        flowerEntries.forEach(
            flower => {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "basket-item";


                row.innerHTML = `

                    <span>
                        ${flower.name}
                    </span>

                    <strong>
                        × ${flower.quantity}
                    </strong>

                `;


                container.appendChild(
                    row
                );

            }
        );


        greeneryEntries.forEach(
            item => {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "basket-item";


                row.innerHTML = `

                    <span>
                        ${item.name}
                    </span>

                    <strong>
                        × ${item.quantity}
                    </strong>

                `;


                container.appendChild(
                    row
                );

            }
        );

    }


    total.textContent =
        getTotalFlowers() +
        getTotalGreenery();

}


/* =========================================================
   BASKET OPEN/CLOSE
   ========================================================= */

document
    .getElementById("basket-button")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "basket-popup"
                )
                .classList.add(
                    "open"
                );

        }
    );


document
    .getElementById("close-basket")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "basket-popup"
                )
                .classList.remove(
                    "open"
                );

        }
    );


/* =========================================================
   ENTER SHOP
   ========================================================= */

document
    .getElementById("enter-shop")
    .addEventListener(
        "click",
        () => {

            goToRoom(1);

        }
    );


/* =========================================================
   ROOM BUTTONS
   ========================================================= */

document
    .getElementById("room1-next")
    .addEventListener(
        "click",
        () => {

            goToRoom(2);

        }
    );


document
    .getElementById("room2-next")
    .addEventListener(
        "click",
        () => {

            goToRoom(3);

        }
    );


document
    .getElementById("room3-next")
    .addEventListener(
        "click",
        () => {

            goToRoom(4);

        }
    );


document
    .getElementById("room4-next")
    .addEventListener(
        "click",
        () => {

            if (!bouquet.ribbon) {

                showToast(
                    "Choose a ribbon first 🎀"
                );

                return;

            }


            goToRoom(5);

        }
    );


document
    .getElementById("room5-next")
    .addEventListener(
        "click",
        () => {

            if (
                getTotalFlowers() === 0
            ) {

                showToast(
                    "Your bouquet needs at least one flower 🌷"
                );

                return;

            }


            if (!bouquet.wrapping) {

                showToast(
                    "Choose some wrapping first 📜"
                );

                return;

            }


            buildFinalBouquet();


            goToRoom(6);

        }
    );


/* =========================================================
   FINAL BOUQUET
   ========================================================= */

function buildFinalBouquet() {

    const container =
        document.getElementById(
            "final-bouquet"
        );


    const details =
        document.getElementById(
            "final-details"
        );


    container.innerHTML = "";


    details.innerHTML = "";


    /* -----------------------------------------
       BOUQUET WRAPPING
       ----------------------------------------- */

    const paper =
        document.createElement(
            "div"
        );


    paper.className =
        "final-paper";


    paper.style.setProperty(
        "--paper",
        bouquet.wrapping.color
    );


    container.appendChild(
        paper
    );


    /* -----------------------------------------
       GREENERY
       ----------------------------------------- */

    const greenLayer =
        document.createElement(
            "div"
        );


    greenLayer.className =
        "bouquet-greenery";


    const greeneryEntries =
        Object.values(
            bouquet.greenery
        );


    let greenIndex = 0;


    greeneryEntries.forEach(
        item => {

            for (
                let i = 0;
                i < item.quantity;
                i++
            ) {

                const stem =
                    document.createElement(
                        "div"
                    );


                stem.className =
                    "bouquet-green-piece";


                stem.innerHTML =
                    greenerySVG(
                        item.type,
                        item.color
                    );


                const positions = [
                    [8, 25, -25],
                    [18, 15, -18],
                    [30, 9, -10],
                    [50, 5, 0],
                    [70, 9, 10],
                    [82, 15, 18],
                    [92, 25, 25]
                ];


                const pos =
                    positions[
                        greenIndex %
                        positions.length
                    ];


                stem.style.left =
                    `${pos[0]}%`;


                stem.style.top =
                    `${pos[1]}%`;


                stem.style.transform =
                    `translate(-50%, -50%) rotate(${pos[2]}deg)`;


                greenLayer.appendChild(
                    stem
                );


                greenIndex++;

            }

        }
    );


    container.appendChild(
        greenLayer
    );


    /* -----------------------------------------
       FLOWERS
       ----------------------------------------- */

    const flowerLayer =
        document.createElement(
            "div"
        );


    flowerLayer.className =
        "bouquet-flowers";


    const chosenFlowers =
        Object.values(
            bouquet.flowers
        );


    const positions = [

        [50, 17, 0, 1.12],

        [35, 27, -10, 1],

        [65, 27, 10, 1],

        [23, 39, -17, .95],

        [50, 35, 0, 1.1],

        [77, 39, 17, .95],

        [35, 47, -8, .92],

        [65, 47, 8, .92],

        [49, 50, 0, 1],

        [22, 51, -20, .85],

        [78, 51, 20, .85],

        [41, 40, -5, .9],

        [59, 40, 5, .9],

        [30, 32, -14, .82],

        [70, 32, 14, .82],

        [50, 28, 0, .88],

        [38, 55, -10, .8],

        [62, 55, 10, .8]

    ];


    let flowerIndex = 0;


    chosenFlowers.forEach(
        flower => {

            for (
                let i = 0;
                i < flower.quantity;
                i++
            ) {

                const piece =
                    document.createElement(
                        "div"
                    );


                piece.className =
                    "bouquet-flower";


                piece.innerHTML =
                    flowerSVG(
                        flower.type,
                        flower.color
                    );


                const pos =
                    positions[
                        flowerIndex %
                        positions.length
                    ];


                piece.style.left =
                    `${pos[0]}%`;


                piece.style.top =
                    `${pos[1]}%`;


                piece.style.setProperty(
                    "--flower-scale",
                    pos[3]
                );


                piece.style.transform =
                    `translate(-50%, -50%) rotate(${pos[2]}deg) scale(${pos[3]})`;


                piece.style.zIndex =
                    30 + flowerIndex;


                flowerLayer.appendChild(
                    piece
                );


                flowerIndex++;

            }

        }
    );


    container.appendChild(
        flowerLayer
    );


    /* -----------------------------------------
       STEMS
       ----------------------------------------- */

    const stems =
        document.createElement(
            "div"
        );


    stems.className =
        "bouquet-stems";


    for (
        let i = 0;
        i < Math.min(
            getTotalFlowers(),
            18
        );
        i++
    ) {

        const stem =
            document.createElement(
                "span"
            );


        const angle =
            (i - 8) * 2;


        stem.style.transform =
            `rotate(${angle}deg)`;


        stems.appendChild(
            stem
        );

    }


    container.appendChild(
        stems
    );


    /* -----------------------------------------
       RIBBON BOW
       ----------------------------------------- */

    if (bouquet.ribbon) {

        const bow =
            document.createElement(
                "div"
            );


        bow.className =
            "final-bow";


        bow.style.setProperty(
            "--ribbon",
            bouquet.ribbon.color
        );


        bow.innerHTML = `

            <span class="bow-left"></span>

            <span class="bow-right"></span>

            <span class="bow-knot"></span>

            <span class="bow-tail-left"></span>

            <span class="bow-tail-right"></span>

        `;


        container.appendChild(
            bow
        );

    }


    /* -----------------------------------------
       DETAILS
       ----------------------------------------- */

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        "You chose";


    details.appendChild(
        title
    );


    chosenFlowers.forEach(
        flower => {

            const row =
                document.createElement(
                    "p"
                );


            row.innerHTML = `

                <span>
                    ${flower.name}
                </span>

                <strong>
                    × ${flower.quantity}
                </strong>

            `;


            details.appendChild(
                row
            );

        }
    );


    if (
        getTotalGreenery() > 0
    ) {

        const heading =
            document.createElement(
                "h4"
            );


        heading.textContent =
            "Greenery";


        details.appendChild(
            heading
        );


        greeneryEntries.forEach(
            item => {

                const row =
                    document.createElement(
                        "p"
                    );


                row.innerHTML = `

                    <span>
                        ${item.name}
                    </span>

                    <strong>
                        × ${item.quantity}
                    </strong>

                `;


                details.appendChild(
                    row
                );

            }
        );

    }


    const ribbonRow =
        document.createElement(
            "p"
        );


    ribbonRow.innerHTML = `

        <span>
            🎀 ${bouquet.ribbon.name}
        </span>

    `;


    details.appendChild(
        ribbonRow
    );


    const wrappingRow =
        document.createElement(
            "p"
        );


    wrappingRow.innerHTML = `

        <span>
            📜 ${bouquet.wrapping.name}
        </span>

    `;


    details.appendChild(
        wrappingRow
    );

}


/* =========================================================
   FINAL BUTTON
   ========================================================= */

document
    .getElementById("final-button")
    .addEventListener(
        "click",
        event => {

            const button =
                event.currentTarget;


            button.textContent =
                "💐 This one's yours, Krishna.";


            button.classList.add(
                "accepted"
            );


            showToast(
                "Made especially for you 💗"
            );

        }
    );


/* =========================================================
   START AGAIN
   ========================================================= */

document
    .getElementById("start-again")
    .addEventListener(
        "click",
        () => {

            bouquet.flowers = {};

            bouquet.greenery = {};

            bouquet.ribbon = null;

            bouquet.wrapping = null;


            document
                .querySelectorAll(
                    ".flower-card"
                )
                .forEach(
                    card => {

                        card.classList.remove(
                            "has-flower"
                        );


                        const quantity =
                            card.querySelector(
                                ".flower-quantity"
                            );


                        if (quantity) {

                            quantity.textContent =
                                "0";

                        }

                    }
                );


            document
                .querySelectorAll(
                    ".greenery-card"
                )
                .forEach(
                    card => {

                        card.classList.remove(
                            "has-greenery"
                        );


                        const quantity =
                            card.querySelector(
                                ".greenery-quantity"
                            );


                        if (quantity) {

                            quantity.textContent =
                                "0";

                        }

                    }
                );


            document
                .querySelectorAll(
                    ".ribbon-card"
                )
                .forEach(
                    card => {

                        card.classList.remove(
                            "selected"
                        );

                    }
                );


            document
                .querySelectorAll(
                    ".wrapping-card"
                )
                .forEach(
                    card => {

                        card.classList.remove(
                            "selected"
                        );

                    }
                );


            document.getElementById(
                "ribbon-chosen"
            ).textContent =
                "No ribbon chosen yet.";


            document.getElementById(
                "wrapping-chosen"
            ).textContent =
                "No wrapping chosen yet.";


            const finalButton =
                document.getElementById(
                    "final-button"
                );


            finalButton.textContent =
                "This one's yours 💐";


            finalButton.classList.remove(
                "accepted"
            );


            updateAllCounts();


            goToRoom(0);

        }
    );


/* =========================================================
   INITIALIZE
   ========================================================= */

loadFlowers(
    flowersRoom1,
    "flower-grid-1"
);


loadFlowers(
    flowersRoom2,
    "flower-grid-2"
);


loadGreenery();


loadRibbons();


loadWrapping();


updateAllCounts();


goToRoom(0);
