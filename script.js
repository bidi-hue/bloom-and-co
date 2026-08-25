/* =========================================================
   BLOOM & CO.
   KRISHNA'S VIRTUAL FLOWER SHOP
   ========================================================= */


/* =========================================================
   FIXED FLOWER IMAGES
   IMPORTANT:
   These are FIXED images.
   No random image generator is used.
   ========================================================= */

const FLOWER_IMAGES = {

    redRose:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85",

    pinkRose:
        "https://images.unsplash.com/photo-1455659817273-f96807779d8a?auto=format&fit=crop&w=700&q=85",

    whiteRose:
        "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=700&q=85",

    yellowRose:
        "https://images.unsplash.com/photo-1518882605630-8eb9f5a7b4f1?auto=format&fit=crop&w=700&q=85",

    sunflower:
        "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=700&q=85",

    tulip:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=85",

    lily:
        "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?auto=format&fit=crop&w=700&q=85",

    orchid:
        "https://images.unsplash.com/photo-1563770095-39d46e7d4c14?auto=format&fit=crop&w=700&q=85",

    daisy:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85",

    peony:
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=85",

    carnation:
        "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=700&q=85",

    lavender:
        "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=700&q=85",

    lotus:
        "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=700&q=85",

    cherry:
        "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=700&q=85",

    iris:
        "https://images.unsplash.com/photo-1589994160839-163cd867cfe8?auto=format&fit=crop&w=700&q=85",

    chrysanthemum:
        "https://images.unsplash.com/photo-1576856497337-4fefc3f9f7c9?auto=format&fit=crop&w=700&q=85",

    daffodil:
        "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=85",

    hydrangea:
        "https://images.unsplash.com/photo-1560717845-968823efbee1?auto=format&fit=crop&w=700&q=85",

    babysBreath:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=85",

    freesia:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=85"

};


/* =========================================================
   ROOM I — FLOWERS
   ========================================================= */

const flowersRoom1 = [

    {
        name: "Red Rose",
        meaning: "Love",
        image: FLOWER_IMAGES.redRose
    },

    {
        name: "Pink Rose",
        meaning: "Gratitude",
        image: FLOWER_IMAGES.pinkRose
    },

    {
        name: "White Rose",
        meaning: "Innocence",
        image: FLOWER_IMAGES.whiteRose
    },

    {
        name: "Yellow Rose",
        meaning: "Friendship",
        image: FLOWER_IMAGES.yellowRose
    },

    {
        name: "Sunflower",
        meaning: "Adoration",
        image: FLOWER_IMAGES.sunflower
    },

    {
        name: "Tulip",
        meaning: "Perfect Love",
        image: FLOWER_IMAGES.tulip
    },

    {
        name: "White Lily",
        meaning: "Purity",
        image: FLOWER_IMAGES.lily
    },

    {
        name: "Orchid",
        meaning: "Beauty",
        image: FLOWER_IMAGES.orchid
    },

    {
        name: "Daisy",
        meaning: "Innocence",
        image: FLOWER_IMAGES.daisy
    },

    {
        name: "Peony",
        meaning: "Prosperity",
        image: FLOWER_IMAGES.peony
    },

    {
        name: "Carnation",
        meaning: "Admiration",
        image: FLOWER_IMAGES.carnation
    },

    {
        name: "Lavender",
        meaning: "Calmness",
        image: FLOWER_IMAGES.lavender
    },

    {
        name: "Lotus",
        meaning: "Enlightenment",
        image: FLOWER_IMAGES.lotus
    },

    {
        name: "Cherry Blossom",
        meaning: "New Beginnings",
        image: FLOWER_IMAGES.cherry
    },

    {
        name: "Iris",
        meaning: "Hope",
        image: FLOWER_IMAGES.iris
    },

    {
        name: "Chrysanthemum",
        meaning: "Friendship",
        image: FLOWER_IMAGES.chrysanthemum
    },

    {
        name: "Daffodil",
        meaning: "New Beginnings",
        image: FLOWER_IMAGES.daffodil
    },

    {
        name: "Hydrangea",
        meaning: "Gratitude",
        image: FLOWER_IMAGES.hydrangea
    },

    {
        name: "Baby's Breath",
        meaning: "Innocence",
        image: FLOWER_IMAGES.babysBreath
    },

    {
        name: "Freesia",
        meaning: "Trust",
        image: FLOWER_IMAGES.freesia
    }

];


/* =========================================================
   ROOM II — MORE FLOWERS
   ========================================================= */

