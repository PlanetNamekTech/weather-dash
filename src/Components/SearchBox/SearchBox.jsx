const SearchBox = ({search, searchWeather, setSearchQuery}) => {
    return (
        <div>
            <label htmlFor="location-input">Input your desired location</label>
            <input 
            type="text"
            id="location-input"
            placeholder="London" 
            value={search}
            onChange={(e) => setSearchQuery(e.target.value)} />
            <button
            onClick={() => searchWeather(search)}
            >Search</button>
        </div>
    )
}

export default SearchBox;