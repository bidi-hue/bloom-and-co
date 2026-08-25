/* =========================================================
   BLOOM & CO.
   KRISHNA'S VIRTUAL FLOWER SHOP
   ========================================================= */


/* =========================================================
   FLOWER DATA
   20 FLOWERS IN ROOM I
   20 DIFFERENT FLOWERS IN ROOM II

   The images are loaded from the internet so we don't
   need to put 40 image files inside your GitHub repository.
   ========================================================= */

const flowersRoom1 = [

    {
        name: "Red Rose",
        meaning: "Love",
        image: "https://loremflickr.com/500/400/red,rose?lock=1"
    },

    {
        name: "Pink Rose",
        meaning: "Gratitude",
        image: "https://loremflickr.com/500/400/pink,rose?lock=2"
    },

    {
        name: "White Rose",
        meaning: "Innocence",
        image: "https://loremflickr.com/500/400/white,rose?lock=3"
    },

    {
        name: "Yellow Rose",
        meaning: "Friendship",
        image: "https://loremflickr.com/500/400/yellow,rose?lock=4"
    },

    {
        name: "Sunflower",
        meaning: "Adoration",
        image: "https://loremflickr.com/500/400/sunflower?lock=5"
    },

    {
        name: "Tulip",
        meaning: "Perfect Love",
        image: "https://loremflickr.com/500/400/tulip?lock=6"
    },

    {
        name: "White Lily",
        meaning: "Purity",
        image: "https://loremflickr.com/500/400/white,lily?lock=7"
    },

    {
        name: "Orchid",
        meaning: "Beauty",
        image: "https://loremflickr.com/500/400/orchid,flower?lock=8"
    },

    {
        name: "Daisy",
        meaning: "Innocence",
        image: "https://loremflickr.com/500/400/daisy,flower?lock=9"
    },

    {
        name: "Peony",
        meaning: "Prosperity",
        image: "https://loremflickr.com/500/400/peony,flower?lock=10"
    },

    {
        name: "Carnation",
        meaning: "Admiration",
        image: "https://loremflickr.com/500/400/carnation,flower?lock=11"
    },

    {
        name: "Lavender",
        meaning: "Calmness",
        image: "https://loremflickr.com/500/400/lavender,flower?lock=12"
    },

    {
        name: "Lotus",
        meaning: "Enlightenment",
        image: "https://loremflickr.com/500/400/lotus,flower?lock=13"
    },

    {
        name: "Cherry Blossom",
        meaning: "New Beginnings",
        image: "https://loremflickr.com/500/400/cherry,blossom?lock=14"
    },

    {
        name: "Iris",
        meaning: "Hope",
        image: "https://loremflickr.com/500/400/iris,flower?lock=15"
    },

    {
        name: "Chrysanthemum",
        meaning: "Friendship",
        image: "https://loremflickr.com/500/400/chrysanthemum?lock=16"
    },

    {
        name: "Daffodil",
        meaning: "New Beginnings",
        image: "https://loremflickr.com/500/400/daffodil,flower?lock=17"
    },

    {
        name: "Hydrangea",
        meaning: "Gratitude",
        image: "https://loremflickr.com/500/400/hydrangea?lock=18"
    },

    {
        name: "Baby's Breath",
        meaning: "Innocence",
        image: "https://loremflickr.com/500/400/babys,breath,flower?lock=19"
    },

    {
        name: "Freesia",
        meaning: "Trust",
        image: "https://loremflickr.com/500/400/freesia,flower?lock=20"
    }

];


