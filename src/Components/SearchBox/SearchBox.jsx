import './searchBox.css';

const SearchBox = ({search, searchWeather, setSearchQuery}) => {
    return (
        <div className="search-box">
            <label className="search-label"
            htmlFor="location-input">Input your desired location</label>
            <br />
            <input 
            className='search-input'
            type="text"
            id="location-input"
            placeholder="Search City" 
            value={search}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={(e) => {if(e.key==="Enter") {
               searchWeather(search)
            }}}
            />
            <button
            className="search-button"
            onClick={() => searchWeather(search)}
            >Search</button>
        </div>
    )
}

export default SearchBox;