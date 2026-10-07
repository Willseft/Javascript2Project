const CardItem = {
    props: [
        "card"
    ],

    template: `
        <div class="col-6 col-md-4 col-xl-3">

            <div class="card inventory-card h-100">

                <a
                    :href="'card-view.html?id=' + card.id"
                    class="card-view-link">

                    <img
                        :src="card.image"
                        class="card-img-top"
                        :alt="card.name">

                </a>

                <div class="card-body d-flex flex-column">

                    <h3 class="h6 mb-1">
                        {{ card.name }}
                    </h3>

                    <p class="small text-body-secondary mb-2">
                        {{ card.type }}
                    </p>

                    <p class="small mb-3">
                        x{{ card.quantity }}
                    </p>

                    <div class="mt-auto text-end">

                        <a
                            :href="'card.html?id=' + card.id"
                            class="btn btn-primary btn-sm">
                            Edit
                        </a>

                    </div>

                </div>

            </div>

        </div>
    `
};