const flowersRoom2 = [

    {
        name: "Poppy",
        meaning: "Remembrance",
        image: "https://loremflickr.com/500/400/poppy,flower?lock=21"
    },

    {
        name: "Magnolia",
        meaning: "Nobility",
        image: "https://loremflickr.com/500/400/magnolia,flower?lock=22"
    },

    {
        name: "Zinnia",
        meaning: "Lasting Friendship",
        image: "https://loremflickr.com/500/400/zinnia,flower?lock=23"
    },

    {
        name: "Bluebell",
        meaning: "Humility",
        image: "https://loremflickr.com/500/400/bluebell,flower?lock=24"
    },

    {
        name: "Ranunculus",
        meaning: "Charm",
        image: "https://loremflickr.com/500/400/ranunculus,flower?lock=25"
    },

    {
        name: "Anemone",
        meaning: "Anticipation",
        image: "https://loremflickr.com/500/400/anemone,flower?lock=26"
    },

    {
        name: "Alstroemeria",
        meaning: "Friendship",
        image: "https://loremflickr.com/500/400/alstroemeria,flower?lock=27"
    },

    {
        name: "Amaryllis",
        meaning: "Pride",
        image: "https://loremflickr.com/500/400/amaryllis,flower?lock=28"
    },

    {
        name: "Calla Lily",
        meaning: "Elegance",
        image: "https://loremflickr.com/500/400/calla,lily?lock=29"
    },

    {
        name: "Gerbera Daisy",
        meaning: "Cheerfulness",
        image: "https://loremflickr.com/500/400/gerbera,daisy?lock=30"
    },

    {
        name: "Blue Orchid",
        meaning: "Mystery",
        image: "https://loremflickr.com/500/400/blue,orchid?lock=31"
    },

    {
        name: "Snapdragon",
        meaning: "Grace",
        image: "https://loremflickr.com/500/400/snapdragon,flower?lock=32"
    },

    {
        name: "Stock",
        meaning: "Lasting Beauty",
        image: "https://loremflickr.com/500/400/stock,flower?lock=33"
    },

    {
        name: "Heather",
        meaning: "Solitude",
        image: "https://loremflickr.com/500/400/heather,flower?lock=34"
    },

    {
        name: "Purple Tulip",
        meaning: "Royalty",
        image: "https://loremflickr.com/500/400/purple,tulip?lock=35"
    },

    {
        name: "Yarrow",
        meaning: "Healing",
        image: "https://loremflickr.com/500/400/yarrow,flower?lock=36"
    },

    {
        name: "Queen Anne's Lace",
        meaning: "Sanctuary",
        image: "https://loremflickr.com/500/400/queen,annes,lace?lock=37"
    },

    {
        name: "Garden Rose",
        meaning: "Grace",
        image: "https://loremflickr.com/500/400/garden,rose?lock=38"
    },

    {
        name: "Cosmos",
        meaning: "Harmony",
        image: "https://loremflickr.com/500/400/cosmos,flower?lock=39"
    },

    {
        name: "Hibiscus",
        meaning: "Delicate Beauty",
        image: "https://loremflickr.com/500/400/hibiscus,flower?lock=40"
    }

];


/* =========================================================
   GREENERY
   ========================================================= */

const greenery = [

    {
        name: "Eucalyptus",
        image: "https://loremflickr.com/500/400/eucalyptus,leaves?lock=51"
    },

    {
        name: "Fern",
        image: "https://loremflickr.com/500/400/fern,leaves?lock=52"
    },

    {
        name: "Baby's Breath",
        image: "https://loremflickr.com/500/400/babys,breath?lock=53"
    },

    {
        name: "Olive Branch",
        image: "https://loremflickr.com/500/400/olive,branch?lock=54"
    },

    {
        name: "Ivy",
        image: "https://loremflickr.com/500/400/ivy,leaves?lock=55"
    },

    {
        name: "Ruscus",
        image: "https://loremflickr.com/500/400/greenery,leaves?lock=56"
    },

    {
        name: "Mint",
        image: "https://loremflickr.com/500/400/mint,leaves?lock=57"
    },

    {
        name: "Pampas Grass",
        image: "https://loremflickr.com/500/400/pampas,grass?lock=58"
    }

];


/* =========================================================
   RIBBONS
   ========================================================= */

