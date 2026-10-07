const ItemList = {
    props: [
        "items",
        "mode"
    ],

    template: `
        <div class="row g-3">

            <card-item
                v-if="mode === 'cards'"
                v-for="card in items"
                :key="card.id"
                :card="card">
            </card-item>

            <deck-item
                v-if="mode === 'decks'"
                v-for="deck in items"
                :key="deck.id"
                :deck="deck">
            </deck-item>

        </div>
    `
};