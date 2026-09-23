const app = Vue.createApp({

    data() {

        return {

            selectedTypes: [],
            selectedColors: [],
            selectedSeries: "",
            selectedRarity: "",
            selectedFinish: "",
            selectedDeckColors: [],
            editingId: null,
            editingDeckId: null,
            selectedCard: null,
            selectedDeck: null,

            newCard: {
                name: "", description: "", colors: [], type: "", supertype: "None", series: "", rarity: "", finish: "Nonfoil", quantity: 1, image: ""
            },

            cards: [
                {
                    id: 1,
                    name: "Sol Ring",
                    description: "Add two colorless mana.",
                    colors: ["Colorless"],
                    type: "Artifact",
                    supertype: "None",
                    series: "Commander Masters",
                    rarity: "Uncommon",
                    finish: "Nonfoil",
                    quantity: 4,
                    image: "images/sol-ring.jpg"
                },
                {
                    id: 2,
                    name: "Lightning Bolt",
                    description: "Lightning Bolt deals 3 damage to any target.",
                    colors: ["Red"],
                    type: "Instant",
                    supertype: "None",
                    series: "Foundations",
                    rarity: "Uncommon",
                    finish: "Nonfoil",
                    quantity: 3,
                    image: "images/lightning-bolt.jpg"
                },
                {
                    id: 3,
                    name: "Command Tower",
                    description: "Add one mana of any color in your commander's color identity.",
                    colors: ["Colorless"],
                    type: "Land",
                    supertype: "None",
                    series: "Commander Masters",
                    rarity: "Common",
                    finish: "Nonfoil",
                    quantity: 2,
                    image: "images/command-tower.jpg"
                },
                {
                    id: 4,
                    name: "Feasting Hobbit",
                    description: "A Hobbit creature from your collection.",
                    colors: ["Black", "Green"],
                    type: "Creature",
                    supertype: "None",
                    series: "Commander Masters",
                    rarity: "Rare",
                    finish: "Nonfoil",
                    quantity: 1,
                    image: "images/feasting-hobbit.png"
                },
                {
                    id: 5,
                    name: "Vivi Ornitier",
                    description: "A creature from your collection.",
                    colors: ["Blue", "Red"],
                    type: "Creature",
                    supertype: "Legendary",
                    series: "Foundations",
                    rarity: "Rare",
                    finish: "Nonfoil",
                    quantity: 1,
                    image: "images/vivi-ornitter.jpg"
                },
                {
                    id: 6,
                    name: "Evil Reawakened",
                    description: "An enchantment from your collection.",
                    colors: ["Black"],
                    type: "Enchantment",
                    supertype: "None",
                    series: "Foundations",
                    rarity: "Rare",
                    finish: "Nonfoil",
                    quantity: 2,
                    image: "images/evil-reawakened.png"
                }
            ],

            newDeck: {
                name: "",
                commander: "",
                colors: [],
                description: "",
                image: "",
                cardIds: []
            },

            decks: [
                {
                    id: 1,
                    name: "Hobbit Feast",
                    commander: "Feasting Hobbit",
                    colors: ["Black", "Green"],
                    description: "A food-focused deck built around creating Food tokens and using them to build up creatures throughout the game.",
                    image: "images/feasting-hobbit.png",
                    cardIds: []
                }
            ]
        };

    },

    computed: {

        filteredCards() {
            return this.cards.filter(card => {
                const matchesType = this.selectedTypes.length === 0 || this.selectedTypes.includes(card.type);
                const matchesColor = this.selectedColors.length === 0 || this.selectedColors.some(color => card.colors.includes(color));
                const matchesSeries = this.selectedSeries === "" || card.series === this.selectedSeries;
                const matchesRarity = this.selectedRarity === "" || card.rarity === this.selectedRarity;
                const matchesFinish = this.selectedFinish === "" || card.finish === this.selectedFinish;
                return matchesType &&
                    matchesColor &&
                    matchesSeries &&
                    matchesRarity &&
                    matchesFinish;
            });
        },

        filteredDecks() {
            return this.decks.filter(deck => this.selectedDeckColors.length === 0 || this.selectedDeckColors.some(color => deck.colors.includes(color))
            );
        },

        deckCards() {
            return this.cards.filter(card => this.newDeck.cardIds.includes(card.id));
        },

        selectedDeckCards() {
            if (!this.selectedDeck) {
                return [];
            }
            return this.cards.filter(card => this.selectedDeck.cardIds.includes(card.id));
        }
    },

    mounted() {
        const savedCards = localStorage.getItem("cards");

        if (savedCards) {
            this.cards = JSON.parse(savedCards);
        }

        const savedDecks = localStorage.getItem("decks");
        
        if (savedDecks) {
            this.decks = JSON.parse(savedDecks);
        }

        
        const params = new URLSearchParams(window.location.search);
        
        const id = Number(params.get("id"));
        
        if (window.location.pathname.includes("card.html") && id) {
            const card = this.cards.find(card => card.id === id);
            if (card) {
                this.editingId = id;
                this.newCard = {
                    ...card,
                    colors: [...card.colors]
                };
            }
        }

        if (window.location.pathname.includes("card-view.html") && id) {
            const card = this.cards.find(card => card.id === id);
            if (card) {
                this.selectedCard = card;
            }
        }

        if (window.location.pathname.includes("deck.html") && id) {
            const deck = this.decks.find(deck => deck.id === id);
            if (deck) {
                this.editingDeckId = id;
                this.newDeck = {
                    ...deck,
                    colors: [...deck.colors],
                    cardIds: [...deck.cardIds]
                };
            }

        }

        if (window.location.pathname.includes("deck-view.html") && id) {
            const deck = this.decks.find(deck => deck.id === id);
            if (deck) {
                this.selectedDeck = deck;
            }
        }

    },

    methods: {

        addCard() {
            const newId = Math.max(...this.cards.map(card => card.id), 0) + 1;
            this.cards.push({
                id: newId,
                name: this.newCard.name,
                description: this.newCard.description,
                colors: this.newCard.colors,
                type: this.newCard.type,
                supertype: this.newCard.supertype,
                series: this.newCard.series,
                rarity: this.newCard.rarity,
                finish: this.newCard.finish,
                quantity: this.newCard.quantity,
                image: this.newCard.image
            });
            localStorage.setItem("cards", JSON.stringify(this.cards));
        },

        updateCard() {
            const index = this.cards.findIndex(card => card.id === this.editingId);
            if (index !== -1) {
                this.cards[index] = {
                    ...this.newCard,
                    id: this.editingId
                };
                localStorage.setItem("cards", JSON.stringify(this.cards));
            }
        },

        deleteCard() {
            this.cards = this.cards.filter(card => card.id !== this.editingId);
            localStorage.setItem("cards", JSON.stringify(this.cards));
            window.location.href = "index.html";
        },

        addDeck() {
            const newId =
                Math.max(...this.decks.map(deck => deck.id), 0) + 1;
            let image = "";
            const commander = this.cards.find(card => card.name === this.newDeck.commander);
            if (commander) {
                image = commander.image;
            }
            this.decks.push({
                id: newId,
                name: this.newDeck.name,
                commander: this.newDeck.commander,
                colors: this.newDeck.colors,
                description: this.newDeck.description,
                image: image,
                cardIds: this.newDeck.cardIds
            });
            localStorage.setItem("decks", JSON.stringify(this.decks));
            window.location.href = "index.html";
        },

        updateDeck() {
            const index =
                this.decks.findIndex(deck => deck.id === this.editingDeckId);
            if (index !== -1) {
                let image = this.newDeck.image;
                const commander =
                    this.cards.find(card => card.name === this.newDeck.commander);
                if (commander) {
                    image = commander.image;
                }
                this.decks[index] = {
                    ...this.newDeck,
                    id: this.editingDeckId,
                    image: image
                };
                localStorage.setItem("decks", JSON.stringify(this.decks));
            }
            window.location.href = "index.html";
        },

        deleteDeck() {
            this.decks =
                this.decks.filter(deck => deck.id !== this.editingDeckId);
            localStorage.setItem("decks", JSON.stringify(this.decks));
            window.location.href = "index.html";
        },

        addCardToDeck(cardId) {
            if (!this.newDeck.cardIds.includes(cardId)) {
                this.newDeck.cardIds.push(cardId);
            }
        },

        removeCardFromDeck(cardId) {
            this.newDeck.cardIds =
                this.newDeck.cardIds.filter(id => id !== cardId);
        }
    }
});

app.mount("#app");