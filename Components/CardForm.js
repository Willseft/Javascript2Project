const CardForm = {
    props: [
        "card",
        "editingId"
    ],

    emits: [
        "addCard",
        "updateCard",
        "deleteCard"
    ],

    template: `
        <div>
            <div class="mb-4">
                <h1>{{ editingId ? "Edit Card" : "Add Card" }}</h1>

                <p class="text-body-secondary mb-0">
                    {{ editingId ? "Edit a card in your collection." : "Add a card to your collection." }}
                </p>
            </div>

            <div class="row g-5">

                <div class="col-md-5 col-lg-4">

                    <div class="card mb-3" v-if="card.image">
                        <img :src="card.image" :alt="card.name">
                    </div>

                    <button
                        class="btn btn-outline-secondary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#imageModal">
                        Choose Image
                    </button>

                </div>

                <div class="col-md-7 col-lg-8">

                    <div class="card">
                        <div class="card-body p-4">

                            <div class="mb-3">
                                <label class="form-label">Card Name</label>

                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="card.name">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Description</label>

                                <textarea
                                    class="form-control"
                                    rows="3"
                                    v-model="card.description">
                                </textarea>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Card Colors</label>

                                <div class="border p-3">

                                    <div
                                        class="form-check form-check-inline"
                                        v-for="color in colorOptions"
                                        :key="color">

                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            :value="color"
                                            v-model="card.colors">

                                        <label class="form-check-label">
                                            {{ color }}
                                        </label>

                                    </div>

                                </div>
                            </div>

                            <div class="row g-3">

                                <div class="col-md-6">
                                    <label class="form-label">Card Type</label>

                                    <select class="form-select" v-model="card.type">
                                        <option value="">Select type</option>
                                        <option>Creature</option>
                                        <option>Artifact</option>
                                        <option>Enchantment</option>
                                        <option>Instant</option>
                                        <option>Sorcery</option>
                                        <option>Land</option>
                                        <option>Planeswalker</option>
                                        <option>Battle</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Supertype</label>

                                    <select class="form-select" v-model="card.supertype">
                                        <option>None</option>
                                        <option>Legendary</option>
                                        <option>Basic</option>
                                        <option>Snow</option>
                                        <option>World</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Rarity</label>

                                    <select class="form-select" v-model="card.rarity">
                                        <option value="">Select rarity</option>
                                        <option>Common</option>
                                        <option>Uncommon</option>
                                        <option>Rare</option>
                                        <option>Mythic Rare</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Series</label>

                                    <select class="form-select" v-model="card.series">
                                        <option value="">Select series</option>
                                        <option>Foundations</option>
                                        <option>Dominaria United</option>
                                        <option>Modern Horizons 3</option>
                                        <option>Commander Masters</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Finish</label>

                                    <select class="form-select" v-model="card.finish">
                                        <option>Nonfoil</option>
                                        <option>Foil</option>
                                        <option>Etched</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Quantity Owned</label>

                                    <input
                                        type="number"
                                        class="form-control"
                                        min="1"
                                        v-model.number="card.quantity">
                                </div>

                            </div>

                            <div class="d-flex justify-content-end gap-2 mt-4">

                                <button
                                    v-if="editingId"
                                    class="btn btn-danger"
                                    @click="$emit('deleteCard')">
                                    Delete Card
                                </button>

                                <a
                                    href="index.html"
                                    class="btn btn-outline-secondary">
                                    Cancel
                                </a>

                                <button
                                    class="btn btn-primary"
                                    @click="saveCard"
                                    data-bs-toggle="modal"
                                    data-bs-target="#savedModal">

                                    {{ editingId ? "Save Changes" : "Add Card" }}

                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,

    data() {
        return {
            colorOptions: [
                "White",
                "Blue",
                "Black",
                "Red",
                "Green",
                "Colorless"
            ]
        };
    },

    methods: {
        saveCard() {
            if (this.editingId) {
                this.$emit("updateCard");
            } else {
                this.$emit("addCard");
            }
        }
    }
};