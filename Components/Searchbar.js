const SearchBar = {
    props: ["placeholder", "searchValue"],
    emits: ["searchChanged"],
    template: `
        <div class="input-group w-75">
            <span class="input-group-text">⌕</span>
            <input
                type="search"
                class="form-control"
                :placeholder="placeholder"
                :value="searchValue"
                @input="$emit('searchChanged', $event.target.value)"
            >
        </div> `
};