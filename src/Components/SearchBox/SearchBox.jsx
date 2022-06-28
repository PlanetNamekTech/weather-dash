const SearchBox = () => {
    return (
        <div>
            <label htmlFor="location-input">Input your desired location</label>
            <input 
            type="text"
            id="location-input"
            placeholder="London" />
        </div>
    )
}

export default SearchBox;