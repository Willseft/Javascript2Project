const CardDetails = {
    props: [
        "card"
    ],

    template: `
        <div>
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 class="mb-1">Card Viewer</h2>
                    <p class="text-body-secondary mb-0">
                        View card information from your collection.
                    </p>
                </div>

                <a :href="'card.html?id=' + card.id" class="btn btn-primary">
                    Edit
                </a>
            </div>

            <div class="row g-5">

                <div class="col-md-5 col-lg-4">
                    <div class="card">
                        <img :src="card.image" :alt="card.name">
                    </div>
                </div>

                <div class="col-md-7 col-lg-8">
                    <div class="card h-100">
                        <div class="card-body p-4">

                            <div class="mb-4">
                                <p class="small text-body-secondary mb-1">
                                    Card Name
                                </p>
                                <h3 class="h4">{{ card.name }}</h3>
                            </div>

                            <div class="mb-4">
                                <p class="small text-body-secondary mb-1">
                                    Description
                                </p>
                                <p>{{ card.description }}</p>
                            </div>

                            <div class="row g-4">

                                <div class="col-sm-6">
                                    <p class="small text-body-secondary mb-1">
                                        Card Colors
                                    </p>
                                    <p class="mb-0">
                                        {{ card.colors.join(", ") }}
                                    </p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="small text-body-secondary mb-1">
                                        Type
                                    </p>
                                    <p class="mb-0">{{ card.type }}</p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="small text-body-secondary mb-1">
                                        Supertype
                                    </p>
                                    <p class="mb-0">{{ card.supertype }}</p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="small text-body-secondary mb-1">
                                        Series
                                    </p>
                                    <p class="mb-0">{{ card.series }}</p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="small text-body-secondary mb-1">
                                        Rarity
                                    </p>
                                    <p class="mb-0">{{ card.rarity }}</p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="small text-body-secondary mb-1">
                                        Finish
                                    </p>
                                    <p class="mb-0">{{ card.finish }}</p>
                                </div>

                                <div class="col-sm-6">
                                    <p class="small text-body-secondary mb-1">
                                        Quantity Owned
                                    </p>
                                    <p class="mb-0">x{{ card.quantity }}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
};