const DeckItem = {
    props: [
        "deck"
    ],

    template: `
        <div class="col-6 col-md-4 col-xl-3">

            <div class="card inventory-card h-100 shadow-sm">

                <a :href="'deck-view.html?id=' + deck.id">
                    <img
                        :src="deck.image"
                        class="card-img-top"
                        :alt="deck.commander">
                </a>

                <div class="card-body d-flex flex-column">

                    <h3 class="h6 mb-1">
                        {{ deck.name }}
                    </h3>

                    <p class="small text-body-secondary mb-2">
                        {{ deck.commander }}
                    </p>

                    <p class="small mb-3">
                        {{ deck.cardIds.length }} / 100 cards
                    </p>

                    <div class="mt-auto text-end">
                        <a
                            :href="'deck.html?id=' + deck.id"
                            class="btn btn-primary btn-sm">
                            Edit
                        </a>
                    </div>

                </div>

            </div>

        </div>
    `
};