const flowersRoom2 = [

    {
        name: "Poppy",
        meaning: "Remembrance",
        image: FLOWER_IMAGES.daisy
    },

    {
        name: "Magnolia",
        meaning: "Nobility",
        image: FLOWER_IMAGES.whiteRose
    },

    {
        name: "Zinnia",
        meaning: "Lasting Friendship",
        image: FLOWER_IMAGES.carnation
    },

    {
        name: "Bluebell",
        meaning: "Humility",
        image: FLOWER_IMAGES.lavender
    },

    {
        name: "Ranunculus",
        meaning: "Charm",
        image: FLOWER_IMAGES.peony
    },

    {
        name: "Anemone",
        meaning: "Anticipation",
        image: FLOWER_IMAGES.orchid
    },

    {
        name: "Alstroemeria",
        meaning: "Friendship",
        image: FLOWER_IMAGES.tulip
    },

    {
        name: "Amaryllis",
        meaning: "Pride",
        image: FLOWER_IMAGES.redRose
    },

    {
        name: "Calla Lily",
        meaning: "Elegance",
        image: FLOWER_IMAGES.lily
    },

    {
        name: "Gerbera Daisy",
        meaning: "Cheerfulness",
        image: FLOWER_IMAGES.sunflower
    },

    {
        name: "Blue Orchid",
        meaning: "Mystery",
        image: FLOWER_IMAGES.orchid
    },

    {
        name: "Snapdragon",
        meaning: "Grace",
        image: FLOWER_IMAGES.carnation
    },

    {
        name: "Stock",
        meaning: "Lasting Beauty",
        image: FLOWER_IMAGES.freesia
    },

    {
        name: "Heather",
        meaning: "Solitude",
        image: FLOWER_IMAGES.lavender
    },

    {
        name: "Purple Tulip",
        meaning: "Royalty",
        image: FLOWER_IMAGES.tulip
    },

    {
        name: "Yarrow",
        meaning: "Healing",
        image: FLOWER_IMAGES.babysBreath
    },

    {
        name: "Queen Anne's Lace",
        meaning: "Sanctuary",
        image: FLOWER_IMAGES.babysBreath
    },

    {
        name: "Garden Rose",
        meaning: "Grace",
        image: FLOWER_IMAGES.pinkRose
    },

    {
        name: "Cosmos",
        meaning: "Harmony",
        image: FLOWER_IMAGES.daisy
    },

    {
        name: "Hibiscus",
        meaning: "Delicate Beauty",
        image: FLOWER_IMAGES.redRose
    }

];


/* =========================================================
   GREENERY
   ========================================================= */

