const SearchBar = ({ data, getInputValue, fetchData }) => {
    function onEnterKeyPress(e) {
        let userTyped = getInputValue.current.value;
        if (!userTyped) {
            return;
        } else if (e.key === "Enter") {
            fetchData(userTyped)
        }
    }

    function searchNewsFnc() {
        let userTyped = getInputValue.current.value;
        if (!userTyped) {
            return;
        }
        fetchData(userTyped)
    }

    return (
        <>
            <input type="text" id="searchBar" placeholder="e.g science" onKeyDown={onEnterKeyPress} ref={getInputValue} />
            <button id="search-Button" onClick={searchNewsFnc}>Search</button>
        </>
    )
}

export default SearchBar