const ribbons = [

    {
        name: "Blush Pink",
        color: "#d99aaa",
        emoji: "🎀"
    },

    {
        name: "Dusty Rose",
        color: "#b9798b",
        emoji: "🎀"
    },

    {
        name: "Lavender",
        color: "#a993c7",
        emoji: "🎀"
    },

    {
        name: "Sage Green",
        color: "#91a58c",
        emoji: "🎀"
    },

    {
        name: "Baby Blue",
        color: "#9dbbd3",
        emoji: "🎀"
    },

    {
        name: "Cream",
        color: "#eee1c8",
        emoji: "🎀"
    },

    {
        name: "Cherry Red",
        color: "#b94f62",
        emoji: "🎀"
    },

    {
        name: "Champagne",
        color: "#d3b36c",
        emoji: "🎀"
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
   CURRENT ROOM
   ========================================================= */

let currentRoom = 0;

const totalRooms = 7;


/* =========================================================
   BASIC ELEMENTS
   ========================================================= */

const rooms =
    document.querySelectorAll(".shop-room");

const progressFill =
    document.getElementById("progress-fill");

const basketCount =
    document.getElementById("basket-count");

const toast =
    document.getElementById("toast");


/* =========================================================
   CHANGE ROOM
   ========================================================= */

function goToRoom(roomNumber) {

    rooms.forEach((room) => {

        room.classList.remove("active");

    });


    const target =
        document.getElementById(`room-${roomNumber}`);


    if (!target) {
        return;
    }


    target.classList.add("active");


    currentRoom = roomNumber;


    const progress =
        (roomNumber / (totalRooms - 1)) * 100;


    progressFill.style.width =
        `${progress}%`;


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

    let total = 0;


    Object.values(bouquet.flowers)
        .forEach((flower) => {

            total += flower.quantity;

        });


    return total;

}


/* =========================================================
   TOTAL GREENERY
   ========================================================= */

function getTotalGreenery() {

    let total = 0;


    Object.values(bouquet.greenery)
        .forEach((item) => {

            total += item.quantity;

        });


    return total;

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
        document.getElementById("room1-count");


    const room2 =
        document.getElementById("room2-count");


    const greeneryCount =
        document.getElementById("greenery-count");


    if (room1) {
        room1.textContent =
            flowers;
    }


    if (room2) {
        room2.textContent =
            flowers;
    }


    if (greeneryCount) {
        greeneryCount.textContent =
            green;
    }


    updateBasketPopup();

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
        setTimeout(() => {

            toast.classList.remove("show");

        }, 1800);

}


/* =========================================================
   CREATE FLOWER CARD
   ========================================================= */

function createFlowerCard(flower, index) {

    const card =
        document.createElement("article");


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
        card.querySelector(".flower-add");


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
   CREATE FLOWER SHOP
   ========================================================= */

function loadFlowers(
    flowers,
    containerId
) {

    const container =
        document.getElementById(
            containerId
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    flowers.forEach(
        (flower, index) => {

            const card =
                createFlowerCard(
                    flower,
                    index
                );


            container.appendChild(
                card
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


    quantityBox.textContent =
        quantity;


    if (quantity > 0) {

        card.classList.add(
            "has-flower"
        );

    } else {

        card.classList.remove(
            "has-flower"
        );

    }

}


/* =========================================================
   CREATE GREENERY
   ========================================================= */

function loadGreenery() {

    const container =
        document.getElementById(
            "greenery-grid"
        );


    if (!container) {
        return;
    }


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
   CREATE RIBBONS
   ========================================================= */

function loadRibbons() {

    const container =
        document.getElementById(
            "ribbon-grid"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    ribbons.forEach(
        (ribbon) => {

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

                <span
                    class="ribbon-visual"
                >
                    ${ribbon.emoji}
                </span>

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


    chosen.innerHTML = `

        <span
            style="
                color:${ribbon.color};
                font-size:30px;
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
   CREATE WRAPPING
   ========================================================= */

function loadWrapping() {

    const container =
        document.getElementById(
            "wrapping-grid"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    wrapping.forEach(
        (paper) => {

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
   BASKET POPUP
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


    if (!container) {
        return;
    }


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


    total.textContent =
        getTotalFlowers() +
        getTotalGreenery();

}


/* =========================================================
   OPEN BASKET
   ========================================================= */

document
    .getElementById(
        "basket-button"
    )
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


/* =========================================================
   CLOSE BASKET
   ========================================================= */

document
    .getElementById(
        "close-basket"
    )
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
    .getElementById(
        "enter-shop"
    )
    .addEventListener(
        "click",
        () => {

            goToRoom(1);

        }
    );


/* =========================================================
   ROOM NAVIGATION
   ========================================================= */

document
    .getElementById(
        "room1-next"
    )
    .addEventListener(
        "click",
        () => {

            goToRoom(2);

        }
    );


document
    .getElementById(
        "room2-next"
    )
    .addEventListener(
        "click",
        () => {

            goToRoom(3);

        }
    );


document
    .getElementById(
        "room3-next"
    )
    .addEventListener(
        "click",
        () => {

            goToRoom(4);

        }
    );


document
    .getElementById(
        "room4-next"
    )
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
    .getElementById(
        "room5-next"
    )
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
       WRAPPING
       ----------------------------------------- */

    const paper =
        document.createElement(
            "div"
        );


    paper.className =
        "final-paper";


    if (bouquet.wrapping) {

        paper.style.background =
            bouquet.wrapping.color;

    }


    container.appendChild(
        paper
    );


    /* -----------------------------------------
       FLOWERS
       ----------------------------------------- */

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


                const angle =
                    (flowerIndex % 7) * 7 - 21;


                image.style.setProperty(
                    "--flower-angle",
                    `${angle}deg`
                );


                image.style.setProperty(
                    "--flower-delay",
                    `${flowerIndex * 0.04}s`
                );


                flowerArea.appendChild(
                    image
                );


                flowerIndex++;

            }

        }
    );


    container.appendChild(
        flowerArea
    );


    /* -----------------------------------------
       GREENERY
       ----------------------------------------- */

    const greenArea =
        document.createElement(
            "div"
        );


    greenArea.className =
        "final-greenery-area";


    Object.values(
        bouquet.greenery
    ).forEach(
        (item) => {

            for (
                let i = 0;
                i < item.quantity;
                i++
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


                greenArea.appendChild(
                    image
                );

            }

        }
    );


    container.appendChild(
        greenArea
    );


    /* -----------------------------------------
       RIBBON
       ----------------------------------------- */

    if (bouquet.ribbon) {

        const ribbon =
            document.createElement(
                "div"
            );


        ribbon.className =
            "final-ribbon";


        ribbon.style.background =
            bouquet.ribbon.color;


        ribbon.innerHTML =
            "🎀";


        container.appendChild(
            ribbon
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
    .addEventListener(
        "click",
        () => {

            const button =
                document.getElementById(
                    "final-button"
                );


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
    .addEventListener(
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


            document
                .getElementById(
                    "ribbon-chosen"
                )
                .textContent =
                "No ribbon chosen yet.";


            document
                .getElementById(
                    "wrapping-chosen"
                )
                .textContent =
                "No wrapping chosen yet.";


            updateAllCounts();


            goToRoom(0);

        }
    );


/* =========================================================
   INITIALIZE EVERYTHING
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
