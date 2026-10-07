const Filters = {
    props: [
        "mode",
        "selectedColors",
        "selectedSupertypes",
        "selectedTypes",
        "selectedSeries",
        "selectedRarity",
        "selectedFinish",
        "colorOptions",
        "supertypeOptions",
        "typeOptions"
    ],

    emits: [
        "colorsChanged",
        "supertypesChanged",
        "typesChanged",
        "seriesChanged",
        "rarityChanged",
        "finishChanged"
    ],

    template: `
        <div class="filters p-3">

            <h2 class="h5 mb-3">Filters</h2>

            <!-- COLOR -->
            <div class="filter-group mb-3">

                <button
                    class="filter-toggle form-select w-100 text-start"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + mode + 'ColorFilter'">
                    Color
                </button>

                <div
                    class="collapse show filter-options"
                    :id="mode + 'ColorFilter'">

                    <div
                        class="form-check"
                        v-for="color in colorOptions"
                        :key="color">

                        <input
                            class="form-check-input"
                            type="checkbox"
                            :id="mode + color"
                            :value="color"
                            :checked="selectedColors.includes(color)"
                            @change="changeColor(color)">

                        <label
                            class="form-check-label"
                            :for="mode + color">
                            {{ color }}
                        </label>

                    </div>

                </div>

            </div>


            <!-- SUPERTYPE -->
            <div
                class="filter-group mb-3"
                v-if="mode === 'cards'">

                <button
                    class="filter-toggle form-select w-100 text-start"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#supertypeFilter">
                    Supertype
                </button>

                <div
                    class="collapse show filter-options"
                    id="supertypeFilter">

                    <div
                        class="form-check"
                        v-for="supertype in supertypeOptions"
                        :key="supertype">

                        <input
                            class="form-check-input"
                            type="checkbox"
                            :id="supertype"
                            :value="supertype"
                            :checked="selectedSupertypes.includes(supertype)"
                            @change="changeSupertype(supertype)">

                        <label
                            class="form-check-label"
                            :for="supertype">
                            {{ supertype }}
                        </label>

                    </div>

                </div>

            </div>


            <!-- TYPE -->
            <div
                class="filter-group mb-3"
                v-if="mode === 'cards'">

                <button
                    class="filter-toggle form-select w-100 text-start"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#typeFilter">
                    Type
                </button>

                <div
                    class="collapse show filter-options"
                    id="typeFilter">

                    <div
                        class="form-check"
                        v-for="type in typeOptions"
                        :key="type">

                        <input
                            class="form-check-input"
                            type="checkbox"
                            :id="type"
                            :value="type"
                            :checked="selectedTypes.includes(type)"
                            @change="changeType(type)">

                        <label
                            class="form-check-label"
                            :for="type">
                            {{ type }}
                        </label>

                    </div>

                </div>

            </div>


            <!-- SERIES -->
            <div v-if="mode === 'cards'">

                <label class="form-label">Series</label>

                <select
                    class="form-select mb-3"
                    :value="selectedSeries"
                    @change="$emit('seriesChanged', $event.target.value)">

                    <option value="">All Series</option>
                    <option>Final Fantasy</option>
                    <option>Lord of the Rings</option>
                    <option>Fallout</option>
                    <option>The Hobbit</option>
                    <option>Commander Masters</option>
                    <option>Foundations</option>

                </select>

            </div>


            <!-- RARITY -->
            <div v-if="mode === 'cards'">

                <label class="form-label">Rarity</label>

                <select
                    class="form-select mb-3"
                    :value="selectedRarity"
                    @change="$emit('rarityChanged', $event.target.value)">

                    <option value="">All Rarities</option>
                    <option>Common</option>
                    <option>Uncommon</option>
                    <option>Rare</option>
                    <option>Mythic Rare</option>

                </select>

            </div>


            <!-- FINISH -->
            <div v-if="mode === 'cards'">

                <label class="form-label">Finish</label>

                <select
                    class="form-select"
                    :value="selectedFinish"
                    @change="$emit('finishChanged', $event.target.value)">

                    <option value="">All Finishes</option>
                    <option>Nonfoil</option>
                    <option>Foil</option>
                    <option>Etched</option>

                </select>

            </div>

        </div>
    `,

    methods: {

        changeColor(color) {
            const colors = [...this.selectedColors];

            if (colors.includes(color)) {
                colors.splice(colors.indexOf(color), 1);
            } else {
                colors.push(color);
            }

            this.$emit("colorsChanged", colors);
        },

        changeSupertype(supertype) {
            const supertypes = [...this.selectedSupertypes];

            if (supertypes.includes(supertype)) {
                supertypes.splice(supertypes.indexOf(supertype), 1);
            } else {
                supertypes.push(supertype);
            }

            this.$emit("supertypesChanged", supertypes);
        },

        changeType(type) {
            const types = [...this.selectedTypes];

            if (types.includes(type)) {
                types.splice(types.indexOf(type), 1);
            } else {
                types.push(type);
            }

            this.$emit("typesChanged", types);
        }

    }
};