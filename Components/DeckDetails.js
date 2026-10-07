const DeckDetails = {
    props: [
        "deck",
        "cards"
    ],

    template: `
        <div>
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 class="mb-1">Deck Viewer</h2>
                    <p class="text-body-secondary mb-0">
                        View deck information and cards.
                    </p>
                </div>

                <a :href="'deck.html?id=' + deck.id" class="btn btn-primary">
                    Edit Deck
                </a>
            </div>

            <div class="card mb-5">
                <div class="card-body p-4">
                    <div class="row g-4 align-items-start">
                        <div class="col-md-3">
                            <img :src="deck.image" :alt="deck.name" class="img-fluid">
                        </div>

                        <div class="col-md-9">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <p class="small text-body-secondary mb-1">
                                        Deck Name
                                    </p>
                                    <h3 class="h4 mb-0">
                                        {{ deck.name }}
                                    </h3>
                                    </div>
                                <div class="col-md-6">
                                    <p class="small text-body-secondary mb-1">
                                        Commander
                                    </p>
                                    <p class="mb-0">
                                        {{ deck.commander }}
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <p class="small text-body-secondary mb-1">
                                        Colors
                                    </p>
                                    <p class="mb-0">
                                        {{ deck.colors.join(", ") }}
                                    </p>
                                </div>
                                <div class="col-12">
                                    <p class="small text-body-secondary mb-1">
                                        Deck Description
                                    </p>
                                    <p class="mb-0">
                                        {{ deck.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="input-group">
                        <span class="input-group-text">⌕</span>
                        <input type="search" class="form-control" placeholder="Search cards in this deck">
                    </div>
                </div>
            </div>
            <p v-if="cards.length === 0" class="text-body-secondary">
                This deck has no cards yet.</p>
            <div class="row g-3" v-else>
                <div
                    class="col-6 col-md-4 col-lg-3 col-xl-2" v-for="card in cards" :key="card.id">
                    <a :href="'card-view.html?id=' + card.id" class="text-decoration-none text-body">
                        <div class="card inventory-card h-100">
                            <img :src="card.image" :alt="card.name" class="card-img-top">
                            <div class="card-body d-flex flex-column">
                                <h3 class="h6 mb-1">
                                    {{ card.name }}
                                </h3>
                                <p class="small text-body-secondary mb-2">
                                    {{ card.type }}
                                </p>
                                <span class="small mt-auto">
                                    x1
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `
};