const greenery = [

    {
        name: "Eucalyptus",
        image:
            "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Fern",
        image:
            "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Baby's Breath",
        image:
            FLOWER_IMAGES.babysBreath
    },

    {
        name: "Olive Branch",
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Ivy",
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Ruscus",
        image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Mint",
        image:
            "https://images.unsplash.com/photo-1628556270448-4d4e4148e1e8?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Pampas Grass",
        image:
            "https://images.unsplash.com/photo-1592215572446-5f5d3f9b9e0d?auto=format&fit=crop&w=600&q=80"
    }

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
   WRAPPING PAPER
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

let currentRoom = 0;

const totalRooms = 7;

const rooms =
    document.querySelectorAll(".shop-room");

const progressFill =
    document.getElementById("progress-fill");

const basketCount =
    document.getElementById("basket-count");

const toast =
    document.getElementById("toast");


/* =========================================================
   ROOM NAVIGATION
   ========================================================= */

function goToRoom(roomNumber) {

    rooms.forEach((room) => {

        room.classList.remove("active");

    });


    const target =
        document.getElementById(
            `room-${roomNumber}`
        );


    if (!target) return;


    target.classList.add("active");

    currentRoom = roomNumber;


    const progress =
        (roomNumber / (totalRooms - 1)) * 100;


    if (progressFill) {

        progressFill.style.width =
            `${progress}%`;

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    updateAllCounts();

}


/* =========================================================
   TOTAL FLOWERS
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


/* =========================================================
   TOTAL GREENERY
   ========================================================= */

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
   COUNTERS
   ========================================================= */

function updateAllCounts() {

    const flowers =
        getTotalFlowers();

    const green =
        getTotalGreenery();


    if (basketCount) {

        basketCount.textContent =
            flowers + green;

    }


    const room1 =
        document.getElementById(
            "room1-count"
        );

    const room2 =
        document.getElementById(
            "room2-count"
        );

    const greeneryCount =
        document.getElementById(
            "greenery-count"
        );


    if (room1)
        room1.textContent = flowers;

    if (room2)
        room2.textContent = flowers;

    if (greeneryCount)
        greeneryCount.textContent = green;


    updateBasketPopup();

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 1800);

}


/* =========================================================
   FLOWER CARD
   ========================================================= */

function createFlowerCard(
    flower,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "flower-card";


    card.dataset.name =
        flower.name;


    card.innerHTML = `

        <div class="flower-photo">

            <img
                src="${flower.image}"
                alt="${flower.name}"
                loading="lazy"
            >

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
            aria-label="Add ${flower.name}"
        >
            +
        </button>

    `;


    const addButton =
        card.querySelector(
            ".flower-add"
        );


    addButton.addEventListener(
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
        (flower, index) => {

            container.appendChild(
                createFlowerCard(
                    flower,
                    index
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

            image: flower.image,

            quantity: 0

        };

    }


    bouquet.flowers[key].quantity++;


    updateFlowerCard(
        card,
        bouquet.flowers[key].quantity
    );


    updateAllCounts();


    showToast(
        `${flower.name} added 🌷`
    );

}


/* =========================================================
   UPDATE FLOWER CARD
   ========================================================= */

function updateFlowerCard(
    card,
    quantity
) {

    const quantityBox =
        card.querySelector(
            ".flower-quantity"
        );


    if (quantityBox) {

        quantityBox.textContent =
            quantity;

    }


    card.classList.toggle(
        "has-flower",
        quantity > 0
    );

}


/* =========================================================
   GREENERY
   ========================================================= */

function loadGreenery() {

    const container =
        document.getElementById(
            "greenery-grid"
        );


    if (!container) return;


    container.innerHTML = "";


    greenery.forEach(
        (item) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "greenery-card";


            card.innerHTML = `

                <div class="greenery-photo">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                    >

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
                    aria-label="Add ${item.name}"
                >
                    +
                </button>

            `;


            const button =
                card.querySelector(
                    ".greenery-add"
                );


            button.addEventListener(
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

            image: item.image,

            quantity: 0

        };

    }


    bouquet.greenery[key].quantity++;


    const quantity =
        card.querySelector(
            ".greenery-quantity"
        );


    quantity.textContent =
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
        (ribbon) => {

            const card =
                document.createElement(
                    "button"
                );


            card.type = "button";

            card.className =
                "ribbon-card";


            card.style.setProperty(
                "--ribbon-color",
                ribbon.color
            );


            card.innerHTML = `

                <span
                    class="ribbon-visual"
                    style="
                        color:${ribbon.color};
                    "
                ></span>

                <span
                    class="ribbon-name"
                >
                    ${ribbon.name}
                </span>

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
            (item) => {

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


    if (chosen) {

        chosen.innerHTML = `

            <span
                style="
                    display:inline-block;
                    width:24px;
                    height:24px;
                    border-radius:50%;
                    background:${ribbon.color};
                    vertical-align:middle;
                    margin-right:8px;
                "
            ></span>

            <strong>
                ${ribbon.name}
            </strong>

            <span>
                ribbon selected
            </span>

        `;

    }


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
        (paper) => {

            const card =
                document.createElement(
                    "button"
                );


            card.type = "button";

            card.className =
                "wrapping-card";


            card.style.setProperty(
                "--paper-color",
                paper.color
            );


            card.innerHTML = `

                <span
                    class="paper-sample"
                ></span>

                <span>
                    ${paper.name}
                </span>

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
            (item) => {

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


    if (chosen) {

        chosen.innerHTML = `

            <span
                class="chosen-paper"
                style="
                    display:inline-block;
                    width:24px;
                    height:24px;
                    border-radius:6px;
                    background:${paper.color};
                    vertical-align:middle;
                    margin-right:8px;
                "
            ></span>

            <strong>
                ${paper.name}
            </strong>

            <span>
                wrapping selected
            </span>

        `;

    }


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

    } else {

        container.innerHTML = "";


        flowerEntries.forEach(
            (flower) => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "basket-item";


                item.innerHTML = `

                    <span>
                        ${flower.name}
                    </span>

                    <strong>
                        × ${flower.quantity}
                    </strong>

                `;


                container.appendChild(
                    item
                );

            }
        );


        greeneryEntries.forEach(
            (itemData) => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "basket-item";


                item.innerHTML = `

                    <span>
                        ${itemData.name}
                    </span>

                    <strong>
                        × ${itemData.quantity}
                    </strong>

                `;


                container.appendChild(
                    item
                );

            }
        );

    }


    if (total) {

        total.textContent =
            getTotalFlowers() +
            getTotalGreenery();

    }

}


/* =========================================================
   BASKET OPEN
   ========================================================= */

const basketButton =
    document.getElementById(
        "basket-button"
    );


if (basketButton) {

    basketButton.addEventListener(
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

}


/* =========================================================
   BASKET CLOSE
   ========================================================= */

const closeBasket =
    document.getElementById(
        "close-basket"
    );


if (closeBasket) {

    closeBasket.addEventListener(
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

}


/* =========================================================
   ENTER SHOP
   ========================================================= */

const enterShop =
    document.getElementById(
        "enter-shop"
    );


if (enterShop) {

    enterShop.addEventListener(
        "click",
        () => {

            goToRoom(1);

        }
    );

}


/* =========================================================
   ROOM 1 → ROOM 2
   ========================================================= */

document
    .getElementById(
        "room1-next"
    )
    ?.addEventListener(
        "click",
        () => {

            goToRoom(2);

        }
    );


/* =========================================================
   ROOM 2 → ROOM 3
   ========================================================= */

document
    .getElementById(
        "room2-next"
    )
    ?.addEventListener(
        "click",
        () => {

            goToRoom(3);

        }
    );


/* =========================================================
   ROOM 3 → ROOM 4
   ========================================================= */

document
    .getElementById(
        "room3-next"
    )
    ?.addEventListener(
        "click",
        () => {

            goToRoom(4);

        }
    );


/* =========================================================
   ROOM 4 → ROOM 5
   ========================================================= */

document
    .getElementById(
        "room4-next"
    )
    ?.addEventListener(
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


/* =========================================================
   ROOM 5 → FINAL
   ========================================================= */

document
    .getElementById(
        "room5-next"
    )
    ?.addEventListener(
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
   CREATE FINAL FLOWER
   ========================================================= */

function createFinalFlower(
    flower,
    index,
    total
) {

    const image =
        document.createElement(
            "img"
        );


    image.src =
        flower.image;

    image.alt =
        flower.name;

    image.className =
        "final-flower-image";


    /*
       Arrange flowers in a natural
       bouquet fan.

       Center flowers are higher.
       Side flowers spread outward.
    */

    const positions = [

        [50, 42, -4],

        [37, 48, -15],

        [63, 48, 15],

        [27, 58, -24],

        [73, 58, 24],

        [42, 32, -10],

        [58, 32, 10],

        [20, 68, -30],

        [80, 68, 30],

        [34, 67, -14],

        [66, 67, 14],

        [50, 24, 0]

    ];


    const position =
        positions[
            index %
            positions.length
        ];


    image.style.left =
        `${position[0]}%`;


    image.style.top =
        `${position[1]}%`;


    image.style.setProperty(
        "--flower-angle",
        `${position[2]}deg`
    );


    image.style.setProperty(
        "--flower-delay",
        `${index * 0.05}s`
    );


    /*
       Slight size variation makes
       the bouquet feel less artificial.
    */

    const sizes = [
        72,
        78,
        70,
        74,
        68
    ];


    const size =
        sizes[
            index %
            sizes.length
        ];


    image.style.width =
        `${size}px`;

    image.style.height =
        `${size}px`;


    return image;

}


/* =========================================================
   CREATE FINAL GREENERY
   ========================================================= */

function createFinalGreenery(
    item,
    index
) {

    const image =
        document.createElement(
            "img"
        );


    image.src =
        item.image;

    image.alt =
        item.name;

    image.className =
        "final-green-image";


    const positions = [

        [7, 35, -32],

        [17, 20, -22],

        [83, 20, 22],

        [93, 35, 32],

        [12, 62, -40],

        [88, 62, 40]

    ];


    const position =
        positions[
            index %
            positions.length
        ];


    image.style.left =
        `${position[0]}%`;


    image.style.top =
        `${position[1]}%`;


    image.style.transform =
        `translate(-50%, -50%) rotate(${position[2]}deg)`;


    return image;

}


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


    if (!container) return;


    container.innerHTML = "";


    if (details) {

        details.innerHTML = "";

    }


    /* -----------------------------------------------------
       WRAPPING
       ----------------------------------------------------- */

    const paper =
        document.createElement(
            "div"
        );


    paper.className =
        "final-paper";


    paper.style.background =
        bouquet.wrapping
            ? bouquet.wrapping.color
            : "#e8b7c1";


    container.appendChild(
        paper
    );


    /* -----------------------------------------------------
       GREENERY
       ----------------------------------------------------- */

    const greenArea =
        document.createElement(
            "div"
        );


    greenArea.className =
        "final-greenery-area";


    let greenIndex = 0;


    Object.values(
        bouquet.greenery
    ).forEach(
        (item) => {

            for (
                let i = 0;
                i < item.quantity;
                i++
            ) {

                greenArea.appendChild(
                    createFinalGreenery(
                        item,
                        greenIndex
                    )
                );


                greenIndex++;

            }

        }
    );


    container.appendChild(
        greenArea
    );


    /* -----------------------------------------------------
       FLOWERS
       ----------------------------------------------------- */

    const flowerArea =
        document.createElement(
            "div"
        );


    flowerArea.className =
        "final-flower-area";


    const chosenFlowers =
        Object.values(
            bouquet.flowers
        );


    let flowerIndex = 0;


    chosenFlowers.forEach(
        (flower) => {

            for (
                let i = 0;
                i < flower.quantity;
                i++
            ) {

                flowerArea.appendChild(

                    createFinalFlower(
                        flower,
                        flowerIndex,
                        getTotalFlowers()
                    )

                );


                flowerIndex++;

            }

        }
    );


    container.appendChild(
        flowerArea
    );


    /* -----------------------------------------------------
       RIBBON
       ----------------------------------------------------- */

    if (bouquet.ribbon) {

        const ribbon =
            document.createElement(
                "div"
            );


        ribbon.className =
            "final-ribbon";


        ribbon.style.setProperty(
            "--selected-ribbon-color",
            bouquet.ribbon.color
        );


        ribbon.innerHTML = `

            <span
                class="ribbon-knot"
            ></span>

            <span
                class="ribbon-tail-left"
            ></span>

            <span
                class="ribbon-tail-right"
            ></span>

        `;


        container.appendChild(
            ribbon
        );

    }


    /* -----------------------------------------------------
       DETAILS
       ----------------------------------------------------- */

    if (!details) return;


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
        (flower) => {

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

        const greenTitle =
            document.createElement(
                "h4"
            );


        greenTitle.textContent =
            "Greenery";


        details.appendChild(
            greenTitle
        );


        Object.values(
            bouquet.greenery
        ).forEach(
            (item) => {

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


    if (bouquet.ribbon) {

        const ribbon =
            document.createElement(
                "p"
            );


        ribbon.innerHTML = `

            <span>
                🎀 ${bouquet.ribbon.name}
            </span>

        `;


        details.appendChild(
            ribbon
        );

    }


    if (bouquet.wrapping) {

        const wrap =
            document.createElement(
                "p"
            );


        wrap.innerHTML = `

            <span>
                📜 ${bouquet.wrapping.name}
            </span>

        `;


        details.appendChild(
            wrap
        );

    }

}


/* =========================================================
   FINAL BUTTON
   ========================================================= */

document
    .getElementById(
        "final-button"
    )
    ?.addEventListener(
        "click",
        () => {

            const button =
                document.getElementById(
                    "final-button"
                );


            if (!button) return;


            button.textContent =
                "💐 This one's yours, Krishna.";


            button.classList.add(
                "accepted"
            );


            showToast(
                "Bouquet saved in your heart 💗"
            );

        }
    );


/* =========================================================
   START AGAIN
   ========================================================= */

document
    .getElementById(
        "start-again"
    )
    ?.addEventListener(
        "click",
        () => {

            Object.keys(
                bouquet.flowers
            ).forEach(
                (key) => {

                    delete bouquet.flowers[key];

                }
            );


            Object.keys(
                bouquet.greenery
            ).forEach(
                (key) => {

                    delete bouquet.greenery[key];

                }
            );


            bouquet.ribbon =
                null;


            bouquet.wrapping =
                null;


            document
                .querySelectorAll(
                    ".flower-card"
                )
                .forEach(
                    (card) => {

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
                    (card) => {

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
                    (card) => {

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
                    (card) => {

                        card.classList.remove(
                            "selected"
                        );

                    }
                );


            const ribbonChosen =
                document.getElementById(
                    "ribbon-chosen"
                );


            if (ribbonChosen) {

                ribbonChosen.textContent =
                    "No ribbon chosen yet.";

            }


            const wrappingChosen =
                document.getElementById(
                    "wrapping-chosen"
                );


            if (wrappingChosen) {

                wrappingChosen.textContent =
                    "No wrapping chosen yet.";

            }


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
